document.getElementById("form__footer-time").innerHTML = Date();
function submit(e) {
  e.preventDefault();
}

/*const headerMenu = document.querySelector(".header__menu")
const link = document.createElement ("a")
link.className = "header__link"
link.innerHTML = "О нас"
headerMenu.insertBefore (link, headerMenu.firstChild)
link.remove()
*/

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
const hiddenMenuItem = document.querySelectorAll(".banner__menu-hidden-item")
function toggleHiddenMenu (){
    hiddenMenu.style.display = "flex"
    burgerMenuOff.style.display = "none"
}
function hiddenMenuOff() {
    burgerMenuOff.style.display = "block"
    hiddenMenu.style.display = "none"
}
hiddenMenuItem.addEventListener("mouseover", ()=> {
    for (let i=0; i<hiddenMenuItem.length; i++) {
    hiddenMenuItem[i].style.background = "black"
    hiddenMenuItem[i].style.color = "white"
    }
})
