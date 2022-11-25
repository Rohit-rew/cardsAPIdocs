import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  let string = "{";

  return (
    <div>
      <Head>
        <title>Cards API</title>
        <meta name="description" content="Graphql Api for cards Deck" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img className="backimage" src="/backimage.png" />
        <h1>A GraphQl API for Playing Cards</h1>
        <div className="container">
          <h3>Endpoint : </h3>
          <p className="code"> https://cards-deck-api.vercel.app/graphql </p>
        </div>


          <div className="container">
            <h3>Step 1 : Get a Deck ID</h3>
            <div className="codecontainer">
              <div>
                <span className="collor-orange">mutation </span>{" "}
                <span>{`{`}</span>
              </div>
              <span className="indent1">deckId {`( ) {`}</span>
              <span className="indent2">{`id`}</span>
              <span className="indent1">{`}`}</span>
              <span>{`}`}</span>
            </div>
          </div>


          <div className="container">
            <h3>Step 2 : Draw cards from Deck</h3>
            <p className="description">Provide the received deck id and number of cards you want to draw</p>
            <div className="codecontainer">
              <span>{`{`}</span>
              <div>
                <span className="collor-orange indent1">cards </span>
                <span> {`(deckId : "33244234" , draw : 2 ) {`}</span>
              </div>
              <span className="indent2">{`code`}</span>
              <span className="indent2">{`value`}</span>
              <span className="indent2">{`suite`}</span>
              <span className="indent2">{`imageUrl`}</span>
              <span className="indent1">{`}`}</span>
              <span>{`}`}</span>
            </div>
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
  );
}
