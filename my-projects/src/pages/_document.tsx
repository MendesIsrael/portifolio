import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles/styles.stitches'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Israel Mendes</title>
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
