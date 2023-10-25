const counterNo = document.getElementById("counterNo");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const bntIncrease = document.getElementById("increase");

let number = counterNo;

const changeColor = (num) => {
  let color = "";
  if (num < 0) {
    color = "red";
  } else if (num > 0) {
    color = "green";
  } else {
    color = "white";
  }
  return color;
};

window.addEventListener("DOMContentLoaded", function () {
  number.innerHTML = 0;
});

bntIncrease.addEventListener("click", function () {
  counterNo.innerHTML++;
  number.style.color = changeColor(counterNo.innerHTML);
});

btnDecrease.addEventListener("click", function () {
  counterNo.innerHTML--;
  number.style.color = changeColor(counterNo.innerHTML);
});

btnReset.addEventListener("click", function () {
  counterNo.innerHTML = 0;
  number.style.color = changeColor(counterNo.innerHTML);
});
