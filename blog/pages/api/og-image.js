const playwright = require('playwright-aws-lambda');

export default async function handler (req, res) {
  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://use.typekit.net/iaj4zaw.css" />

        <style>
          *, *:after, *:before {
            box-spacing: border-box;
          }

          html {
            font: 8px 'museo-sans-rounded', sans-serif;
            line-height: 1.4;
          }

          body {
            background: #f4f4f4;
            margin: 0;
            padding: 2rem;
          }

          .og {
            background: #fff;
            min-height: calc(100% - 8rem);
            padding: 6rem;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .og__logo {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 106 49'%3E%3Cpath d='M56.35 1.5c-1.7.7-4.6 3.15-6.4 5.4-4.15 5.15-9 6.75-15.8 5.1-10.6-2.6-10.8-2.6-9 .1 1.85 2.85 6.8 4.75 12.3 4.85l4 .05-5.95 6-5.95 6h-6.3C12.55 29 1 36.25 1 42.95c0 7.95 9.7 6.95 21.9-2.35 2.95-2.25 5.95-4.55 6.7-5.05 2.1-1.55 22.65 4.9 28.6 9 7.3 5 17.7 4.45 24-1.25 1.65-1.5 1.95-1.45 3.9.3 3.25 2.95 15 2.75 18.1-.35 3-3 1.2-5.2-2.7-3.4-6.3 2.85-14.5.35-14.5-4.4 0-3.85-2.7-3-7.85 2.55-5.85 6.3-9.4 7.45-15.05 4.95-5.4-2.45-5.25-2.85 2.65-6.95C73.95 32.3 85 22.45 85 19.75c0-1.75-4.15-5.05-7.8-6.2-5.2-1.6-21.1 9.45-24.7 17.2-1 2.05-1.9 3.9-2.05 4.1C50 35.35 36 30.7 36 30.05c0-.7 12.35-12.9 19.75-19.6 7.1-6.35 7.45-11.85.6-8.95zm21.5 16.8c2.8 3.4-9.05 13.9-19 16.75-4.25 1.2-3.65-.9 1.9-7.1 7.5-8.35 14.75-12.45 17.1-9.65zm-53.9 15.45c0 .9-7.05 6.25-12.2 9.25-6.25 3.65-6.5-.1-.35-5.7 4.5-4 12.7-6.35 12.55-3.55z' fill='%23d63037'/%3E%3C/svg%3E") no-repeat;
            width: 110px;
            height: 52px;
            margin-bottom: 9rem;
            flex-shrink: 0;
          }

          .og__type {
            color: #a7a7a7;
            font-size: 4rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.075em;
          }

          .og__type span {
            text-transform: none;
          }

          .og__headline {
            margin: 2rem 0 0 0;
            font-size: 6.5rem;
            font-weight: 900;
          }
        </style>
      </head>

      <body>
        <div class="og">
          <div class="og__logo"></div>
          <div class="og__type"><span>laurenashpole.com</span>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;${(req.query || {}).type || ''} post</div>
          <h1 class="og__headline">${(req.query || {}).headline || ''}</h1>
        </div>
      </body>
    </html>
  `;

  if (process.env.NODE_ENV === 'development') {
    res.setHeader('Content-Type', 'text/html');
    return res.end(html);
  }

  const browser = await playwright.launchChromium({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto('about:blank');
  await page.setContent(html, { waitUntil: 'networkidle' });
  const img = await page.screenshot({ type: 'png' });
  await browser.close();

  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.end(img);
}
