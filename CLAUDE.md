# CLAUDE.md

## Project Overview

**react-web-template** is a tiny, headless layout primitive for React. Holy-grail layout (header / footer / left nav / right nav / main) built on CSS Grid. v1.0.0 is a full rewrite of the legacy 2018 class-component + styled-components implementation.

- **npm package:** react-web-template
- **Demo site:** <https://react-web-template.kkweb.io>

## Tech Stack

- React 18/19 (peers)
- TypeScript 5
- Next.js 16 (App Router) — demo site only
- tsup — library build (ESM + CJS + .d.ts)
- Vitest + @testing-library/react + jsdom — tests
- ESLint flat config + Prettier
- Lefthook + Renovate

## Project Structure

```text
src/
├── index.ts
├── components/WebTemplate/
│   ├── index.ts
│   └── WebTemplate.tsx
└── app/                                # Next.js demo
    ├── layout.tsx
    ├── page.tsx
    └── globals.css

tests/WebTemplate.test.tsx
```

## Commands

```bash
pnpm dev / build / start                # Next.js demo
pnpm build:lib                          # tsup → dist/
pnpm test / lint / typecheck
pnpm prepublishOnly
```

## Public API

```tsx
<WebTemplate
  header={<Header />}
  footer={<Footer />}
  leftNav={<LeftNav />}
  rightNav={<RightNav />}
  className="..."
  headerClassName="..."
  mainClassName="..."
  unstyled={false}
>
  <Main />
</WebTemplate>
```

- Default styling: CSS Grid with `auto 1fr auto` rows and columns, `minHeight: 100vh`.
- `unstyled` opts out of all default inline styles for full CSS control.
- Optional slots render only when their prop is provided; root exposes `data-has-header`, `data-has-footer`, `data-has-left-nav`, `data-has-right-nav`.

## Publishing Notes

- `files: ["dist", "README.md", "LICENSE"]` — demo not published.
- v1.0.0 is a breaking change: class component / styled-components API removed.
