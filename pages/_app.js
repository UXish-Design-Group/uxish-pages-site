// pages/_app.js

// Bootstrap
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap-icons/font/bootstrap-icons.css')

require('../styles/app.css');

var Head = require('next/head').default;
var Layout = require('../components/Layout');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UXish Design Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/uxishdesign-brand-128x128.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

module.exports = MyApp;