const hamMenu = document.querySelector(".ham-menu");
const hamList = document.querySelector(".ham-list");
const historyBtn = document.querySelector(".history-menubtn");
const historyContainer = document.querySelector(".history-container")
const themeBtn = document.querySelector("#theme-toogle");

function hamAction() {
    hamMenu.classList.toggle("active");
    hamList.classList.toggle("active");
}

function setTeheme (){
    // themeBtn.checked ? console.log("yep") : console.log("nope");
    if(themeBtn.checked){
        document.documentElement.style.setProperty('--theme-color', '#000');
    } else{
        document.documentElement.style.setProperty('--theme-color', '#fff');

    }
}

hamMenu.addEventListener("click", hamAction);
historyBtn.addEventListener("click" , () =>{
    historyContainer.classList.toggle("active");
    historyBtn.classList.toggle("active");
});

themeBtn.addEventListener("click" , setTeheme);