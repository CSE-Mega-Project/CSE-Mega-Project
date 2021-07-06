const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

var btn = document.getElementsByClassName('btns')
var t = document.getElementById('t')
var to = document.getElementById('to')
var n = document.getElementById('n')
var text_p = document.querySelectorAll("#placement h4");

function twenone() {
  text_p[0].innerHTML = "Placement Percentage - 86.57%"
  text_p[2].innerHTML = "Highest CTC -   58.86LPA"
  text_p[3].innerHTML = "Average CTC - 10.47LPA"
  to.style.color = "white"
  to.style.background = "gray"
  t.style.color = "gray"
  t.style.background = "white"
  n.style.background = "white"
  n.style.color = "gray"
}

function twenty(){
  text_p[0].innerHTML = "Placement Percentage - 91.94%"
  text_p[1].innerHTML = "Number of recruiters - 275+"
  text_p[2].innerHTML = "Highest CTC -   63.27LPA"
  text_p[3].innerHTML = "Average CTC - 12.03LPA"
  t.style.color = "white"
  t.style.background = "gray"
  to.style.color = "gray"
  to.style.background = "white"
  n.style.background = "white"
  n.style.color = "gray"
}
function nine(){
    text_p[0].innerHTML = "Percentage  -  97.94%"
    text_p[1].innerHTML = "Number of recruiters  -  285+"
    text_p[2].innerHTML = "Highest CTC  -  36LPA"
    text_p[3].innerHTML = "Average CTC  -  9.72LPA"
    n.style.background = "gray"
    n.style.color = "white"
    t.style.color = "gray"
    t.style.background = "white"
    to.style.color = "gray"
    to.style.background = "white"
}

let gpsmap=document.querySelector('.gpsmap')
setInterval(()=>gpsmap.width=(window.screen.width),100)

const scrollbtn = document.getElementById('scrollTop');

scrollbtn.addEventListener('click', function () {
  window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
  })
})



function display_19()
{
  let temp = document.getElementById("cutoff-2019");
  let temp2 = document.getElementById("cutoff-2020");

  if(temp.style.height == "0px")
  {
    temp.style.height = "auto";
    temp2.style.height = "0px";
  }
  else
  {
    temp.style.height = "0px";
  }
}
function display_20()
{
  let temp = document.getElementById("cutoff-2020");
  let temp2 = document.getElementById("cutoff-2019");

  if(temp.style.height == "0px")
  {
    temp.style.height = "auto";
    temp2.style.height = "0px";
  }
  else
  {
    temp.style.height = "0px";
  }
}