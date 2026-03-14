# AGENTS.md - Guidelines for Agentic Coding

This document provides guidelines for agents working on this VuePress documentation site.

## Project Overview

This is a VuePress 2 static documentation/blog site using:
- VuePress 2 with Vite bundler
- Default theme
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
There is currently **no test suite** configured for this project. The npm test script is a placeholder:
```bash
pnpm test  # Echoes "Error: no test specified" and exits with code 1
```

### Linting
No linting is configured for this project.

### Running a Single Test (when tests are added)
```bash
# Generic approach
pnpm test -- <test-file>

# With vitest
pnpm vitest run <test-file>

# With jest
pnpm jest <test-file>

# With mocha
pnpm mocha <test-file>
```

---

## Code Style Guidelines

### General Principles
- Keep configuration files minimal and well-organized
- Use ESM syntax (`import`/`export`) in config files
- Follow VuePress 2 best practices from official documentation
- Write clean, readable code with descriptive names

### Configuration File (config.js)

The main configuration is in `docs/.vuepress/config.js`. Use this structure:

```javascript
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/',
    bundler: viteBundler(),
    theme: defaultTheme(),
    // Add plugins, custom styles, etc. here
})
```

### Imports
- Group imports logically: external packages first, then internal
- Use named imports where possible
- Example:
```javascript
import { foo } from 'external-package'
import { bar } from './local-module'
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

### GitHub Actions Workflow
The project uses GitHub Actions (`.github/workflows/docs.yml`):
- Triggers on push to `main` branch
- Uses Node.js 22, pnpm
- Builds to `gh-pages` branch

---

## Project Structure

```
.
├── docs/
│   ├── .vuepress/
│   │   ├── config.js      # Main VuePress configuration
│   │   ├── dist/          # Built output
│   │   ├── .cache/       # Build cache
│   │   └── .temp/        # Temporary build files
│   ├── README.md         # Home page content
│   └── *.md              # Additional documentation pages
├── package.json
└── .github/workflows/docs.yml
```

---

## Best Practices for Modifications

1. **Before building**: Ensure all markdown links are valid
2. **Adding pages**: Create `.md` files in `docs/` directory
3. **Customization**: Add plugins/styles in `config.js`
4. **Testing changes**: Run `pnpm docs:dev` locally first
5. **Deployment**: Push to main triggers automatic build via GitHub Actions

---

## Important Notes

- This is a **documentation site**, not an application
- No unit/integration tests exist
- No linting configured
- Custom theme modifications should be added to `docs/.vuepress/styles/`
- Frontmatter in markdown files controls page metadata (title, description, etc.)
- Always test changes locally with `pnpm docs:dev` before committing
- Clear `.cache` and `.temp` folders if you encounter build issues
