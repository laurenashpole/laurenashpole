export function sendPageview () {
  if (window.ga) {
    window.ga('set', 'page', window.location.pathname);
    window.ga('send', 'pageview');
  }
}

export function sendEvent (e) {
  const category = e.target.dataset.gaCategory;
  const action = e.target.dataset.gaAction;
  const label = e.target.dataset.gaLabel;

  if (window.ga) {
    window.ga('send', 'event', category, action, label);
  }
}