const Check = (r1, r2, r3) => {
  if (r1 === r2 && r1 === r3 && r1 === 0) {
    alert("El O gana");
  } else if (r1 === r2 && r1 === r3 && r1 === 1) {
    alert("La X gana");
  }
};

export default Check;
