import { creatHistory, setLocalStorage, title, actionSection, closeHamMenu, bringHistory } from "./main.js";

document.querySelector("#Scientific").addEventListener("click", openScfCalc); // open Standard calculator from menu
function openScfCalc() {
    closeHamMenu();
    title.innerText = "Scientific Calculator";
    actionSection.className = "action-section scf-calc"
    actionSection.innerHTML = `
    <div class="display-scf">0</div>

    <div class="input-scf">
        <div class="section1">
            <div class="key-scf" id="pr(">(</div>
            <div class="key-scf" id="pr)">)</div>
            <div class="action-btn" id="clear-last">C</div>
            <div class="action-btn operator" id="clear-all">AC</div>

            <div class="key-scf" id="num7">7</div>
            <div class="key-scf" id="num8">8</div>
            <div class="key-scf" id="num9">9</div>
            <div class="key-scf operator" id="divide">÷</div>

            <div class="key-scf" id="num4">4</div>
            <div class="key-scf" id="num5">5</div>
            <div class="key-scf" id="num6">6</div>
            <div class="key-scf operator" id="multiply">×</div>

            <div class="key-scf" id="num1">1</div>
            <div class="key-scf" id="num2">2</div>
            <div class="key-scf" id="num3">3</div>
            <div class="key-scf operator" id="minus">-</div>
            <div class="key-scf" id="num0">0</div>
            <div class="key-scf" id="dot">.</div>
            <div class="action-btn operator" id="result">=</div>
            <div class="key-scf operator" id="plus">+</div>
        </div>

        <div class="section2">
            <input type="radio" id="rad" name="angle" checked>
            <label for="rad" class="rad-select">Rad</label>
            <input type="radio" id="deg" name="angle">
            <label for="deg" class="deg-select">Deg</label>
            <div class="key-scf" id="radical">√</div>
            <div class="key-scf" id="pow2">X<span class="symbol">2</span></div>

            <div class="key-scf" id="pi">ℼ</div>
            <div class="key-scf" id="cos">cos</div>
            <div class="key-scf" id="sin">sin</div>
            <div class="key-scf" id="tan">tan</div>


            <div class="key-scf" id="e">e</div>
            <div class="key-scf" id="acos">acos</div>
            <div class="key-scf" id="asin">asin</div>
            <div class="key-scf" id="atan">atan</div>


            <div class="key-scf" id="factorial">x!</div>
            <div class="key-scf" id="exp">exp</div>
            <div class="key-scf" id="ln">ln</div>
            <div class="key-scf" id="log">log</div>


            <div class="key-scf" id="pow">x<span class="symbol">y</span></div>
            <div class="action-btn" id="ANS">ANS</div>
            <div class="key-scf operator" id="remainder">%</div>
        </div>
    </div>
    `;
    runScfCalc();
}


function runScfCalc() {

    bringHistory();
    const buttons = [ // buttons with their properties
        {
            name: "num0",
            show: "0",
            fermula: "0"
        },
        {
            name: "num1",
            show: "1",
            fermula: "1"
        },
        {
            name: "num2",
            show: "2",
            fermula: "2"
        },
        {
            name: "num3",
            show: "3",
            fermula: "3"
        },
        {
            name: "num4",
            show: "4",
            fermula: "4"
        },
        {
            name: "num5",
            show: "5",
            fermula: "5"
        },
        {
            name: "num6",
            show: "6",
            fermula: "6"
        },
        {
            name: "num7",
            show: "7",
            fermula: "7"
        },
        {
            name: "num8",
            show: "8",
            fermula: "8"
        },
        {
            name: "num9",
            show: "9",
            fermula: "9"
        },
        {
            name: "radical",
            show: "√(",
            fermula: "Math.sqrt("
        },
        {
            name: "pow2",
            show: "^(2)",
            fermula: "**2"
        },
        {
            name: "pr(",
            show: "(",
            fermula: "("
        },
        {
            name: "pr)",
            show: ")",
            fermula: ")"
        },
        {
            name: "pi",
            show: "ℼ",
            fermula: "Math.PI"
        },
        {
            name: "cos",
            show: "cos(",
            fermula: "setAngle(Math.cos,"
        },
        {
            name: "sin",
            show: "sin(",
            fermula: "setAngle(Math.sin,"
        },
        {
            name: "tan",
            show: "tan(",
            fermula: "setAngle(Math.tan"
        },
        {
            name: "divide",
            show: "÷",
            fermula: "/",
            type: "operator"
        },
        {
            name: "e",
            show: "e",
            fermula: "Math.E"
        },
        {
            name: "acos",
            show: "acos(",
            fermula: "setAngleInv(Math.acos,"
        },
        {
            name: "asin",
            show: "asin(",
            fermula: "setAngleInv(Math.asin,"
        },
        {
            name: "atan",
            show: "atan(",
            fermula: "setAngleInv(Math.atan,"
        },
        {
            name: "multiply",
            show: "×",
            fermula: "*",
            type: "operator"
        },
        {
            name: "factorial",
            show: "!",
            fermula: "!"
        },
        {
            name: "exp",
            show: "e+(",
            fermula: "*(10**"
        },
        {
            name: "ln",
            show: "ln(",
            fermula: "ln("
        },
        {
            name: "log",
            show: "log(",
            fermula: "Math.log("
        },
        {
            name: "minus",
            show: "-",
            fermula: "-",
            type: "operator"
        },
        {
            name: "pow",
            show: "^(",
            fermula: "^("
        },
        {
            name: "remainder",
            show: "%",
            fermula: "%",
            type: "operator"
        },
        {
            name: "dot",
            show: ".",
            fermula: "."
        },
        {
            name: "plus",
            show: "+",
            fermula: "+",
            type: "operator"
        }
    ];


    const operators = ["-", "+", "*", "/", "%"];

    const input = document.querySelectorAll(".key-scf");
    const display = document.querySelector(".display-scf");
    const result = document.querySelector("#result");
    const clearAll = document.querySelector("#clear-all");
    const clearLast = document.querySelector("#clear-last");
    const answer = document.querySelector("#ANS");
    const radian = document.querySelector("#rad");

    let displayArray = [], fermula = []; // با این دو ارایه مقادیر نمایشی و مقادیر به فرمت اجرایی جاوا اسکریپت رو از هم متمایز میکنیم
    let resultFlag = false;
    let ans = 0;
    const resultPattern = /([\.]\d?)+[0]{5}/;
    // ریجکس برای شناسایی مقادیر غیرمعقول

    input.forEach(btn => btn.addEventListener("click", btnAction));
    function btnAction(event) {
        const btnId = event.target.id;
        buttons.forEach(target => {
            if (target.name === btnId && btnId === "dot") { // جلوگیری از تکرار . پشت سر هم
                if (fermula[fermula.length - 1] === ".") {
                    error();
                }
                else {
                    fermula.push(target.fermula);
                    displayArray.push(target.show);
                }
            } else if (target.name === btnId && target.type === "operator") { // جلوگیری از تکرار نابجای عملگرها
                if (operators.includes(fermula[fermula.length - 1])) {
                    error();
                } else {
                    fermula.push(target.fermula);
                    displayArray.push(target.show);
                    resultFlag = false;
                }
            } else if (target.name === btnId) {
                if (resultFlag) {
                    displayArray = [target.show];
                    fermula = [target.fermula];
                } else {
                    fermula.push(target.fermula);
                    displayArray.push(target.show);
                }
            }
            display.innerText = displayArray.join('');
            if (fermula.includes("!")) { // تشخیص وجود فاکتوریل در عبارت و اجرای فانکشن مربوط
                fermula = getFactorialNum(fermula);
            }
            else if (fermula.includes("^(")) { // تشخیص وجود توان در عبارت
                fermula = getPowBaseNumber(fermula);
            }
        })
    }

    result.addEventListener("click", showResult);
    function showResult() {
        try {
            const finalFermula = fermula.join("");
            let finalShow = displayArray.join('');
            let result = eval(finalFermula);
            if (Number.isNaN(result)) {
                display.innerText = "Invalid input";
            } else {
                let stringedResult = String(result);
                stringedResult.match(resultPattern) !== null ? result = parseFloat(result.toFixed(2)) : null;
                display.innerText = result;
                if (finalShow != result) {
                    const historyPhrase = `${finalShow} = ${result}`;
                    setLocalStorage(historyPhrase);
                    creatHistory(historyPhrase);
                }
                displayArray = [result];
                fermula = [result];
                resultFlag = true;
                ans = result;
            }
        } catch {
            error();
        }
    }

    clearAll.addEventListener("click", clearAllFunc);
    function clearAllFunc() {
        display.innerText = "0";
        displayArray = [];
        fermula = [];
        resultFlag = false;
    }

    clearLast.addEventListener("click", clearLastFunc);
    function clearLastFunc() {
        displayArray.pop();
        fermula.pop();
        if (displayArray.length == 0) display.innerText = "0";
        else display.innerText = displayArray.join('');
        resultFlag = false;
    }

    answer.addEventListener("click", putLastAnswer);
    function putLastAnswer() {
        if (resultFlag) {
            displayArray = ["ANS"];
            fermula = [ans];
            display.innerText = displayArray.join("");
        } else {
            displayArray.push("ANS");
            fermula.push(ans);
            display.innerText = displayArray.join("");
        }
    }

    function getFactorialNum(phrase) {
        /*
       وظیفه این فانکشن استخراج عدد فاکتوریل از عبارت ورودی و تبدیل ان به فرمت قابل اجرا توسط جاوا اسکریپت
        است
        */
        let factorialIndex = phrase.indexOf("!");
        let factorialNumber = [];
        let parenthesesCounter = 0; // توسط این متغییر پرانتز های داخل عبارت را تشخیص میدهیم
        factorialIndex--;
        for (factorialIndex; factorialIndex >= 0; factorialIndex--) {
            if (phrase[factorialIndex].includes(")")) {
                parenthesesCounter += 1;
                factorialNumber.unshift(phrase[factorialIndex]);
            }
            else if (phrase[factorialIndex].includes("(")) {
                parenthesesCounter -= 1;
                factorialNumber.unshift(phrase[factorialIndex]);
            }
            else if (operators.includes(phrase[factorialIndex]) && parenthesesCounter == 0) break;
            else factorialNumber.unshift(phrase[factorialIndex]);
        }
        factorialNumber = factorialNumber.join("");
        phrase.splice(factorialIndex + 1, phrase.indexOf("!") + 1, `factorial(${factorialNumber})`);
        return phrase;
    }

    function factorial(n) {
        let answer = 1;
        if (n == 0 || n == 1) {
            return answer;
        } else if (n % 1 !== 0) {
            return gamma(n + 1);
        } else {
            for (var i = n; i >= 1; i--) {
                answer = answer * i;
            }
            return answer;
        }
    }

    function gamma(n) {
        var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
            p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
        if (n < 0.5) {
            return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
        }
        else {
            n--;
            var x = p[0];
            for (var i = 1; i < g + 2; i++) {
                x += p[i] / (n + i);
            }
            var t = n + g + 0.5;
            return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
        }
    }

    function getPowBaseNumber(phrase) {
        /*
        توسط این فانکشن عدد پایه توان را به فرمت قابل اجرا استخراج میکنیم
        */
        let factorialIndex = phrase.indexOf("^(");
        let factorialNumber = [];
        let parenthesesCounter = 0;
        factorialIndex--;
        for (factorialIndex; factorialIndex >= 0; factorialIndex--) {
            if (phrase[factorialIndex].includes(")")) {
                parenthesesCounter += 1;
                factorialNumber.unshift(phrase[factorialIndex]);
            }
            else if (phrase[factorialIndex].includes("(")) {
                parenthesesCounter -= 1;
                factorialNumber.unshift(phrase[factorialIndex]);
            }
            else if (operators.includes(phrase[factorialIndex]) && parenthesesCounter == 0) break;
            else factorialNumber.unshift(phrase[factorialIndex]);
        }
        factorialNumber = factorialNumber.join("");
        phrase.splice(factorialIndex + 1, phrase.indexOf("^(") + 1, `Math.pow(${factorialNumber},`);
        return phrase;
    }

    function setAngle(callback, angle) { // تعیین زاویه ماشین حساب
        if (!radian.checked) {
            angle = angle * Math.PI / 180;
        }
        return callback(angle);
    }

    function setAngleInv(callback, value) { // تعیین زاویه برای متود های acos , asin ...
        let length = callback(value);
        if (!radian.checked) {
            length = length * 180 / Math.PI;
        }
        return length;
    }

    function error(){
        display.classList.toggle("error");
        setTimeout(() => {
            display.classList.toggle("error");
        }, 800);
    }
}
