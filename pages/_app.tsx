import Script from 'next/script'
import type { AppProps } from 'next/app'
import Layout from '../components/shared/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script id="google-analytics" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
    </Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
