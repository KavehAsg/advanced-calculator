const hamMenu = document.querySelector(".ham-menu");
const hamList = document.querySelector(".ham-list");
const historyBtn = document.querySelector(".history-menubtn");
const historyContainer = document.querySelector(".history-container")
const themeBtn = document.querySelector("#theme-toogle");
// import { exportData } from "./standard-calc.js";

function creatHistory(exportData) {
    const historyBox = document.createElement("div");
    historyBox.classList.add("history-box");
    historyBox.innerHTML = `
    <p>${exportData}</p>
    <div class="history-boxbtn">
        <div class="delete"><i class="fa-regular fa-trash-can"></i></div>
    </div>
    `;
    document.querySelector(".history").appendChild(historyBox);
}
// creatHistory(exportData);



function hamAction() {
    hamMenu.classList.toggle("active");
    hamList.classList.toggle("active");
}
hamMenu.addEventListener("click", hamAction);


historyBtn.addEventListener("click", () => {
    historyContainer.classList.toggle("active");
    historyBtn.classList.toggle("active");
});


function setTeheme() {
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
themeBtn.addEventListener("click", setTeheme);