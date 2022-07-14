const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const clearAll = document.querySelector(".clear-all");
const clearLast = document.querySelector(".clear-last");
const equal = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");

const calcPattern = /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/g;
const numPattern = /^\d*\d$/g; // only numbers

function inputNum(event) {
    const inputText = event.target.innerText;
    display.value += inputText;
}
numbers.forEach(item => item.addEventListener("click", inputNum));

function inputOperator(event) {
    const inputText = event.target.innerText;
    if (calcPattern.test(display.value) || numPattern.test(display.value)) {
        display.value += inputText;
    } else{
        display.classList.toggle("error");
        setTimeout(() =>{
        display.classList.toggle("error");
        } , 800)
    }
}
operator.forEach(item => item.addEventListener("click", inputOperator));

function result(event) {
    if(calcPattern.test(display.value)){
        display.value = eval(display.value);
    } else{
        display.classList.toggle("error");
        setTimeout(() =>{
        display.classList.toggle("error");
        } , 800)
    }
}

equal.addEventListener("click" , result);


function clearAllFunc(){
    display.value = "";
}
clearAll.addEventListener("click" , clearAllFunc );


function clearLastFunc() {
    display.value = display.value.substring(0 , display.value.length - 1);
}
clearLast.addEventListener("click" , clearLastFunc);


// const data = "hello bitch";
// console.log(data.sub)












// const data = "50%5";
// console.log(eval(data))