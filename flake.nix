{
  description = "evidence-bigquery-sandbox - Evidence.dev dashboard with BigQuery backend";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-25.11-darwin";
    flake-parts.url = "github:hercules-ci/flake-parts";
    git-hooks = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "aarch64-darwin"
        "x86_64-linux"
        "aarch64-linux"
      ];

      imports = [
        inputs.git-hooks.flakeModule
        inputs.treefmt-nix.flakeModule
      ];

      perSystem =
        {
          config,
          pkgs,
          system,
          ...
        }:
        let
          # terraform is BSL-1.1 (unfree) in nixpkgs-25.11
          pkgsUnfree = import inputs.nixpkgs {
            inherit system;
            config.allowUnfreePredicate = _pkg: true;
          };
          rumdlConfig = pkgs.writeText "rumdl.toml" ''
            [global]
            disable = ["MD024"]

            [MD013]
            line-length = 120
          '';
          ghWorkflowFiles = "^\\.github/workflows/.*\\.(yml|yaml)$";
        in
        {
          # nix develop
          devShells.default = pkgs.mkShell {
            packages = [
              pkgs.google-cloud-sdk
              pkgsUnfree.terraform
              pkgs.nodejs_24
              pkgs.rumdl
            ];
            shellHook = ''
              ${config.pre-commit.installationScript}
            '';
          };

          # nix fmt
          treefmt = {
            projectRootFile = "flake.nix";
            settings.global.excludes = [
              ".direnv"
              ".git"
              "*.lock"
            ];
            programs.nixfmt.enable = true;
            settings.formatter.rumdl = {
              command = "${pkgs.rumdl}/bin/rumdl";
              options = [
                "fmt"
                "--config"
                "${rumdlConfig}"
              ];
              includes = [ "*.md" ];
            };
          };

          # nix flake check (pre-commit hooks)
          pre-commit = {
            check.enable = true;
            settings.hooks = {
              # General
              end-of-file-fixer.enable = true;
              trim-trailing-whitespace.enable = true;
              check-added-large-files.enable = true;
              detect-private-keys.enable = true;
              check-merge-conflicts.enable = true;
              check-json.enable = true;
              check-yaml.enable = true;

              # Secrets
              gitleaks = {
                enable = true;
                entry = "${pkgs.gitleaks}/bin/gitleaks protect --verbose --redact --staged";
                pass_filenames = false;
              };

              # GitHub Actions
              actionlint.enable = true;
              ghalint = {
                enable = true;
                entry = "${pkgs.ghalint}/bin/ghalint run";
                files = ghWorkflowFiles;
              };
              zizmor = {
                enable = true;
                entry = "${pkgs.zizmor}/bin/zizmor";
                files = ghWorkflowFiles;
              };

              # Shell
              shellcheck.enable = true;

              # Nix
              # NOTE: flake-check removed from pre-commit (too slow). Runs in CI only.
              # Run on explicit target to avoid scanning .direnv/ (statix scans repo by default)
              statix = {
                enable = true;
                entry = "${pkgs.bash}/bin/bash -c '${pkgs.statix}/bin/statix check flake.nix'";
                pass_filenames = false;
              };

              # Markdown
              rumdl-check = {
                enable = true;
                entry = "${pkgs.bash}/bin/bash -c 'test -n \"$NIX_BUILD_TOP\" || ${pkgs.rumdl}/bin/rumdl --config ${rumdlConfig} check \"$@\"' --";
                types = [ "markdown" ];
              };

              # Formatter
              treefmt = {
                enable = true;
                entry = "${pkgs.bash}/bin/bash -c 'test -n \"$NIX_BUILD_TOP\" || ${pkgs.nix}/bin/nix fmt'";
                pass_filenames = false;
                always_run = true;
              };
            };
          };
        };
    };
}
