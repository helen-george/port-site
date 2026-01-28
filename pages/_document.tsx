import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See images from eris' portfolio."
          />
          <meta property="og:site_name" content="ersdgz.com" />
          <meta
            property="og:description"
            content="See images from eris' portfolio."
          />
          <meta property="og:title" content="ersdgz - gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ersdgz - gallery" />
          <meta
            name="twitter:description"
            content="See images from eris' portfolio."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
