# evidence-bigquery-sandbox

Proof-of-concept Evidence.dev dashboard backed by BigQuery.

## Setup

1. Enter the Nix dev shell:

   ```sh
   nix develop
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Authenticate with Google Cloud:

   ```sh
   gcloud auth application-default login
   ```

4. Edit `sources/bigquery/connection.yaml` and set your GCP project ID.

5. Start the dev server:

   ```sh
   npm run dev
   ```

   Open `http://localhost:3000`. The index page runs `SELECT 1` to verify connectivity.

## Structure

| Path                       | Purpose                                               |
| -------------------------- | ----------------------------------------------------- |
| `pages/`                   | Markdown report pages                                 |
| `sources/bigquery/`        | BigQuery connection config                            |
| `evidence.config.yaml`     | Plugin registration                                   |
| `flake.nix`                | Nix devShell (nodejs_24, google-cloud-sdk, terraform) |

## Credentials

Use Application Default Credentials (ADC) for local development.
Never commit `*.options.yaml` or service account key files.
