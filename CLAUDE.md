# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

VuePress 2 static documentation/blog site for Chinese-language Linux and embedded systems content. Deployed automatically to GitHub Pages on push to `main`.

## Commands

```bash
pnpm docs:dev     # Start dev server with hot reload at localhost:8080
pnpm docs:build   # Build to docs/.vuepress/dist/
pnpm install      # Install dependencies
```

No test suite or linter is configured. If the build has strange errors, delete `docs/.vuepress/.cache/` and `docs/.vuepress/.temp/` and retry.

## Architecture

**Stack**: VuePress 2 (v2.0.0-rc.26) + Vite bundler + `vuepress-theme-hope` theme + Sass

**Entry points**:
- `docs/.vuepress/config.js` — all site configuration: navbar, sidebar, theme options, markdown extensions, Font Awesome CDN head injection
- `docs/.vuepress/client.ts` — registers the custom `RightActionBar.vue` global component
- `docs/.vuepress/styles/index.scss` — font size and typography overrides

**Content root**: `docs/` — each subdirectory maps to a URL path (`os/`, `embedded/`, `about/`). `README.md` inside a directory becomes the index page for that path.

**Custom component**: `docs/.vuepress/components/RightActionBar.vue` — fixed right-side floating bar with TOC toggle, sidebar toggle, dark mode switch, WeChat QR popup, GitHub link, and scroll-to-top.

**Public assets**: `docs/.vuepress/public/pics/` — logo and QR code images referenced as `/pics/<file>` in config and frontmatter.

## Sidebar Configuration

Sidebars are path-keyed in `config.js`. Use `prefix` to avoid repeating path segments in `children`:

```javascript
sidebar: {
    '/os/': [
        {
            text: 'Section', icon: 'icon-name',
            prefix: '/os/process/',
            collapsible: true,
            children: ['intro', 'schedule'],  // resolves to /os/process/intro.md etc.
        },
    ],
}
```

When adding a new article, register it in the matching sidebar group and set correct `prefix`.

## Frontmatter

Standard article:
```yaml
---
title: Page Title
icon: fa-solid fa-code
order: 1
category:
  - Category Name
tag:
  - tag1
---
```

Home page (`docs/README.md`) uses `home: true` with `heroText`, `tagline`, `heroImage`, `actions`, and `features` keys.

## Icons

Icons use Font Awesome 6 loaded via CDN. Specify as `fa-solid fa-<name>` (e.g., `fa-solid fa-microchip`). The config also accepts shorthand names like `home`, `code`, `info` from the theme's built-in set for navbar/sidebar entries.

## Markdown Extensions Enabled

`align`, `attrs`, `mark`, `spoiler`, `sub`, `sup`, `tasklist`, `tabs`, `codeTabs`

## Deployment

`.github/workflows/docs.yml` runs on push to `main`: installs with pnpm, builds, then pushes `docs/.vuepress/dist/` to the `gh-pages` branch via `crazy-max/ghaction-github-pages@v4`.
