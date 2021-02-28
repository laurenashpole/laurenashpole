const sass = require('node-sass');
const path = require('path');
const fs = require('fs');

const files = [
  '../styles/global.scss',
  '../components/layout/header.styles.js',
  '../components/layout/footer.styles.js'
];

const generateScss = () => {
  const scss = files.map((file) => {
    const scssFile = fs.readFileSync(path.join(__dirname, file), {
      encoding: 'utf8',
      flag: 'r'
    });

    if (file.indexOf('scss') !== -1) {
      return scssFile;
    } else {
      return scssFile.match(/`(.*)`/s).pop();
    }
  });

  return scss.join('');
};

const generateCss = () => {
  const result = sass.renderSync({
    data: generateScss(),
    outputStyle: 'compressed',
    includePaths: ['styles/']
  });

  fs.writeFileSync(path.join(__dirname, '../static/blog.css'), result.css);
}

generateCss();
