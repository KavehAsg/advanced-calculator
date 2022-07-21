const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const clearAll = document.querySelector(".clear-all");
const clearLast = document.querySelector(".clear-last");
const equal = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");


const calcPattern = /^[-+]?[0-9]+([-+*/%.]+[-+]?[0-9]+)*$/;
let resultFlag = 0;

import {creatHistory , setLocalStorage } from "./main.js";

function inputNum(event) {
    const inputText = event.target.innerText;
    resultFlag == 1 ? display.value = inputText : display.value += inputText; //print new numbers if = already pressed
    resultFlag = 0;
}
numbers.forEach(item => item.addEventListener("click", inputNum));


function inputOperator(event) {
    const inputOperator = event.target.innerText;
    if (inputOperator === "-" && display.value === "") {
        display.value = inputOperator;
        resultFlag = 0;
    }
    else if (calcPattern.test(display.value)) {
        display.value += inputOperator;
        resultFlag = 0;
    }
    else if (!calcPattern.test(display.value) && display.value !== "-") {
        display.classList.toggle("error");
        setTimeout(() => {
            display.classList.toggle("error");
        }, 350);
    }
}
operator.forEach(item => item.addEventListener("click", inputOperator));


function result() {
    if (calcPattern.test(display.value)) {
        const historyPhrase = `${display.value} = ${eval(display.value)}`;
        if(display.value != eval(display.value)){
            setLocalStorage(historyPhrase);
            creatHistory(historyPhrase);
        }
        display.value = eval(display.value);
        resultFlag = 1; // set flag to show = has pressed
    } else {
        display.classList.toggle("error");
        setTimeout(() => {
            display.classList.toggle("error");
        }, 800);
    }
}
equal.addEventListener("click", result);


function clearAllFunc() {
    display.value = '';
    resultFlag = 0;
}
clearAll.addEventListener("click", clearAllFunc);


function clearLastFunc() {
    display.value = display.value.substring(0, display.value.length - 1);
    resultFlag = 0;
}
clearLast.addEventListener("click", clearLastFunc);
