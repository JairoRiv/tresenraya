const Check = (r1, r2, r3) => {
  if (r1 === r2 && r1 === r3 && r1 === 0) {
    let circulo = document.getElementById("circleWin");
    circulo.classList.add("showme")
  } else if (r1 === r2 && r1 === r3 && r1 === 1) {
    let cruz = document.getElementById("crossWin");
    cruz.classList.add("showme")
  }
};

export default Check;
