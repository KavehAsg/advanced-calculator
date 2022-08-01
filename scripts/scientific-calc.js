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
        fermula: "Math.cos("
    },
    {
        name: "sin",
        show: "sin(",
        fermula: "Math.sin("
    },
    {
        name: "tan",
        show: "tan(",
        fermula: "Math.tan("
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
        fermula: "Math.acos("
    },
    {
        name: "asin",
        show: "asin(",
        fermula: "Math.asin("
    },
    {
        name: "atan",
        show: "atan(",
        fermula: "Math.atan("
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
        fermula: "Math.pow("
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

const input = document.querySelectorAll(".key-scf");
const display = document.querySelector(".display-scf");
const result = document.querySelector("#result");
const clearAll = document.querySelector("#clear-all");
const clearLast = document.querySelector("#clear-last");
const answer = document.querySelector("#ANS");

let displayArray = [], fermula = [];
let resultFlag = false;
let ans = 0;
const pattern = /([\.]\d?)+[0]{5}/;

input.forEach(btn => btn.addEventListener("click", btnAction));
function btnAction(event) {
    const btnId = event.target.id;
    buttons.forEach(target => {
        if (target.name === btnId && target.type === "operator") {
            fermula.push(target.fermula);
            displayArray.push(target.show);
            resultFlag = false;
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
        if (fermula.includes("!")) {
            fermula = getFactorialNum(fermula);
        }
    })
}

result.addEventListener("click", showResult);
function showResult() {
    try {
        const finalFermula = fermula.join("");
        let result = eval(finalFermula);
        if (Number.isNaN(result)) {
            display.innerText = "Invalid input";
        } else {
            let stringedResult = String(result);
            stringedResult.match(pattern) !== null ? result = parseFloat(result.toFixed(2)) : null;
            display.innerText = result;
            displayArray = [result];
            fermula = [result];
            resultFlag = true;
            ans = result;
        }
    } catch {
        display.classList.toggle("error");
        setTimeout(() => {
            display.classList.toggle("error");
        }, 800);
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
    const operator = ["-", "+", "*", "/", "%"];
    let factorialIndex = phrase.indexOf("!");
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
        else if (operator.includes(phrase[factorialIndex]) && parenthesesCounter == 0) break;
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
