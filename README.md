# Qingxuan Wang — academic homepage

A buildless, responsive academic homepage inspired by Jon Barron's layout. Original HTML/CSS implementation; compact venue and CCF-A labels inspired by https://fahaihi.github.io/.

## Publish with GitHub Pages

Push these files to the main branch. In the repository, open **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root)**. The site URL is https://qingxuan-wang.github.io/.

No Ruby, Node build, or third-party scripts are required. `.nojekyll` enables direct static-file hosting.

## Edit

- `index.html`: biography, links, publications, academic service.
- `style.css`: layout, mobile styles, venue and rank labels.
- `assets/publications.bib`: downloadable BibTeX; keep synchronized with the inline entries.
- `SOURCES.md`: factual sources and editorial decisions.

Preview locally: `python -m http.server 8766 --bind 127.0.0.1`, then visit http://127.0.0.1:8766/.

Only four verified CCF-A journal papers are shown. Publication years follow final journal volume/issue years, not Scholar's early-online dates. The full Scholar list remains linked. No unconfirmed job title, awards, citation counters, or fabricated CV are included. A portrait can be added once a usable image is supplied; public Scholar image requests failed during setup.
