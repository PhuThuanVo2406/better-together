# Better Together

Website for **Better Together**, a student conference on belonging and human connection hosted by Phi Theta Kappa, Omega Sigma Chapter (Houston City College). It is the action component of the chapter's 2026–2027 Honors in Action project.

**Conference:** Saturday, February 13, 2027 · 9:00 AM – 2:00 PM (check-in 8:30 – 9:00 AM) · HCC Central Campus
**Registration opens:** January 11, 2027 · **Abstract deadline:** January 15, 2027 at 11:59 PM

## What's here

- `index.html`: the whole site in one file (HTML, CSS and JavaScript). Open it in a browser to view it.
- `apps-script/`: the Google Apps Script that saves interest-form sign-ups to a Google Sheet, with setup steps in [`apps-script/README.md`](apps-script/README.md).

The background is a real-time Three.js "gravity field" of glass and matte spheres driven by scroll: they float in the hero, fall and bounce, gather into a heart, then fly past the camera. Three.js loads from unpkg via an import map and fonts load from Google Fonts. No build step.

## Interest form

The form asks for name, email, and whether the person wants to join as an attendee or a presenter. To connect it, deploy `apps-script/Code.gs` as a web app and paste its URL into `SHEET_ENDPOINT` near the top of the main script in `index.html`. Until then the form asks people to email the chapter president.

## Still to confirm

- Guest speaker (shown as TBA)
- Acceptance notification date (shown as TBA)
- Abstract submission link
- Room at HCC Central Campus
