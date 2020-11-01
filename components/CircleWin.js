import Circle from "./Circle";

const CircleWin = () => {
  return (
    <div id="circleWin">
      <p>Ganaste</p>
      <Circle />
      <style jsx>{`
        div {
          width: 100vw;
          height: 45vh;
          position: fixed;
          background: radial-gradient(
            circle,
            rgba(105, 116, 227, 0.8709677419354839) 0%,
            rgba(50, 5, 42, 1) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          left: -100vw;
          transition: 0.5s;
          z-index: 2;
        }
        p {
          display: block;
          font-weight: bold;
          font-size: 20px;
          width: 18%;
          color: white;
        }
        .showme {
          left: 0px;
        }
      `}</style>
    </div>
  );
};

export default CircleWin;
