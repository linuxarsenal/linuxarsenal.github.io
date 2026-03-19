# AGENTS.md - Guidelines for Agentic Coding
This document provides guidelines for agents working on this VuePress documentation site.

## Project Overview

VuePress 2 static documentation/blog site for Linux/embedded technical content:
- VuePress 2 with Vite bundler
- VuePress Theme Hope (`vuepress-theme-hope`)
- Sass for custom styling
- Chinese language (lang: `zh-CN`)

## Build Commands

| Command | Description |
|---------|-------------|
| `pnpm docs:dev` | Start dev server with hot reload |
| `pnpm docs:build` | Build static site to `docs/.vuepress/dist/` |
| `pnpm install` | Install dependencies |

No test suite or linting configured. Run `pnpm test` for placeholder.

```
.
├── docs/
│   ├── .vuepress/
│   │   ├── config.js     # Main configuration
│   │   ├── dist/         # Build output (auto-generated)
│   │   ├── .cache/       # Build cache (clear if issues)
│   │   └── .temp/        # Temp files (clear if issues)
│   ├── README.md         # Home page
│   ├── os/               # OS articles
│   ├── embedded/         # Embedded Linux articles
│   └── about/            # About page
├── package.json
└── .github/workflows/docs.yml
```

## Code Style Guidelines

### Configuration File (config.js)

```javascript
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'LinuxArsenal',
    bundler: viteBundler(),
    head: [['link', { rel: 'icon', href: '/pics/logo.png' }]],
    theme: hopeTheme({
        logo: '/pics/logo.png',
        darkmode: 'toggle',
        navbar: [...],
        sidebar: {...},
        pageInfo: ['Author', 'Date', 'ReadingTime', 'Category', 'Tag'],
        footer: 'Footer text',
        displayFooter: true,
        markdown: { align: true, mark: true, tasklist: true, ... },
    }),
    debug: true,
})
```

### Imports
- External packages first: `vuepress`, `@vuepress/bundler-vite`, `vuepress-theme-hope`
- Use named imports with 4 spaces indentation

### Naming Conventions
- Config files: kebab-case (e.g., `config.js`)
- Markdown files: lowercase with hyphens (e.g., `getting-started.md`)
- Directories: lowercase

### Formatting
- 4 spaces indentation in config files
- Trailing commas in multi-line objects/arrays
- Lines under 100 characters when practical

## Frontmatter Patterns

### Standard Page
```yaml
---
title: Page Title
description: Page description
date: 2024-01-01
tags: [linux, programming]
category: Operating System
---
```

### Home Page (README.md)
```yaml
---
home: true
icon: home
title: 首页
heroText: Site Title
tagline: Site tagline
heroImage: /pics/logo.png
actions:
  - { text: Label, link: /path/, type: primary }
features:
  - { icon: icon-name, title: Title, details: Description }
---
```

## Sidebar Configuration

Sidebar in `config.js` with collapsible groups:

```javascript
sidebar: {
    '/os/': [
        {
            text: 'Section Name', icon: 'icon-name',
            prefix: '/os/subpath/', collapsible: true,
            children: [
                { text: 'Page Title', link: 'page-slug' },
                'page-slug-2',  // Uses filename as text
            ],
        },
    ],
}
```

Icons: `home`, `computer`, `code`, `info`, `folder`, `network`, `process`, `memory`, `c`, `python`

## Markdown Content Guidelines

- Use frontmatter for metadata (title, description, date, tags)
- Hierarchical headings: H1 → H2 → H3
- Relative links for internal navigation
- Specify language in code blocks for syntax highlighting
- Supported extensions: align, attrs, mark, spoiler, sub, sup, tasklist, tabs

## GitHub Actions

`.github/workflows/docs.yml` deploys automatically on push to `main`. Uses Node.js 22, pnpm. Output: `docs/.vuepress/dist` to `gh-pages` branch.

## Best Practices

1. Test locally with `pnpm docs:dev` before committing
2. Clear `.cache` and `.temp` if build issues occur
3. Verify all markdown links are valid before building
4. Use descriptive filenames with hyphens for articles
5. Add proper frontmatter to all new pages
6. Do NOT commit secrets or credentials
