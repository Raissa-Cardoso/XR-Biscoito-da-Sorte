const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnScreen1 = document.querySelector("#btnScreen1");
const btnScreen2 = document.querySelector("#btnScreen2");
let luckPhrase = document.querySelector("#luckPhrase");

btnScreen1.addEventListener("click", toggleScreen);
btnScreen2.addEventListener("click", toggleScreen);
window.addEventListener("keydown", openWithEnter);

const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
];

function sortPhrases() {
  const sortIndex = Math.round(Math.random() * 10);
  return phrases[sortIndex];
}

function openWithEnter(e) {
  if (e.key == "Enter") {
    toggleScreen();
  }
}

function toggleScreen(e) {
  if (screen2.classList.contains("hide")) {
    luckPhrase.innerText = sortPhrases();
  }
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
