import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" type="image/svg+xml" href="/icono.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
			</Head>
			<body>
				<Main />
				<div id='portal'/> 
				<NextScript />
			</body>
		</Html>
	)
}