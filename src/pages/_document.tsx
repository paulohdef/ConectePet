import Document, { Html, Head, NextScript, Main } from 'next/document'

import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="canonical"
            href="https://themesberg.com/product/tailwind-css/dashboard-windster"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://demo.themesberg.com/windster/app.css"
          />

          <link
            rel="canonical"
            href="https://themesberg.com/product/tailwind-css/dashboard-windster"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.paddle.com/paddle/assets/css/animate.css"
            media="all"
          ></link>

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.paddle.com/paddle/assets/css/paddle.css"
            media="all"
          ></link>
        </Head>
        <body className="theme-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
