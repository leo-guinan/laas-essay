# The Puzzles Were Never the Job — offer funnel

A zero-build static GitHub Pages site built around the essay **The Puzzles Were Never the Job**.

It contains two variants:

- `index.html` — essay → offer, no video
- `vsl.html` — same page with an optional VSL block before the offer

That makes it easy to A/B test whether seeing Leo increases conversion after the essay has already established the proof and argument.

## Configure

Edit `config.js`:

```js
window.PUZZLES_CONFIG = {
  bookingUrl: "https://cal.com/YOUR-BOOKING-LINK",
  vslYoutubeId: "",
  eventEndpoint: ""
};
```

- `bookingUrl`: paid Cal.com booking URL
- `vslYoutubeId`: optional YouTube video ID used only on `vsl.html`
- `eventEndpoint`: optional JSON POST endpoint for page-view / CTA tracking

Incoming query parameters are preserved when the visitor clicks through to Cal.com. The page also adds `landing_variant=essay` or `landing_variant=essay-vsl`.

## Suggested test URLs

- Control: `/`
- VSL variant: `/vsl.html`

Send equal-quality traffic to both and compare:
- booking clicks per reader
- paid bookings per visitor
- paid bookings per offer-section viewer, if you add scroll-depth tracking later

## Deploy with GitHub Pages

1. Upload these files to the root of a repo.
2. GitHub → Settings → Pages.
3. Deploy from `main` and `/ (root)`.
4. Save.

No build process is required.

## Design intent

This is intentionally editorial rather than SaaS-like.

The essay does the proof work. The commercial transition happens only after the reader reaches the worldview the offer is based on:

> If your business still requires you to solve the same puzzles over and over, let’s make those puzzles disappear.
