import Head from 'next/head'
import dynamic from 'next/dynamic'

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Next.js Chat Demo</h1>
        <AblyChatComponent />
      </main>

      <footer>
        Powered by
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
        and
        <a href="https://ably.com" rel="noopener noreferrer">
          <img src="/ably-logo.svg" alt="Ably Logo" className="logo ably" />
        </a>
      </footer>

   
    </div>
  )
}