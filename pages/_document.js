import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='14' fill='%23EAB9B3'/%3E%3Ccircle cx='32' cy='32' r='10' fill='%23d4928a'/%3E%3Cg stroke='%23EAB9B3' stroke-width='3' stroke-linecap='round'%3E%3Cline x1='32' y1='4' x2='32' y2='14'/%3E%3Cline x1='32' y1='50' x2='32' y2='60'/%3E%3Cline x1='4' y1='32' x2='14' y2='32'/%3E%3Cline x1='50' y1='32' x2='60' y2='32'/%3E%3Cline x1='12.2' y1='12.2' x2='19.3' y2='19.3'/%3E%3Cline x1='44.7' y1='44.7' x2='51.8' y2='51.8'/%3E%3Cline x1='12.2' y1='51.8' x2='19.3' y2='44.7'/%3E%3Cline x1='44.7' y1='19.3' x2='51.8' y2='12.2'/%3E%3C/g%3E%3C/svg%3E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
