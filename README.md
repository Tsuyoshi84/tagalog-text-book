# Tagalog Text Book

[![Netlify Status](https://api.netlify.com/api/v1/badges/2e9b035a-f478-4d34-8ede-9118b808fab1/deploy-status)](https://app.netlify.com/projects/tagalog-text-book/deploys)

Static educational site for Tagalog grammar, vocabulary, and expressions. Content lives in Markdown under `docs/` and is built with [VitePress](https://vitepress.dev/).

## Prerequisites

- Node.js (see `.tool-versions`; CI uses `nodejs` from that file)
- [pnpm](https://pnpm.io/) 10.x (see `package.json` `packageManager`)

## Setup

```bash
pnpm install
```

## Commands

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `pnpm docs:dev`     | Local dev server with hot reload           |
| `pnpm docs:build`   | Production build to `docs/.vitepress/dist` |
| `pnpm docs:preview` | Preview the production build locally       |
| `pnpm format`       | Format the repo (Oxford formatter)         |

## Content layout

- `docs/guide/` — Core grammar (pronunciation, sentence structure, verbs)
- `docs/phrases/` — Context-based phrase lists
- `docs/expressions/` — Idioms, Taglish, common expressions
- `docs/reference/` — Cheat sheets, affix lists, pronunciation
- `docs/culture/` — Etiquette, regional notes, language history

Authoring conventions, frontmatter, and navigation rules are documented in [`AGENTS.md`](./AGENTS.md).

## License

ISC
