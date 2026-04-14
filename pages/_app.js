import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ClerkProvider>
  )
}