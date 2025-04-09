import {Suspense} from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import {Inter} from 'next/font/google';
import '../styles/index.css';
import {Providers} from './providers';
import {BASE_PATH, GA_TRACKING_ID} from '@/config';
import Script from 'next/script';
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html suppressHydrationWarning lang="en">
        <head>
            <link rel="icon" href={`${BASE_PATH}/images/favicon.png`}/>
            {/* Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
                }}
            />

            {/* HotJar */}
            <Script
                id="hotjar"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5355977, hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
                }}
            />
        </head>
        <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
            <Header/>
            <Suspense fallback={null}>
                <GoogleAnalytics/>
            </Suspense>
            {children}
            <Footer/>
            <ScrollToTop/>
        </Providers>
        </body>
        </html>
    );
}
