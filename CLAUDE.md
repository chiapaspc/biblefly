## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Requires Node >= 22.12 (`engines` in `package.json`).

## Project structure

- `src/pages/` — routes. `index.astro` lists posts; `blog/[slug].astro` renders a single post. The blog route's `slug` is the post's `id` (filename without extension), so renaming a file changes its URL.
- `src/content/blog/` — all blog posts, one Markdown file per post.
- `src/content.config.ts` — the `blog` collection (glob loader, zod schema). Every post **must** include frontmatter fields `title`, `description`, `pubDate` (any date string; coerced to a `Date`); `tags` array is optional. A post missing these fails the build with a schema error.
- `src/layouts/Layout.astro` — shared layout.

## Conventions

- The site is in Spanish (`lang="es"`, `es-ES` dates, Spanish UI text). New posts and copy should be written in Spanish.
- No tests, linter, or formatter are configured; there is no CI. Verify with `npm run build` (production output to `dist/`). `astro check`/TypeScript checking requires adding `@astrojs/check`, which is not installed.
- `dist/` and `.astro/` are gitignored build artifacts; `.astro/` holds generated types referenced by `tsconfig.json`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)