import Head from "next/head";
import Header from "../components/Header";
import Circle from "../components/Circle";
import Cross from "../components/Cross";
import { useState } from "react";

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

  const square = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  //Create state
  const [turn, setTurn] = useState(Math.round(Math.random()));

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
    <>
      <Head>
        <title>Tres en raya</title>
      </Head>

      <Header />

      <section id="turn">
        <p>Turno de:</p>
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
      <h1>hola estoy empezando</h1>
      <style jsx>{`
        #turn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #turn p {
          font-weight: bold;
          font-size: 20px;
          margin: 10px 0;
        }
        #turn div {
          width: 56px;
          height: 56px;
          border: solid black;
          background-color: #ff540036;
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
        }
        #main #container div {
          width: auto;
          height: auto;
          border: solid black;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
