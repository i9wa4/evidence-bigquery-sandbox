# Development Workflow (Copilot Coding Agent)

This document describes how the Copilot Coding Agent development workflow
operates in this repository, covering CI/CD pipelines, branch previews,
the auto-approve mechanism, and security constraints.

---

## Overall Flow

1. Copilot opens a branch and pushes commits.
2. `branch-preview.yml` triggers on the push and builds a branch-specific
   preview of the Evidence dashboard, deployed to GitHub Pages under
   `branch/<slug>-<hash>/`. The preview URL is posted to the workflow
   step summary.
3. The human reviewer visits the preview URL to evaluate the rendered dashboard.
4. Copilot iterates (pushes more commits); each push triggers a new preview build.
5. When the work looks good, the PR is marked ready for review.
6. The human reviews and approves the PR, then merges to main.
7. `ci.yml` runs on the merge commit (lint/type-check via pre-commit).
8. On ci success, `deploy.yml` triggers and deploys the dashboard to the
   GitHub Pages root (production).
9. After the branch is deleted, `branch-preview-cleanup.yml` removes the
   branch preview directory from gh-pages.

---

## GitHub Actions Pipeline

### ci.yml

- **Trigger**: push to `main`; pull request to `main` (opened, synchronize, reopened); `workflow_dispatch`
- **Purpose**: Lint and type-check via pre-commit on every change targeting main.
- **Key behavior**: `cancel-in-progress: true` — redundant pushes cancel prior
  runs for the same ref. Runs with `contents: read` only.

### branch-preview.yml

- **Trigger**: push to any branch except `main` and `gh-pages`; `workflow_dispatch`
- **Purpose**: Build and publish a per-branch preview of the Evidence dashboard.
- **Key behavior**:
  - Computes a URL-safe branch identifier (`SAFE_BRANCH`):
    - `SLUG` = branch name with non-alphanumeric characters replaced by `-`
    - `HASH` = first 8 hex characters of `sha256sum` of the branch name
    - `SAFE_BRANCH` = `<SLUG>-<HASH>`
  - Deploys to `gh-pages` under `branch/<SAFE_BRANCH>/`.
  - Posts the preview URL to the GHA step summary.
  - Uses the shared `gh-pages-publish` concurrency group
    (`cancel-in-progress: false`) to prevent concurrent gh-pages writes.

### deploy.yml

- **Trigger**: fires on ALL `ci` workflow completions (including PR runs),
  gated by `if:` to `conclusion == 'success' && head_branch == 'main'`;
  also `workflow_dispatch`.
- **Purpose**: Deploy the Evidence dashboard to the GitHub Pages root (production).
- **Key behavior**:
  - `keep_files: true` — preserves the `branch/` subdirectories in gh-pages
    when deploying to root, so branch previews are not deleted on production deploy.
  - Uses the shared `gh-pages-publish` concurrency group.

### branch-preview-cleanup.yml

- **Trigger**: branch `delete` event (branch deletions only, not tags).
- **Purpose**: Remove the branch preview directory from gh-pages after a branch
  is deleted.
- **Key behavior**:
  - Computes the same `SAFE_BRANCH` formula as `branch-preview.yml`.
  - Uses `persist-credentials: true` (intentional exception to the repo default
    of `false`) — required because this step pushes directly to gh-pages.
  - Gracefully skips if the gh-pages branch or preview directory does not exist.
  - Uses the shared `gh-pages-publish` concurrency group.

### auto-approve.yml

- **Trigger**: schedule every 10 minutes (`*/10 * * * *`); `workflow_dispatch`.
- **Purpose**: Re-dispatch workflow runs that are blocked by the GitHub
  approval gate, then cancel the original blocked run.
- See [Auto-Approve Mechanism](#auto-approve-mechanism) below.

---

## Auto-Approve Mechanism

### Why it exists

GitHub treats the Copilot bot as an "outside collaborator" and places its
workflow runs in `action_required` status even under the "Require approval
for first-time contributors" setting. Without intervention, every Copilot
push requires a human to manually approve the run before CI can proceed.

`auto-approve.yml` automates this: every 10 minutes it polls for
`action_required` runs from an allowlist of actors, re-dispatches each
via `workflow_dispatch` (which bypasses the gate), and cancels the
original blocked run.

### Why schedule, not workflow_run

A `workflow_run` trigger from a restricted actor can itself be blocked
by the approval gate — making the fix self-defeating. `schedule` triggers
are always approved by GitHub, so the workaround is reliable.

### Allowlisted actors and workflows

```
Actors:   ["i9wa4", "Copilot", "copilot-swe-agent[bot]", "dependabot[bot]"]
Workflows: ["ci", "Branch Preview"]
```

NOTE: The human owner (`i9wa4`) is included in the allowlist. This is
intentional — the allowlist governs which actors' blocked runs are
re-dispatched, not who can approve PRs.

### Polling cadence

Re-dispatch runs every 10 minutes. A blocked run will be unblocked within
10 minutes of the `action_required` status appearing.

---

## Security Design

### Context injection prevention

All GitHub Actions context values (actor, workflow name, branch name, run ID)
are passed to `run:` steps via the `env:` block and accessed as shell variables
(`$ACTOR`, `$WF_NAME`, etc.). They are never interpolated directly as
`${{ github.actor }}` inside `run:` bodies. This prevents script injection
attacks where a malicious branch name or actor name could execute arbitrary
shell commands.

### Shared gh-pages-publish concurrency group

`branch-preview.yml`, `deploy.yml`, and `branch-preview-cleanup.yml` all
use the same concurrency group `gh-pages-publish` with `cancel-in-progress: false`.
This ensures that concurrent gh-pages writes queue rather than interleave,
preventing corruption of the gh-pages branch.

---

## Known Limitations

### F8: Untrusted push triggers privileged workflow (accepted risk)

`branch-preview.yml` runs on any non-main push with `contents: write`
permissions and accesses GCP credentials. An untrusted actor who can push
a branch could trigger this privileged workflow. This is an accepted risk
for this sandbox repository.

### F15: GCP secrets scoping (deferred)

The `BIGQUERY_CREDENTIALS_JSON` and `BIGQUERY_PROJECT_ID` secrets are
available to all workflows. Scoping them to only the workflows that need
GCP access is future work.
