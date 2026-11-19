# English section — unpublished drafts

Status: **hidden / not built**. These files are kept out of `pages/en/` on purpose.

`_hidden` is listed in `_config.yml` → `exclude`, so Jekyll never renders anything here.
The three pages therefore return 404 and never appear in `sitemap.xml`.

To bring the section back once the concept is settled:

1. Move `index.html`, `expertise.html`, `publications.html` back to `pages/en/`.
2. Re-add the `EN` item to `_includes/header.liquid`
   (desktop `<ul class="site-nav">` and mobile `<ul class="site-mobile-list">` as item `06`).
3. Re-add `alt_url` to the three Arabic pages:
   - `pages/index.html` → `alt_url: /en/`
   - `pages/services.html` → `alt_url: /en/expertise/`
   - `pages/publications.html` → `alt_url: /en/publications/`
4. Push; the `hreflang` pairs and JSON-LD come back automatically from `_layouts/default.liquid`.

The supporting files stayed in place and are dormant until then:
`_includes/en-styles.liquid`, `_includes/header-en.liquid`,
`_includes/footer-en.liquid`, and the `.site-nav-lang` /
`.site-header-en` / `.site-footer-en` rules in `_assets/identity.pcss`.
