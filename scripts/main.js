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
    if(themeBtn.checked){
        document.documentElement.style.setProperty('--theme-color', '#000');
        document.documentElement.style.setProperty('--primary-color', '#f4511e');
        document.documentElement.style.setProperty('--secondry-color', '#fff');
        document.documentElement.style.setProperty('--action-color', '#9e9e9e');
        document.documentElement.style.setProperty('--back-color', '#9e9e9e');
        document.querySelector(".theme-btn").innerHTML = `<i class="fa-regular fa-sun"></i>`
    } else{
        document.documentElement.style.setProperty('--theme-color', '#fff');
        document.documentElement.style.setProperty('--primary-color', '#1565c0');
        document.documentElement.style.setProperty('--secondry-color', '#000');
        document.documentElement.style.setProperty('--action-color', '#bdbdbd');
        document.documentElement.style.setProperty('--back-color', '#eeeeee');
        document.querySelector(".theme-btn").innerHTML = `<i class="fa-regular fa-moon"></i>`
    }
}

hamMenu.addEventListener("click", hamAction);
historyBtn.addEventListener("click" , () =>{
    historyContainer.classList.toggle("active");
    historyBtn.classList.toggle("active");
});

themeBtn.addEventListener("click" , setTeheme);