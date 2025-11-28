let skorA = 0;
let skorB = 0;

function updateSkor() {
  document.getElementById("skor").innerHTML = skorA + " - " + skorB;
}

function tambahSkorA() {
  skorA++;
  updateSkor();
}

function tambahSkorB() {
  skorB++;
  updateSkor();
}

updateSkor();
