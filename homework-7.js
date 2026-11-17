
// задание №3
function showWeather(city, tempInC) {
  console.log(`Сейчас в ${city} температура ${tempInC} градусов по Цельсию`);
}
showWeather("Тюмень", -5);

// задание №4
const SPEED_OF_LIGHT = 299792458;
function checkSpeed(S) {
  if (S > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость")
  } else if (S < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость")
  } else if (S === SPEED_OF_LIGHT) {
    console.log("Cкорость света")
  }
}
checkSpeed(299792458);

// задание №5
let productName = "Увлажняющий мусс"
let productPrice = 2750
function buyProd(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`)
  }
  else {
    console.log(`Вам не хватает ${productPrice - budget} рублей, пополните баланс`)
  }
}
buyProd(1000);


// задание №6,№7
const cards = document.querySelectorAll(".card");

const firstCard = cards[0];
const secondCard = cards[1];
const thirdCard = cards[2];
const fourthCard = cards[3];
const fifthCard = cards[4];

function buyProduct(card, budget) {
  const productName = card.querySelector(".card__name").textContent;
  const productPrice = Number(
    card.querySelector(".card__price span")
      .textContent
      .replace(/\s/g, "")
      .replace("₽", "")
  );
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`)
  }
  else {
    console.log(`Вам не хватает ${productPrice - budget} рублей, пополните баланс`)
  }
}
buyProduct(firstCard, 3000);