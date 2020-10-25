import Head from "next/head";
import Header from "../components/Header";
import Circle from "../components/Circle";
import Cross from "../components/Cross";
import { useState, useEffect } from "react";
import Check from "../services/Check";

export default function Home() {
  // def function Where clicked in the square
  const clickHandler = (id) => {
    if (eval(`sq${id}`) === 3 && turn === 0) {
      eval(`setsq${id}(0)`);
      setTurn(1);
    } else if (eval(`sq${id}`) === 3 && turn === 1) {
      eval(`setsq${id}(1)`);
      setTurn(0);
    }
  };

  // def function click On Button
  const clickButton = () => {
    square.map((square) => {
      eval(`setsq${square}(3)`);
    });
  };

  const square = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  //Create state
  const [turn, setTurn] = useState(Math.round(Math.random()));

  // useEfect
  useEffect(() => {
    Check(sq0, sq1, sq2);
    Check(sq3, sq4, sq5);
    Check(sq6, sq7, sq8);
    Check(sq0, sq3, sq6);
    Check(sq1, sq4, sq7);
    Check(sq2, sq5, sq8);
    Check(sq0, sq4, sq8);
    Check(sq2, sq4, sq6);
  });

  // State of the square
  const [sq0, setsq0] = useState(3);
  const [sq1, setsq1] = useState(3);
  const [sq2, setsq2] = useState(3);
  const [sq3, setsq3] = useState(3);
  const [sq4, setsq4] = useState(3);
  const [sq5, setsq5] = useState(3);
  const [sq6, setsq6] = useState(3);
  const [sq7, setsq7] = useState(3);
  const [sq8, setsq8] = useState(3);

  return (
    <div id="body">
      <Head>
        <title>Tres en raya</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <section id="turn">
        <p>TURNO DE:</p>
        <div>
          {((turn) => {
            switch (turn) {
              case 0:
                return <Circle />;
              case 1:
                return <Cross />;
            }
          })(turn)}
        </div>
      </section>

      <section id="main">
        <div id="container">
          {square.map((square) => (
            <div
              key={square}
              id={square}
              onClick={(e) => clickHandler(e.target.id)}
            >
              {((turn) => {
                switch (turn) {
                  case 0:
                    return <Circle />;
                  case 1:
                    return <Cross />;
                  default:
                    return <> </>;
                }
              })(eval(`sq${square}`))}
            </div>
          ))}
        </div>
      </section>
      <section className="button-container">
        <button onClick={clickButton}>NUEVA PARTIDA</button>
      </section>
      <style jsx>{`
        #body {
          height: 100vh;
          background-color: #061722;
        }
        #turn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 10px;
        }
        #turn p {
          font-weight: bold;
          font-size: 13px;
          margin: 10px 0;
          font-family: "Press Start 2P", cursive;
          color: white;
        }
        #turn div {
          width: 56px;
          height: 56px;
          border: solid black;
          background-color: #ffffff;
        }
        #turn img {
          width: 50px;
        }
        #main {
          display: flex;
          justify-content: center;
          margin: 5vh 0;
        }
        #container {
          width: 45vh;
          height: 45vh;
          display: grid;
          grid-template-columns: 33% 33% 33%;
          grid-template-rows: 33% 33% 33%;
          border: #ffb937 solid 2px;
        }
        #main #container div {
          width: auto;
          height: auto;
          border: solid black;
          cursor: pointer;
          border: #ffffff solid 1px;
        }
        .button-container {
          display: flex;
          justify-content: center;
        }
        button {
          background-color: #061722;
          color: white;
          border: #fed01d solid 1px;
          width: 250px;
          height: 45px;
          font-weight: bold;
          font-size: 14px;
          font-family: "Press Start 2P", cursive;
        }
      `}</style>
    </div>
  );
}
