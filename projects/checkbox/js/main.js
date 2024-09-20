let button = document.querySelector(".btn");
let result = document.querySelector(".result");
let radioButtons = document.querySelectorAll('[name="cakes"]')

button.addEventListener("click", function(){
    let sum = 0
    for(const radioButton of radioButtons) {
        if(radioButton.checked) {
            sum += parseInt(radioButton.value)
        }
    }
    result.textContent = `${sum}`
})