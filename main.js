





// кнопки "купить"

const buyButtons = document.querySelectorAll(".card__button");

buyButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => { // нейронка(GPT,когда я задавал вопросы по дз) предлагала реализовать mouseenter/mouseleave в CSS через псевдокласс (:hover), но я решил сделать через JS.
    button.style.backgroundColor = "#504e98";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "";
  });
  button.addEventListener("click", () => {
    button.classList.toggle("card__button--second-color");
    console.log("Добавлено в корзину!");
  });
});

// карточки товаров

const productCard = document.querySelectorAll(".card");

productCard.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // эту функцию предложила нейронка(внутри ВС кода), но я и так хотел узнать как ее добавить, поэтому решил оставить))) Не ругайте пжлста(((
    card.style.backgroundColor = "#c8c6e6";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "";
    card.style.backgroundColor = "";
  });
});

// открыть Google(golegole) 

const openGoogleButton = document.querySelector("#open-google");
const googleUrl = "https://www.google.com";


openGoogleButton.addEventListener("mouseenter", () => {
  openGoogleButton.style.backgroundColor = "#504e98";
});
openGoogleButton.addEventListener("mouseleave", () => {
  openGoogleButton.style.backgroundColor = "";
});

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

// вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log')

outputLogButton.addEventListener('click', () => outputConsoleLog('Дз № 6'))

outputLogButton.addEventListener("mouseenter", () => {
    outputLogButton.style.backgroundColor = "#504e98";
  });
  outputLogButton.addEventListener("mouseleave", () => {
    outputLogButton.style.backgroundColor = "";
  });

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// работа с textContent title

const mainTitle = document.querySelector('.title');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
});

