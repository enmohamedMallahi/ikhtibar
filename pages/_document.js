// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
	return (
		<Html lang='ar'>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap'
					rel='stylesheet'
				/>
				<meta
					name='description'
					content='متجر قطع السيارات هو أفضل وجهتك لشراء قطع غيار السيارات عبر الإنترنت
					في المغرب. نقدم مجموعة واسعة من القطع الأصلية والمعتمدة لمختلف أنواع
					السيارات بأسعار تنافسية.'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default MyDocument;
