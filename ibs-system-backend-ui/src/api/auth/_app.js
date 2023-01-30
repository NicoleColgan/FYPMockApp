import { SessionProvider } from "next-auth/react"
import "../styles/global.css"

function MyApp({Component, pageProps, session}){
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
}

export default MyApp;
