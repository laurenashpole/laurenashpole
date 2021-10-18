const http = require('http');
const https = require('https');
const path = require('path');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  ca: getCa(fs.readFileSync(path.resolve('./certs', 'ssl-ca-bundle.ca-bundle'), 'utf8')),
  key: fs.readFileSync(path.resolve('./certs', 'ssl-key.key'), 'utf8'),
  cert: fs.readFileSync(path.resolve('./certs', 'ssl-cert.crt'), 'utf8')
};

createHttpServer();

app.prepare().then(() => {
  createHttpsServer();
});

function createHttpServer () {
  http.createServer((req, res) => {
    res.writeHead(301, { 'Location': `https://${req.headers.host}${req.url}` });
    res.end();
  }).listen((8080), (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:8080');
  });
}

function createHttpsServer () {
  https.createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen((8443), (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:8443');
  });
}

function getCa (caBundle) {
  return caBundle.split('-----END CERTIFICATE-----').reduce((acc, cert) => {
    if (cert.length !== 0) {
      acc.push(cert.trimStart() + '-----END CERTIFICATE-----');
    }

    return acc;
  }, []);
}