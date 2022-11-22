import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import { Layout,  } from '../components';
import {Navbar, Footer} from '../structure';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <Layout>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </Layout>
  )
}
