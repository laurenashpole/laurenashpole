export function sendEvent (e) {
  let category = e.target.dataset.gaCategory;
  let action = e.target.dataset.gaAction;
  let label = e.target.dataset.gaLabel;

  ga('send', 'event', category, action, label);
}