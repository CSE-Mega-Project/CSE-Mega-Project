const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

var btn = document.getElementsByClassName("btns");
var t = document.getElementById("t");
var n = document.getElementById("n");
var text_p = document.querySelectorAll("#placement h4");

function twenty() {
  text_p[0].innerHTML = "Percentage  -  60%+";
  text_p[1].innerHTML = "Number of Recruiters  -  120";
  text_p[2].innerHTML = "Number of Offers  -  831";
  text_p[3].innerHTML = "Highest CTC  -  49.76CPA";
  text_p[4].innerHTML = "Average CTC  -  11.76LPA";
  t.style.color = "white";
  t.style.background = "gray";
  n.style.background = "white";
  n.style.color = "gray";
}
function nine() {
  text_p[0].innerHTML = "Percentage  -  63%+";
  text_p[1].innerHTML = "";
  text_p[2].innerHTML = "";
  text_p[3].innerHTML = "Highest CTC  -  40.63LPA";
  text_p[4].innerHTML = "Average CTC  -  10.56LPA";
  n.style.background = "gray";
  n.style.color = "white";
  t.style.color = "gray";
  t.style.background = "white";
}

let gpsmap = document.querySelector(".gpsmap");
setInterval(() => (gpsmap.width = window.screen.width), 100);

const scrollbtn = document.getElementById("scrollTop");

scrollbtn.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

function display_19() {
  let temp = document.getElementById("cutoff-2019");
  let temp2 = document.getElementById("cutoff-2020");

  if (temp.style.height == "0px") {
    temp.style.height = "auto";
    temp2.style.height = "0px";
  } else {
    temp.style.height = "0px";
  }
}
function display_20() {
  let temp = document.getElementById("cutoff-2020");
  let temp2 = document.getElementById("cutoff-2019");

  if (temp.style.height == "0px") {
    temp.style.height = "auto";
    temp2.style.height = "0px";
  } else {
    temp.style.height = "0px";
  }
}
