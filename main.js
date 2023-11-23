const randomDiv = document.querySelector("div");
const button = document.querySelector("button");

function getRandomNum() {
  const RandomNum = Math.random();
  randomDiv.innerText = RandomNum;
}

button.addEventListener("click", getRandomNum);
