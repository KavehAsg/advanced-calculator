const hamMenu = document.querySelector(".ham-menu");
const hamList = document.querySelector(".ham-list");
const historyBtn = document.querySelector(".history-menubtn");
const historyContainer = document.querySelector(".history-container")
const themeBtn = document.querySelector("#theme-toogle");
const title = document.querySelector("h1");
const actionSection = document.querySelector(".action-section");
let deleteHistoryBtn = document.querySelectorAll(".delete");

export { creatHistory, setLocalStorage, removeLocalStorage, deleteHistoryBtn };

function selectNewBtns() {
    deleteHistoryBtn = document.querySelectorAll(".delete");
    deleteHistoryBtn.forEach(btn => btn.addEventListener("click", (event) => {
        deleteHistoryBox(event);
        removeLocalStorage(event);
    }));
}
selectNewBtns();


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
    selectNewBtns();
}


function deleteHistoryBox(btn) {
    const parent = btn.target.parentElement.parentElement.parentElement;
    parent.remove();
    console.log(parent);
}


let historyArray = [];
function setLocalStorage(data) {
    historyArray.push(data);
    if (localStorage.getItem("S-D") == null) {
        localStorage.setItem("S-D", JSON.stringify(historyArray));
    } else {
        historyArray = JSON.parse(localStorage.getItem("S-D"));
        historyArray.push(data);
        localStorage.setItem("S-D", JSON.stringify(historyArray));
    }
}


function removeLocalStorage(btn) {
    const phrase = btn.target.parentElement.parentElement.siblingElement;
    const tempArray = JSON.parse(localStorage.getItem("S-D"));
    tempArray.splice(tempArray.indexOf(phrase), 1);
    localStorage.setItem("S-D", JSON.stringify(tempArray));
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

document.querySelector("#Standard").addEventListener("click" , openStdCalc); // open Standard calculator from menu
function openStdCalc(){
    title.innerText = "Sstandard Calculator";
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
}

