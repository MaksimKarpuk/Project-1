//FORM TIME
document.getElementById("form__footer-time").innerHTML = Date();
function submit(e) {
  e.preventDefault();
}
//HAMBURGER MENU
const hiddenMenu = document.querySelector(".banner__menu-hidden");
const burgerMenuOff = document.querySelector(".banner__hamburger");
function toggleHiddenMenu() {
  hiddenMenu.style.display = "flex";
  burgerMenuOff.style.display = "none";
}
function hiddenMenuOff() {
  burgerMenuOff.style.display = "block";
  hiddenMenu.style.display = "none";
}
//HAMBURGER MENU HOVER
const hiddenMenuItems = document.querySelector(".banner__menu-hidden-items");
const hiddenMenuItem = document.querySelectorAll(".banner__menu-hidden-item");
const func1 = (event) => {
  console.log(event.target);
  let el = event.target;
  for (let i = 0; i < hiddenMenuItem.length; i++) {
    el === hiddenMenuItem[i]
      ? hiddenMenuItem[i].classList.add("hover")
      : hiddenMenuItem[i].classList.remove("hover");
  }
};
hiddenMenuItems.addEventListener("mouseover", func1);

//FORM CHECKBOXIES
const checkboxies = document.querySelector(".form__addservice-checkbox");
function toggleAddService() {
  checkboxies.classList.toggle("isHidden");
}

//ВАЛИДАЦИЯ ФОРМЫ
let form = document.querySelector(".form__form");
let submitButton = form.querySelector(".form__footer-button");
let formTextName = form.querySelector(".form__text-text");
let formTextTelephone = form.querySelector(".form__text-tel");
let formError = form.querySelectorAll(".error");
let formFunction = function (event) {
  event.preventDefault();
  console.log(formTextName.value);
  console.log(formTextTelephone.value);
  for (let i = 0; i < formError.length; i++) {
    if (!formError[i].value) {
      formError[i].style.border = "2px solid red";
      formError[i].style.background = "rgba(247, 128, 128, 0.473)";
    }
  }
};
form.addEventListener("submit", formFunction);

//ДОБАВЛЕНИЕ ГОРОДА
let formAreaRegion = document.querySelector("#formAreaRegion");
let newRegion = document.createElement("option");
let newPoint = function () {
  newRegion.innerHTML = formTextName.value;
  formAreaRegion.insertBefore(newRegion, formAreaRegion.lastChild);
};
submitButton.addEventListener("click", newPoint);

//Слайдер
let prev = document.querySelector(".car__description-before");
let next = document.querySelector(".car__description-after");
let cars = document.querySelectorAll(".car");
let index = 0;
let maxIndex = cars.length-1;

for (let i=0; i<=maxIndex; i++) {
  cars[i]===cars[index] ? cars[i].style.display = "flex" : cars[i].style.display = "none";
}

const scrollNext = () => {
  index===maxIndex ? index=0 : index+=1;
  for (let i=0; i<=maxIndex; i++) {
    cars[i]===cars[index] ? cars[i].style.display = "flex" : cars[i].style.display = "none";
  }
}
next.addEventListener("click",scrollNext);

const scrollPrev = () => {
  index===0 ? index=maxIndex : index-=1;
  for (let i=0; i<=maxIndex; i++) {
    cars[i]===cars[index] ? cars[i].style.display = "flex" : cars[i].style.display = "none";
  }
}
prev.addEventListener("click",scrollPrev);

// let list = document.querySelector (".car__description-list");
// let listItem = list.querySelectorAll (".carItem");
// let arr = listItem.length;
// console.log (arr);
// let listFunction = () => {
//   for (let i=0; i<arr; i++) {
//     listItem.style.background = "red"
//   }
// }
// listItem.addEventListener("mouseover", listFunction);

// let list = document.querySelector (".car__description-list");
// let listItem = list.querySelectorAll (".carItem");
// let listFunction = (event) => {
//   let ev = event.target;
//   for (let i=0; i<listItem.length; i++) {
//     ev===listItem[i] ? listItem[i].style.background = "red" : listItem[i].style.background = "none";
//   }
// }
// listItem.addEventListener("mouseover", listFunction);
