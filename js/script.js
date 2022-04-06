//FORM TIME
document.getElementById("form__footer-time").innerHTML = Date();
function submit(e) {
  e.preventDefault();
}
//HAMBURGER MENU
const hiddenMenu = document.querySelector(".banner__menu-hidden");
const burgerMenuOff = document.querySelector(".banner__hamburger");
function toggleHiddenMenu (){
    hiddenMenu.style.display = "flex"
    burgerMenuOff.style.display = "none"
}
function hiddenMenuOff() {
    burgerMenuOff.style.display = "block"
    hiddenMenu.style.display = "none"
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
function toggleAddService(){
    checkboxies.classList.toggle("isHidden")
}


// const container = document.querySelectorAll(".conteiner")
// for (let i=0; i<container.length; i++) {
//     function width() {
//     if (container.style.maxwidth >= "768px") {
//         burgerMenuOff.style.display="none"
//     }
//     return
// }
// }

/*const headerMenu = document.querySelector(".header__menu")
const link = document.createElement ("a")
link.className = "header__link"
link.innerHTML = "О нас"
headerMenu.insertBefore (link, headerMenu.firstChild)
link.remove()
*/

let form = document.querySelector(".form__form")
let submitButton = form.querySelector(".form__footer-button")
let formTextName = form.querySelector(".form__text-text")
let formTextTelephone = form.querySelector(".form__text-tel")
let formError = form.querySelectorAll(".error")
let formFunction = function(event) {
  event.preventDefault()
  console.log (formTextName.value)
  console.log (formTextTelephone.value)
  for (let i=0; i<formError.length; i++) {
    if (!formError[i].value) {
      formError[i].style.border = "2px solid red"
      formError[i].style.background = "rgba(247, 128, 128, 0.473)"
      // let error = document.createElement("div")
      // error.className = "error"
      // error.style.color = "red"
      // error.innerHTML = "Error"
      // form[i].parentElement.insertBefore(error, formError[i])
    }
  }
}
form.addEventListener("submit", formFunction)




