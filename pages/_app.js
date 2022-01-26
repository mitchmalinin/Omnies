import "../styles/globals.css"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=UA-218073064-1"
        />
        <Script strategy="lazyOnload">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           
           gtag('config', 'UA-218073064-1');
           gtag('config', 'G-FPEJ8734NG');
        `}
        </Script>
        <Script strategy="lazyOnload">
          {`
           (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2798402,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
        </Script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
