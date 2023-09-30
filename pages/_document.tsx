import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="My AI art!"
          />
          <meta property="og:site_name" content="slushy.gg" />
          <meta
            property="og:description"
            content="My AI art!"
          />
          <meta property="og:title" content="Slushy.gg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Slushy.gg" />
          <meta
            name="twitter:description"
            content="My AI art!"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
