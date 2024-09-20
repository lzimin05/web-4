let box = document.querySelectorAll('[name="col"]');
let button_select = document.querySelectorAll('[name="coffee"]');
let inputName = document.querySelector(".name")
let inputSurname = document.querySelector(".surname")
let button_order = document.querySelector(".btn")
let result = document.querySelector(".result")

let user = {
    name: "",
    surname: "",
    amount: 0
};

inputName.addEventListener("change", function(){
    user.name = inputName.value;
});

inputSurname.addEventListener("change", function() {
    user.surname = inputSurname.value;
});

for(let i = 0; i < button_select.length; i++) {
    button_select[i].addEventListener("click", function() {
        if (button_select[i].checked) {
            box[i].value = "1";
        } else {
            box[i].value = "0";
        }
    });
}

for(let i = 0; i < button_select.length; i++) {
    button_select[i].addEventListener("change", function(){
        calculate();
        result.textContent = `${user.amount}`;
    })
}

for(let i = 0; i < box.length; i++) {
    box[i].addEventListener("change", function(){
        calculate();
        result.textContent = `${user.amount}`;
    })
}

function calculate() {
    let total = 0
    for(let i = 0; i < box.length; i++) {
        if (button_select[i].checked) {
            total+= parseInt(button_select[i].value) * parseInt(box[i].value);
        }
    }
    user.amount = total;
}

button_order.addEventListener("click", function() {
    calculate();
    result.textContent = `${user.amount}`;
    alert(`Заказчик: ${user.name} ${user.surname}\nИтого: ${user.amount} рублей`)
})
