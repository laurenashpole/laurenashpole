let assets = require('../../public/assets.json');

module.exports = function (swig) {
  swig.setTag('asset', _parse, _compile, false, true);
};

let _parse = function (str, line, parser) {
  parser.on('*', function (token) {
    let match = token.match.match(/^["'](.*?)["']$/);
    let assetPath = match ? match[1] : null;

    if (assetPath) {
      let asset = assets[assetPath] || assetPath;
      this.out.push(asset);
    }
  });

  return true;
};

let _compile = function (compiler, args) {
  if (!args || !args[0]) {
    throw new Error('The asset tag expects a filename as a string');
  }

  let assetPath = args[0].startsWith('/') ? args[0] : '/' + args[0];
  return `_output +="${assetPath}";`;
};
