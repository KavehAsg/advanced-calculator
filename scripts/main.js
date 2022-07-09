const hamMenu = document.querySelector(".ham-menu");
const hamList = document.querySelector(".ham-list")

function hamAction(){
    hamMenu.classList.toggle("active");
    hamList.classList.toggle("actived");
}


hamMenu.addEventListener("click" , hamAction);