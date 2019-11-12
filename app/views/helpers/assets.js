let assets = require('../../../public/assets.json');

module.exports = function (swig) {
  swig.setTag('asset', parse, compile, false, true);
};

const parse = function (str, line, parser) {
  parser.on('*', function (token) {
    const match = token.match.match(/^["'](.*?)["']$/);
    const assetPath = match ? match[1] : null;

    if (assetPath) {
      const asset = assets[assetPath] || assetPath;
      this.out.push(asset);
    }
  });

  return true;
};

const compile = function (compiler, args) {
  if (!args || !args[0]) {
    throw new Error('The asset tag expects a filename as a string');
  }

  const assetPath = args[0].startsWith('/') ? args[0] : '/' + args[0];
  return `_output +="${assetPath}";`;
};
