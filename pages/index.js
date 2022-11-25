import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Cards API</title>
        <meta name="description" content="Graphql Api for cards Deck" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >

        <h1>A GraphQl API for Playing Cards</h1>

        <div className='container'>
          <h3>Endpoint : </h3>

          <p> https://cards-deck-api.vercel.app/graphql </p>
        </div>
        
      </main>

      <footer>
        <a
          href="https://www.rohit.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by rohit.codes
        </a>
      </footer>
    </div>
  )
}
