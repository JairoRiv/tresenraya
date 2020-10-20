import Head from "next/head";
import Header from "../components/Header";
import { useState } from "react";

export default function Home() {
  // def function Where clicked in the square
  const clickHandler = (id) => {
    let image = document.createElement("img");
    let imageParent = document.getElementById(id);
    if (turn === 0) {
      image.src = "/circle.svg";
      setTurn(1);
    } else {
      image.src = "/cross.svg";
      setTurn(0);
    }
    imageParent.appendChild(image);
  };

  const square = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [turn, setTurn] = useState(Math.round(Math.random()));

  return (
    <>
      <Head>
        <title>Tres en raya</title>
      </Head>

      <Header />

      <section id="turn">
        <p>Turno de:</p>
        <div>
          {turn === 0 ? <img src="/circle.svg" /> : <img src="/cross.svg" />}
        </div>
      </section>

      <section id="main">
        <div id="container">
          {square.map((square) => (
            <div
              key={square}
              id={square}
              onClick={(e) => clickHandler(e.target.id)}
            ></div>
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
