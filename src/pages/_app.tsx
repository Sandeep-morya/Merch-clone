import '../../style.css'
import { MantineProvider, Stack } from '@mantine/core'
import Header from 'components/Header';
import Footer from 'components/Footer';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import {store} from "../redux/store"

export default function App({ Component, pageProps }: AppProps) {
  return (
		<MantineProvider>
			<Provider store={store}>
				<Header />
				<Stack w="70%" m="auto" mt={'1rem'}>
					<Component {...pageProps} />
				</Stack>
				<Footer />
			</Provider>
		</MantineProvider>
	);
}
