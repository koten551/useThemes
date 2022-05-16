import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux';
import store from '../redux/store'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </Provider>

  )
}

export default MyApp
