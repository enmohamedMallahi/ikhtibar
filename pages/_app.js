import '../styles/globals.css';
import '../styles/arabic.css';

import Head from 'next/head';
import Script from 'next/script';

function App({ Component, pageProps }) {
	return (
		<>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy='lazyOnload'>
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>

			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default App;
