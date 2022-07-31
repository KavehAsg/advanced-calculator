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

let displayArray = [], fermula = [];
let resultFlag = false;

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
        let finalOutput = displayArray.join('');
        display.innerText = finalOutput;
    })
}

result.addEventListener("click", showResult);
function showResult() {
    try {
        const finalFermula = fermula.join("");
        const result = eval(finalFermula);
        display.innerText = result;
        displayArray = [result];
        fermula = [result];
        resultFlag = true;
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
}

clearLast.addEventListener("click", clearLastFunc);
function clearLastFunc() {
    displayArray.pop();
    fermula.pop();
    display.innerText = displayArray.join('');
}



















function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
