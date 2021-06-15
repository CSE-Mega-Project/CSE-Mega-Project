function Preloader() {
    document.querySelector("#pre-loader").style.opacity = 0;
    document.querySelector("#pre-loader").style.zIndex = -1;
}
setInterval(Preloader, 6000);
var data;
let front = true;
const authors = document.querySelectorAll(".author");
const texts = document.querySelectorAll(".text");
const blockFront = document.querySelector(".frontA");
const blockBack = document.querySelector(".backA");
const authorFront = authors[0];
const authorBack = authors[1];
const textFront = texts[0];
const textBack = texts[1];
const displayQuote = () => {
    let index = Math.floor(Math.random() * data.length);
    let quote = data[index].text;
    let author = data[index].author;
    if (!author) {
        author = "Anonymous"
    }
    if (front) {
        textFront.innerHTML = quote;
        authorFront.innerHTML = "~" + author;
    } else {
        textBack.innerHTML = quote;
        authorBack.innerHTML = "~" + author;
    }

    front = !front;

}
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        this.data = data;
        displayQuote()
    });

function newQuote() {
    blockBack.classList.toggle('rotateBack');
    blockFront.classList.toggle('rotateFront');
    displayQuote();
}
setInterval(newQuote, 4500);

// ***************Search Bar

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }