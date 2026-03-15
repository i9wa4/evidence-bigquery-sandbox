# evidence-bigquery-sandbox

Proof-of-concept Evidence.dev dashboard backed by BigQuery.

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Authenticate with Google Cloud:

   ```sh
   gcloud auth application-default login
   ```

3. Edit `sources/bigquery/connection.yaml` and set your Google Cloud
   project ID.

4. Start the dev server:

   ```sh
   npm run dev
   ```

   Open `http://localhost:3000`.

## Structure

| Path                   | Purpose                    |
| ---------------------- | -------------------------- |
| `pages/`               | Markdown report pages      |
| `sources/bigquery/`    | BigQuery connection config |
| `evidence.config.yaml` | Plugin registration        |

## Credentials

Use Application Default Credentials (ADC) for local development.
Never commit `*.options.yaml` or service account key files.
