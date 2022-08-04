const hamMenu = document.querySelector(".ham-menu");
const hamList = document.querySelector(".ham-list");
const historyBtn = document.querySelector(".history-menubtn");
const historyBtnIcon = document.querySelector(".hisbtn");
const historyContainer = document.querySelector(".history-container")
const themeBtn = document.querySelector("#theme-toogle");
const title = document.querySelector("h1");
const actionSection = document.querySelector(".action-section");
let deleteHistoryBtn = document.querySelectorAll(".delete");

export { creatHistory, setLocalStorage, title, actionSection, closeHamMenu , hideHistory , bringHistory };

document.documentElement.style.setProperty('--screen-height' , `${visualViewport.height}px`);

actionSection.addEventListener("click", () => {
    closeHamMenu();
    closeHistory();    
});

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
    <p class="history-phrase">${phrase}</p>
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
}

function hideHistory(){
    historyContainer.style.display = "none";
}
function bringHistory(){
    historyContainer.style.display = "flex";
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


function closeHamMenu() {
    hamList.classList.remove("active");
    hamMenu.classList.remove("active");
}
hamMenu.addEventListener("click", () => { // Hamburger menu action
    hamMenu.classList.toggle("active");
    hamList.classList.toggle("active");
});


function closeHistory() {
    historyContainer.classList.remove("active");
    historyBtn.classList.remove("active");
}
historyBtn.addEventListener("click", () => { //action for history menu 
    historyContainer.classList.toggle("active");
    historyBtnIcon.classList.toggle("active");
});


function setTheme() { // switch for dark mode
    if (themeBtn.checked) { // dark mode
        document.documentElement.style.setProperty('--theme-color', '#000');
        document.documentElement.style.setProperty('--primary-color', '#f4511e');
        document.documentElement.style.setProperty('--secondry-color', '#fff');
        document.documentElement.style.setProperty('--action-color', '#9e9e9e');
        document.documentElement.style.setProperty('--back-color', '#eeeeee42');
        document.querySelector(".theme-btn").innerHTML = `<i class="fa-regular fa-sun"></i>`
    } else { // light mode
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
