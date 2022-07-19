const hamMenu = document.querySelector(".ham-menu");
const hamList = document.querySelector(".ham-list");
const historyBtn = document.querySelector(".history-menubtn");
const historyContainer = document.querySelector(".history-container")
const themeBtn = document.querySelector("#theme-toogle");

function firstCreatHistory() {  //creat history box in history menu from local storage
    Object.keys(localStorage).forEach(key => {
        const items = JSON.parse(localStorage.getItem(key));
        items.forEach(item => {
            const historyBox = document.createElement("div");
            historyBox.classList.add("history-box");
            historyBox.innerHTML = `
            <p>${item}</p>
            <div class="history-boxbtn">
                <div class="delete"><i class="fa-regular fa-trash-can"></i></div>
            </div>
            `;
            document.querySelector(".history").appendChild(historyBox);
        })
    });
}


function creatHistory(phrase) {
    const historyBox = document.createElement("div");
    historyBox.classList.add("history-box");
    historyBox.innerHTML = `
    <p>${phrase}</p>
    <div class="history-boxbtn">
        <div class="delete"><i class="fa-regular fa-trash-can"></i></div>
    </div>
    `;
    document.querySelector(".history").appendChild(historyBox);
}

function setLocalStorage(data){
    historyArray.push(data);
    if (localStorage.getItem("S-D") == null) {
        localStorage.setItem("S-D", JSON.stringify(historyArray));
    } else {
        historyArray = JSON.parse(localStorage.getItem("S-D"));
        historyArray.push(data);
        localStorage.setItem("S-D", JSON.stringify(historyArray));
    }
}

function hamAction() { // perform action to hamburger menu
    hamMenu.classList.toggle("active");
    hamList.classList.toggle("active");
}
hamMenu.addEventListener("click", hamAction);


historyBtn.addEventListener("click", () => { //action for history menu 
    historyContainer.classList.toggle("active");
    historyBtn.classList.toggle("active");
});


function setTheme() { // switch for dark mode
    if (themeBtn.checked) {
        document.documentElement.style.setProperty('--theme-color', '#000');
        document.documentElement.style.setProperty('--primary-color', '#f4511e');
        document.documentElement.style.setProperty('--secondry-color', '#fff');
        document.documentElement.style.setProperty('--action-color', '#9e9e9e');
        document.documentElement.style.setProperty('--back-color', '#9e9e9e');
        document.querySelector(".theme-btn").innerHTML = `<i class="fa-regular fa-sun"></i>`
    } else {
        document.documentElement.style.setProperty('--theme-color', '#fff');
        document.documentElement.style.setProperty('--primary-color', '#1565c0');
        document.documentElement.style.setProperty('--secondry-color', '#000');
        document.documentElement.style.setProperty('--action-color', '#bdbdbd');
        document.documentElement.style.setProperty('--back-color', '#eeeeee');
        document.querySelector(".theme-btn").innerHTML = `<i class="fa-regular fa-moon"></i>`
    }
}
themeBtn.addEventListener("click", setTheme);

// end of menues and navbar actions
//--------------------------------------------------------------------//
// standard calculator =>

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const clearAll = document.querySelector(".clear-all");
const clearLast = document.querySelector(".clear-last");
const equal = document.querySelector("#equal");
const operator = document.querySelectorAll(".operator");

const calcPattern = /^[-+]?[0-9]+([-+*/%.]+[-+]?[0-9]+)*$/;
let resultFlag = 0;
let historyArray = [];
firstCreatHistory(); //creat history boxes at the begining

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

