// one-time run function to creat history boxes from local storage
(function () {
    Object.keys(localStorage).forEach(key => {
        const items = JSON.parse(localStorage.getItem(key));
        items.forEach(item => {
            const historyBox = document.createElement("div");
            historyBox.classList.add("history-box");
            historyBox.innerHTML = `
            <p class="history-phrase">${item}</p>
            <div class="history-boxbtn">
                <i class="fa-regular fa-trash-can delete"></i>
            </div>
            `;
            document.querySelector(".history").appendChild(historyBox);
        })
    });
})();