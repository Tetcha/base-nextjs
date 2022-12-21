import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextSeo
				title={'base-nextjs'}
				description={'description go here'}
				openGraph={{
					images: [
						{
							url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
							width: 1000,
							height: 700,
							alt: 'Base nextjs',
						},
						{
							url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
							width: 1000,
							height: 700,
							alt: 'Base nextjs',
						},
					],
				}}
			/>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
}