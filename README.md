# Heritage+ Commercial Quoting Guide

A static, self-contained wiki-style reference site. No build step, no server-side code, no external dependencies at runtime — every library it needs is already vendored in `assets/vendor/`.

## Hosting it on GitHub Pages

1. Create a new repository (private, if you want it employee-only for now) and push the contents of this folder to it.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch," pick the branch you pushed to (e.g. `main`), and folder `/ (root)`.
4. Save. GitHub will give you a URL like `https://<your-username>.github.io/<repo-name>/` — that's the live site, usually live within a minute or two.

Because the repo is private by default, the Pages site itself is **not** automatically restricted — GitHub Pages sites are public URLs even when the source repo is private, unless you're on GitHub Enterprise with Pages access control, or you put something in front of it (see below). If you need it locked to employees only before it's ready for a wider audience, a couple of straightforward options:

- **GitHub Enterprise Cloud** — org-level setting to restrict Pages sites to organization members only.
- **A lightweight auth layer in front of it** — e.g. deploy the same static files behind Cloudflare Pages/Access, or any static host that supports basic auth or SSO, instead of (or in addition to) GitHub Pages.

## Updating content

Everything the site displays lives in one file: `data/content.js`. Each page is a plain object with a `title`, optional `kicker`/`dek`, and a `body` written in Markdown (with a few raw HTML snippets for callout boxes). To add a page:

1. Add an entry to the `nav` array in the group it belongs to.
2. Add a matching entry (same `id`) to the `pages` object with the content.

No other file needs to change — navigation, search indexing, breadcrumbs, and prev/next links all generate automatically from `content.js`.

## Local preview

From this folder:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in a browser.

## What's vendored

`assets/vendor/` contains local copies of marked.js (Markdown rendering), DOMPurify (sanitization), and lunr.js (search indexing) — pinned so the site works with zero external network calls once it's loaded.
