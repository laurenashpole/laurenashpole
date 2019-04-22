export function getUrlParameter (name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
}