# Payton Murdoch — Cybersecurity Portfolio

Professional experience, security capabilities, academic security projects, and credentials. Published at https://plmurdoch.github.io/.

## Architecture

The React component structure from `plmurdoch/Website` has been brought into this repository and adapted. The source lives in `website/`; Vite replaces the old Create React App build. The build prerenders the complete page, then React hydrates navigation and the contact form. Content remains available without JavaScript.

GitHub Pages retains its existing `main` / root publishing setup. Generated root files are committed with source changes. No Pages settings change is required. This prevents a deployment interruption while keeping the source and deployed content together.

## Develop and publish

Use Node 24 (or >=22.12):

```sh
cd website
npm ci
npm run dev
```

To build and synchronize the published root:

```sh
npm run build
```

Review and commit `website/` and generated root changes together. The build removes only the old generated `static/`, `asset-manifest.json`, `style.css`, and `logo.png` paths, and replaces current generated `assets/`. It does not modify source or unrelated repository files. The CI workflow builds and checks that published output agrees with the source.

## Content maintenance

- `website/src/data.js`: professional profile, experience, skills, and project descriptions.
- `website/src/components/`: navigation, hero, about, experience, skills, projects, credentials, contact, and footer.
- `website/src/styles.css`: typography, layout, breakpoints, focus, reduced motion, and print styling.
- `website/index.html`: metadata and structured data.
- `website/public/`: favicon, social preview, robots, and sitemap.

Experience is grounded in the owner-provided April resume, indexed LinkedIn profile, and the owner’s October 2026 update on current SOC, SSO, phishing campaign, and reporting responsibilities. Current employer is Tru Cooperative Bank (formerly First West Credit Union); the current role title follows the supplied resume. Workplace platform experience and academic lab tools are distinguished. Academic team projects are labeled; no unverified performance metrics are published.

The existing EmailJS service/template/public key is retained. The SDK loads only on submission; fields have labels, validation, pending state, and visible feedback. These EmailJS identifiers are client-side public configuration, not server secrets. Live message delivery requires an active service and was not tested by sending unsolicited messages. The owner’s email address is not included in source, metadata, or generated assets. Contact actions open the form, and the recipient is configured in EmailJS. Profile links remain available as professional references.

No third-party fonts, animation library, scroll library, or external icon library is required. The monogram is preserved as text/SVG. No resume PDF, personal email address, or phone number is published. Recruiters can request further information through the contact form. The build removes the previously published resume PDF so it cannot be reintroduced by stale generated output.

## Manual responsive review

`/website/scripts/responsive-preview.html` renders the production page in independent 320, 390, 768, and 1024 pixel iframe viewports. It is excluded from indexing. Check menu opening, Escape, navigation closure, forms, and overflow in each frame.
