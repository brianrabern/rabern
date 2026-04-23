# rabern's page

Personal site (Create React App, React Router hash mode, GitHub Pages).

## Analytics (optional)

Set `REACT_APP_GA_MEASUREMENT_ID` to your GA4 measurement ID in a `.env` file before production builds. Leave unset for local development without analytics.

## Activity feed

Overview page reads [`src/data/activity.json`](src/data/activity.json). You can edit it by hand or add a scheduled GitHub Action that updates the file (for example merging manual entries with stats from the GitHub API) before `npm run build` / deploy.
