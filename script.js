
(() => {
  const cfg = window.PUZZLES_CONFIG || {};
  const params = new URLSearchParams(window.location.search);
  const variant = document.body.dataset.variant || "unknown";
  const experiment = "laas_three_way_v1";

  function withParams(rawUrl) {
    if (!rawUrl) return "#";
    try {
      const url = new URL(rawUrl, window.location.href);
      for (const [key, value] of params.entries()) {
        if (!url.searchParams.has(key)) url.searchParams.set(key, value);
      }
      url.searchParams.set("experiment", experiment);
      url.searchParams.set("landing_variant", variant);
      return url.toString();
    } catch {
      return rawUrl;
    }
  }

  document.querySelectorAll("[data-booking-link]").forEach((el) => {
    el.href = withParams(cfg.bookingUrl);
    el.addEventListener("click", () => {
      track("booking_click");
      window.fathom?.trackEvent("Calibration CTA Clicked");
    });
  });

  const frame = document.querySelector("[data-vsl-frame]");
  if (frame && cfg.vslYoutubeId) {
    frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(cfg.vslYoutubeId)}" title="Leverage Calibration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  function track(eventName) {
    const event = {
      event: eventName,
      variant,
      path: window.location.pathname,
      query: Object.fromEntries(params.entries()),
      timestamp: new Date().toISOString()
    };

    try {
      const key = "puzzles_offer_events";
      const events = JSON.parse(localStorage.getItem(key) || "[]");
      events.push(event);
      localStorage.setItem(key, JSON.stringify(events.slice(-100)));
    } catch {}

    if (cfg.eventEndpoint) {
      fetch(cfg.eventEndpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(event),
        keepalive: true
      }).catch(() => {});
    }
  }

  track("page_view");
})();
