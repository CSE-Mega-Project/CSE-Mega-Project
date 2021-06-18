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

function showlist() {
    document.getElementById("myUL").classList.toggle("showsearch");
  }

  function filterFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }