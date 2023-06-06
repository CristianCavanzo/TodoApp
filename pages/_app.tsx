import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
	weight: 'variable',
	subsets: ['latin'],
});
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={montserrat.className}>
			<Component {...pageProps} />
		</div>
	);
}
