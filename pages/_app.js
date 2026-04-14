import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ClerkProvider
      {...pageProps}
      routerPush={(to) => router.push(to)}
      routerReplace={(to) => router.replace(to)}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ClerkProvider>
  )
}