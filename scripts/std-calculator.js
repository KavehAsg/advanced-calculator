import { creatHistory, setLocalStorage, title, actionSection , closeHamMenu } from "./main.js";

document.querySelector("#Standard").addEventListener("click", openStdCalc); // open Standard calculator from menu
function openStdCalc() {
    closeHamMenu();
    title.innerText = "Standard Calculator";
    actionSection.className = "action-section std"
    actionSection.innerHTML = `
    <input class="display" type="text" placeholder="0">
                <div class="keys">
    
                    <div class="key clear-all">AC</div>
                    <div class="key clear-last">C</div>
                    <div class="key operator" id="rem">%</div>
                    <div class="key operator" id="division">/</div>
    
                    <div class="key numbers">7</div>
                    <div class="key numbers">8</div>
                    <div class="key numbers">9</div>
                    <div class="key operator" id="multi">*</div>
    
                    <div class="key numbers">4</div>
                    <div class="key numbers">5</div>
                    <div class="key numbers">6</div>
                    <div class="key operator" id="minous">-</div>
    
                    <div class="key numbers">1</div>
                    <div class="key numbers">2</div>
                    <div class="key numbers">3</div>
                    <div class="key operator" id="plus">+</div>
    
                    <div class="key numbers" style="grid-column: 1 / 3 ; border-radius: 40px;">0</div>
                    <div class="key numbers">.</div>
                    <div class="key equal" id="equal">=</div>
    
                </div>
    `;
    runStdCalc();
}

function runStdCalc() {

    const display = document.querySelector(".display");
    const numbers = document.querySelectorAll(".numbers");
    const clearAll = document.querySelector(".clear-all");
    const clearLast = document.querySelector(".clear-last");
    const equal = document.querySelector("#equal");
    const operator = document.querySelectorAll(".operator");


    const calcPattern = /^[-+]?[0-9]+([-+*/%.]+[-+]?[0-9]+)*$/;
    let resultFlag = 0;

    function inputNum(event) {
        const inputText = event.target.innerText;
        if (inputText !== ".") {
            resultFlag == 1 ? display.value = inputText : display.value += inputText; //print new numbers if = already pressed
        }
        else if (inputText === ".") {
            display.value.lastIndexOf(".") == (display.value.length - 1) ? null : display.value += inputText;
        }
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
            if (display.value != eval(display.value)) {
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

}

runStdCalc();
