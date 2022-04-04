document.getElementById("form__footer-time").innerHTML = Date();
function submit(e) {
  e.preventDefault();
}
const form = document.getElementById("form");
form.addEventListener("submit", submit);



const checkboxies = document.querySelector(".form__addservice-checkbox");
function toggleAddService(){
    checkboxies.classList.toggle("isHidden")
}
//addService.addEventListener("click", toggleAddService);


