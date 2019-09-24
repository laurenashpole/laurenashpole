export function sendPageview () {
  if (window.ga) {
    window.ga('set', 'page', window.location.pathname);
    window.ga('send', 'pageview');
  }
}

export function sendEvent (category, action, label) {
  if (window.ga) {
    window.ga('send', 'event', category, action, label);
  }
}