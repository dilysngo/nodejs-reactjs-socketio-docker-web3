/* eslint-disable jsx-a11y/iframe-has-title */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage
   
    try { 
      // eslint-disable-next-line no-param-reassign  
      ctx.renderPage = () =>
        originalRenderPage({ 
          enhanceApp: (App) => (props) => <App {...props} />,
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
          </>
        ),
      }
    } finally {
    }
  }

  render() {
    return (
      <Html translate="no"> 
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&amp;display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal-root" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
