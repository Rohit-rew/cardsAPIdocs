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
        <img className="backimage2" src="/backimage.png" />
        <h1>A GraphQl API for Playing Cards</h1>
        <div className="container">
          <h3>Endpoint : </h3>
          <p className="code"> https://cards-deck-api.vercel.app/graphql </p>
        </div>


          <div className="container">
            <h3>Step 1 : Get a Deck ID</h3>
            <p className="description">It returns a unique deckId which will contain all the cards.<br/>By default the issued deck is not shuffled so in order to get a randomly shuffled deck you need to provide (shuffle : true) in the paranthesis like below. If you do not provide these you will get an un-shuffled deck.</p>
            <div className="codecontainer">
              <div>
                <span className="collor-orange">mutation </span>{" "}
                <span>{`{`}</span>
              </div>
              <span className="indent1">deckId {`( shuffled : true ) {`}</span>
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

            <p className="description">Code contains a string which refers to the card code <br/> Value contains the value in number of the cards in between 1 to 13, eg. Ace has a value of 1 and kign has a value of 13. <br/> Suite contains the class of the card like Spades , Diamond , Heart or clubs <br/> ImageUrl contains the url of an png image of the card. </p>
          </div>

          <div className="container">
            <h3>Step 3 : Restore a drawn card to the botton of your deck</h3>
            <p className="description">Provide the deckid and the last card drawn will be restored to the bottom of your deck</p>
            <div className="codecontainer">
              <span>{`{`}</span>
              <div>
                <span className="collor-orange indent1">replace </span>
                <span> {`(deckId : "33244234") {`}</span>
              </div>
              <span className="indent2">{`code`}</span>
              <span className="indent2">{`value`}</span>
              <span className="indent2">{`suite`}</span>
              <span className="indent2">{`imageUrl`}</span>
              <span className="indent1">{`}`}</span>
              <span>{`}`}</span>
            </div>

            <p className="description"> This method will always restore the last drawn card to the bottom of the deck. </p>
          </div>

          <div className="container">
            <h3>Step 4 : Shuffle cards anytime between the game</h3>
            <p className="description">Using the below method you can shuffle the remaining cards in your deck anytime.</p>
            <div className="codecontainer">
              <span>{`{`}</span>
              <div>
                <span className="collor-orange indent1">shuffle </span>
                <span> {`(deckId : "33244234") {`}</span>
              </div>
              <span className="indent2">{`code`}</span>
              <span className="indent2">{`value`}</span>
              <span className="indent2">{`suite`}</span>
              <span className="indent2">{`imageUrl`}</span>
              <span className="indent1">{`}`}</span>
              <span>{`}`}</span>
            </div>

            <p className="description"> This method randomly shuffles the remaining deck and returns all the remining cards in the deck after shuffling them. </p>
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
