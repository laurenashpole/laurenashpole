import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          {!this.props.inAmpMode &&
            <script dangerouslySetInnerHTML={{ __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.GTM_CONTAINER_ID}');
            `}} />
          }

          <meta name="google-site-verification" content="j7rp4JhwKeTvhJYae4BTu4jPAP6ZBahys3beaQ5lGA8" />
          <meta name="p:domain_verify" content="ae31078d4a7b4e349540d765890c0737" />

          <link rel="stylesheet" href="https://use.typekit.net/iaj4zaw.css" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        </Head>

        <body>
          <Main />
          <NextScript />

          {!this.props.inAmpMode &&
            <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_CONTAINER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
          }
        </body>
      </Html>
    );
  }
}

export default MyDocument;