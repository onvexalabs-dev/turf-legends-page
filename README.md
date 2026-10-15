# Turf Legends website

Static, bilingual English/German game website for GitHub Pages. No build, external fonts, analytics, tracking or third-party embeds. Assets are served locally; screenshot enlargement uses native accessible dialogs. No fake download button: the Google Play release is marked as in preparation.

## Publication status
Publisher: Manfred Uschan (OnvexaLabs), private individual, Austria. Identity, address, phone and 12-month retention for resolved support messages were supplied/confirmed by the owner. Website legal pages are completed for this implementation. No company registration or VAT ID is claimed.

The game remains pre-release. Its privacy section explicitly describes that status. Verify the signed Android package, SDK/network/backup behavior and audience declarations before using this policy for a released game. `release-status.json` records that distinction. Run `python scripts/validate.py --release` for the website and add `--app-release` for the separate Android readiness check.

If monetization or other commercial activity begins, review Austrian trade-registration and additional disclosure duties; identifying as a private person is not a legal exemption from applicable obligations. Apply the agreed email deletion policy to the support mailbox.

## Preview
Run `python -m http.server 8080` in this folder, then open http://localhost:8080. Open /de/ for German. No installation is necessary.

## GitHub Pages
Run `python scripts/validate.py --release`. In repository Settings → Pages choose **Deploy from a branch**, **main**, **/ (root)**, and Save. The website URL will be https://onvexalabs-dev.github.io/turf-legends-page/ . See the task completion report for the actual deployment status. GitHub branch publishing does not honor the local release check automatically: run it before enabling Pages.

Stable URLs after publication:
- /privacy.html and /de/privacy.html — website and pre-release app privacy
- /legal.html and /de/legal.html — legal notice / Impressum
- /terms.html and /de/terms.html — website terms
- /cookies.html and /de/cookies.html — cookie/storage disclosure
- /support.html and /de/support.html — support and deletion guidance

The root 404 uses absolute project paths for safe navigation from unknown nested URLs. All normal pages use relative paths for project-subfolder hosting.

## Maintenance
Update both language versions. Replace the coming-soon status and link only after verifying the actual store URL. Review privacy whenever SDKs, ads, analytics, purchases or accounts change. Do not enable ad scripts or add embeds without assessing disclosure and consent requirements.

Images are existing game assets and game captures, optimized as WebP. The feature art was AI-generated for the authorized store pack. Screenshots are actual desktop Godot renders at game commit 0e9161b, not Android device captures. Artwork rights remain with their respective owners; this repository does not grant a blanket open-source asset licence.

## Legal drafting sources (15 October 2026)
- Austrian publisher information: https://www.ris.bka.gv.at/eli/bgbl/i/2001/152/P5/NOR40025801
- Austrian private/business website guidance: https://www.oesterreich.gv.at/de/themen/onlinesicherheit_internet_und_neue_medien/internet_und_handy___sicher_durch_die_digitale_welt/Seite.1720902
- GDPR rights: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en
- GitHub hosting: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub privacy: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
- Google SDK disclosure: https://developers.google.com/admob/android/privacy/play-data-disclosure
- Pages setup: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The pages distinguish verified website implementation from pre-release app behavior. No legal-compliance certification is implied.
