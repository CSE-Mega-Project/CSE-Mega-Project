var previousPage = "#page1";

function clicked(button) {
    let newPage = "#page" + button.textContent;
    document.querySelector(previousPage).classList.add("d-none");
    document.querySelector(newPage).classList.remove("d-none");
    previousPage = "#page" + button.textContent;
}

document.querySelector(".previous").addEventListener("click", function() {
    let num = parseInt(previousPage[5]) - 1;
    if (num >= 1) {
        let newPage = "#page" + num.toString();
        console.log(newPage);
        document.querySelector(previousPage).classList.add("d-none");
        document.querySelector(newPage).classList.remove("d-none");
        previousPage = newPage;
    }
});

document.querySelector(".next").addEventListener("click", function() {
    let num = parseInt(previousPage[5]) + 1;
    if (num <= 7) {
        let newPage = "#page" + num.toString();
        console.log(newPage);
        document.querySelector(previousPage).classList.add("d-none");
        document.querySelector(newPage).classList.remove("d-none");
        previousPage = newPage;
    }
});