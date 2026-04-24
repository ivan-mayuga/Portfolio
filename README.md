# Portfolio

Vite + React portfolio site configured for GitHub Pages project-site deployment.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## GitHub Pages deployment

This repo is configured for a GitHub Pages project site under:

`https://<your-user>.github.io/Portfolio/`

### Required config

- `vite.config.js` uses `base: "/Portfolio/"`
- React-managed images are imported from `src/assets`
- `public/Projects/` remains static and is copied through Vite as-is

### Deployment method

This repo uses **GitHub Actions** as the canonical deployment flow.

Workflow file:

- `.github/workflows/deploy-pages.yml`

### GitHub repository settings

In GitHub:

1. Open `Settings`
2. Open `Pages`
3. Set `Source` to `GitHub Actions`

After that, every push to `main` will:

1. Install dependencies with `npm ci`
2. Build the app with `npm run build`
3. Upload `dist/`
4. Deploy the built site to GitHub Pages

### Notes

- Branch-based `gh-pages` deployment is not the primary setup for this repo.
- If the repository name changes, update `base` in `vite.config.js` to match the new repo path.
- Asset filenames in `src/assets` should stay lowercase and case-consistent to avoid Linux/GitHub build failures.
