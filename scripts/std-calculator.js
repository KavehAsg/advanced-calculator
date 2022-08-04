import { creatHistory, setLocalStorage, title, actionSection, closeHamMenu, bringHistory } from "./main.js";

document.querySelector("#Standard").addEventListener("click", openStdCalc); // open Standard calculator from menu
function openStdCalc() {
    bringHistory();
    closeHamMenu();
    title.innerText = "Standard Calculator";
    actionSection.className = "action-section std"
    actionSection.innerHTML = `
    <input class="display-std" type="text" placeholder="0">

            <div class="keys-std">
                <div class="key-std clear-all-std">AC</div>
                <div class="key-std clear-last-std">C</div>
                <div class="key-std operator-std" id="rem">%</div>
                <div class="key-std operator-std" id="division">/</div>

                <div class="key-std numbers-std">7</div>
                <div class="key-std numbers-std">8</div>
                <div class="key-std numbers-std">9</div>
                <div class="key-std operator-std" id="multi">*</div>

                <div class="key-std numbers-std">4</div>
                <div class="key-std numbers-std">5</div>
                <div class="key-std numbers-std">6</div>
                <div class="key-std operator-std" id="minous">-</div>

                <div class="key-std numbers-std">1</div>
                <div class="key-std numbers-std">2</div>
                <div class="key-std numbers-std">3</div>
                <div class="key-std operator-std" id="plus">+</div>

                <div class="key-std numbers-std" style="grid-column: 1 / 3 ; border-radius: 40px;">0</div>
                <div class="key-std numbers-std">.</div>
                <div class="key-std equal-std" id="equal-std">=</div>
            </div>

    `;
    runStdCalc();
}

function runStdCalc() {

    const display = document.querySelector(".display-std");
    const numbers = document.querySelectorAll(".numbers-std");
    const clearAll = document.querySelector(".clear-all-std");
    const clearLast = document.querySelector(".clear-last-std");
    const equal = document.querySelector("#equal-std");
    const operator = document.querySelectorAll(".operator-std");


    const calcPattern = /^[-+]?[0-9]+([-+*/%.]+[-+]?[0-9]+)*$/;
    const resultPattern = /([\.]\d?)+[0]{5}/;
    let resultFlag = 0; /*
     توسط این فلگ مشخص میکنیم کاربر حداقل یکبار قبل از عملیات جدید گزینه = را زده است
     این فلگ با یکبار وارد کردن عدد جدید ریست میشود و مقدار ماشین حساب صفر مبشود در غیر این صورت ادامه
     عدد قبل وارد عملیات جدید میشود
    */
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
            error();
        }
    }
    operator.forEach(item => item.addEventListener("click", inputOperator));

    function result() {
        if (calcPattern.test(display.value)) {
            let result = eval(display.value);
            let stringedResult = String(result);
            stringedResult.match(resultPattern) !== null ? result = parseFloat(result.toFixed(2)) : null;
            const historyPhrase = `${display.value} = ${result}`;
            if (display.value != result) {
                setLocalStorage(historyPhrase);
                creatHistory(historyPhrase);
            }
            display.value = result;
            resultFlag = 1; // set flag to show = has pressed
        } else {
            error();
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

    function error() {
        display.classList.toggle("error");
        setTimeout(() => {
            display.classList.toggle("error");
        }, 800);
    }

}

runStdCalc();

