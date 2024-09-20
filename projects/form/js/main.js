let user_name = document.querySelector(".name");
let user_surname = document.querySelector(".surname");
let result = document.querySelector(".result")
let button = document.querySelector(".btn");

button.addEventListener("click", function(){
    result.textContent = `Здравствуйте, ${user_name.value} ${user_surname.value}`
});