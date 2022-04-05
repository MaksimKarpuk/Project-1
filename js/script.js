document.getElementById("form__footer-time").innerHTML = Date();
function submit(e) {
  e.preventDefault();
}


/*const form = document.getElementById("form");
form.addEventListener("submit", submit);



const checkboxies = document.querySelector(".form__addservice-checkbox");
function toggleAddService(){
    checkboxies.classList.toggle("isHidden")
}
addService.addEventListener("click", toggleAddService);
*/
const hiddenMenu = document.querySelector(".banner__menu-hidden");
const burgerMenuOff = document.querySelector(".banner__hamburger");
function toggleHiddenMenu (){
    hiddenMenu.classList.toggle("show")
    burgerMenuOff.style.display = "none"
}
function hiddenMenuOff() {
    burgerMenuOff.style.display = "block"
    hiddenMenu.style.display = "none"

}

