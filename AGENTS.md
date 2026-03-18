# AGENTS.md - Guidelines for Agentic Coding

This document provides guidelines for agents working on this VuePress documentation site.

## Project Overview

This is a VuePress 2 static documentation/blog site using:
- VuePress 2 with Vite bundler
- VuePress Theme Hope (`vuepress-theme-hope`)
- Sass for custom styling
- Markdown content in `docs/` directory
- Configuration in `docs/.vuepress/config.js`

---

## Build Commands

### Development Server
```bash
pnpm docs:dev
```
Starts the VuePress dev server with hot reload.

### Production Build
```bash
pnpm docs:build
```
Builds the static site to `docs/.vuepress/dist/`.

### Install Dependencies
```bash
pnpm install
```

### Testing
There is currently **no test suite** configured for this project.
```bash
pnpm test  # Echoes "Error: no test specified" && exit 1
```

### Linting
No linting is configured for this project.

### Running a Single Test (when tests are added)
```bash
pnpm test -- <test-file>
```

---

## Code Style Guidelines

### General Principles
- Keep configuration files minimal and well-organized
- Use ESM syntax (`import`/`export`) in config files
- Follow VuePress 2 best practices from official documentation
- Write clean, readable code with descriptive names
- Avoid unnecessary comments; code should be self-documenting

### Configuration File (config.js)

The main configuration is in `docs/.vuepress/config.js`. Use this structure:

```javascript
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'SiteTitle',
    description: 'Description',
    bundler: viteBundler(),
    theme: hopeTheme({
        logo: '/pics/logo.png',
        docsDir: 'docs',
        darkmode: 'toggle',
        navbar: [...],
        sidebar: {...},
        plugins: {...},
        markdown: {...},
    }),
})
```

### Imports
- Group imports logically: external packages first, then internal
- Use named imports where possible
- Example:
```javascript
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
```

### Naming Conventions
- **Files**: Use kebab-case for VuePress config (e.g., `config.js`)
- **Markdown files**: Use descriptive lowercase with hyphens (e.g., `getting-started.md`)
- **Directories**: Use lowercase (e.g., `docs/.vuepress/`)

### Formatting
- Use 4 spaces for indentation in config files
- Keep lines under 100 characters when practical
- Add trailing commas in multi-line objects/arrays

### Types
- This project does not use TypeScript
- Document frontmatter properly with key-value pairs

### Error Handling
- VuePress handles most errors during build
- Check console output for configuration issues
- Verify all referenced files exist before building
- Use try-catch in any custom JavaScript plugins

### Markdown Content Guidelines
- Use frontmatter for page metadata (title, description, date)
- Keep headings hierarchical (H1 -> H2 -> H3)
- Use relative links for internal navigation
- Code blocks should specify language for syntax highlighting
- Supported markdown extensions: align, attrs, mark, spoiler, sub, sup, tasklist

---

## Project Structure

```
.
├── docs/
│   ├── .vuepress/
│   │   ├── config.js      # Main VuePress configuration
│   │   ├── dist/          # Built output (do not edit)
│   │   ├── .cache/       # Build cache
│   │   └── .temp/        # Temporary build files
│   ├── README.md         # Home page content
│   └── *.md              # Additional documentation pages
├── package.json
└── .github/workflows/docs.yml
```

---

## Theme Configuration (vuepress-theme-hope)

Key theme options used in this project:
- `navbar`: Top navigation links
- `sidebar`: Sidebar navigation (supports prefix, collapsible groups)
- `pageInfo`: Display Author, Date, ReadingTime, Category, Tag
- `footer`: Site-wide footer text
- `plugins`: markdownImage, markdownTab, etc.
- `markdown`: Enable extended markdown syntax

### Sidebar Pattern
```javascript
sidebar: {
    '/os/': [
        {
            text: 'Section Name',
            icon: 'icon-name',
            prefix: '/os/topic/',
            collapsible: true,
            children: [
                { text: 'Page Title', link: 'page-slug' },
            ],
        },
    ],
}
```

---

## GitHub Actions Workflow

The project uses GitHub Actions (`.github/workflows/docs.yml`):
- Triggers on push to `main` branch
- Uses Node.js 22, pnpm
- Builds to `gh-pages` branch
- Build output: `docs/.vuepress/dist`

---

## Best Practices for Modifications

1. **Before building**: Ensure all markdown links are valid
2. **Adding pages**: Create `.md` files in `docs/` directory with proper frontmatter
3. **Customization**: Add plugins/styles in `config.js`
4. **Testing changes**: Run `pnpm docs:dev` locally first
5. **Deployment**: Push to main triggers automatic build via GitHub Actions
6. **Build issues**: Clear `.cache` and `.temp` folders if problems occur

---

## Important Notes

- This is a **documentation site**, not an application
- No unit/integration tests exist
- No linting configured
- Custom theme modifications should be added to `docs/.vuepress/styles/`
- Frontmatter controls page metadata (title, description, date, tags, etc.)
- Always test changes locally with `pnpm docs:dev` before committing
- The site uses Chinese language (lang: 'zh-CN')
