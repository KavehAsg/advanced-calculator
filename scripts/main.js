const hamMenu = document.querySelector(".ham-menu");
const hamList = document.querySelector(".ham-list");
const historyBtn = document.querySelector(".history-menubtn");
const historyContainer = document.querySelector(".history-container")

function hamAction() {
    hamMenu.classList.toggle("active");
    hamList.classList.toggle("active");
}


hamMenu.addEventListener("click", hamAction);
historyBtn.addEventListener("click" , () =>{
    historyContainer.classList.toggle("active")
    historyBtn.classList.toggle("active")

})