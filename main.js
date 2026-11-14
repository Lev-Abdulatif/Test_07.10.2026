const buyButtons = document.querySelectorAll(".card__button");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("card__button--second-color");
    button.textContent = button.classList.contains("card__button--second-color")
      ? "Добавлено в корзину!"
      : "Купить";
    console.log("Добавлено в корзину!");
  });
});

const openGoogleButton = document.querySelector("#open-google");
const googleUrl = "https://www.google.com";
openGoogleButton.addEventListener("click", openGoogle);
function openGoogle() {
  const answer = window.confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open(googleUrl);
  }
  else {
    return;
  };
}

const outputLogButton = document.querySelector('#output-console-log')
outputLogButton.addEventListener('click', () => outputConsoleLog('Дз № 6'))
function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

const mainTitle = document.querySelector('.title');
mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
});