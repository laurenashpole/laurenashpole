export function sendPageview () {
  console.log(window.location.pathname);
  window.ga('set', 'page', window.location.pathname);
  window.ga('send', 'pageview');
}

export function sendEvent (e) {
  let category = e.target.dataset.gaCategory;
  let action = e.target.dataset.gaAction;
  let label = e.target.dataset.gaLabel;

  window.ga('send', 'event', category, action, label);
}