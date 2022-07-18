const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const clearAll = document.querySelector(".clear-all");
const clearLast = document.querySelector(".clear-last");
const equal = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");

let exportData;

// const numPattern = /^-?\d+\.?\d*$/g; // only numbers and sign
let resultFlag = 0; //print new numbers if = already pressed
// let tempPhrase = "" ; //temperory variable to check the input phrae before showing it

function inputNum(event) {
    const inputText = event.target.innerText;
    resultFlag == 1 ? display.value = inputText : display.value += inputText;
    resultFlag = 0;
}
numbers.forEach(item => item.addEventListener("click", inputNum));


const calcPattern = /^[-+]?[0-9]+([-+*/%.]+[-+]?[0-9]+)*$/g;
function inputOperator(event) {
    const inputOperator = event.target.innerText;
    console.log(display.value);
    console.log(calcPattern.test(display.value));
    if (calcPattern.test(display.value)) {
        display.value += inputOperator;
        resultFlag = 0;
    }
    else if (!calcPattern.test(display.value)) {
        display.classList.toggle("error");
        setTimeout(() => {
            display.classList.toggle("error");
        }, 350);
    }
}
operator.forEach(item => item.addEventListener("click", inputOperator));


function result(event) {
    console.log(display.value);
    console.log(calcPattern.test(display.value));
    if (calcPattern.test(display.value)) {
        display.value = eval(display.value);
        resultFlag = 1;
    } else {
        display.classList.toggle("error");
        setTimeout(() => {
            display.classList.toggle("error");
        }, 800)
    }
}
equal.addEventListener("click", result);


function clearAllFunc() {
    display.value = "";
    resultFlag = 0;
}
clearAll.addEventListener("click", clearAllFunc);


function clearLastFunc() {
    display.value = display.value.substring(0, display.value.length - 1);
}
clearLast.addEventListener("click", clearLastFunc);

// export { exportData };
