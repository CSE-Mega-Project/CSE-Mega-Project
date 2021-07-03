const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

var btn = document.getElementsByClassName('btns')
var t = document.getElementById('t')
var n = document.getElementById('n')
var text = document.getElementsByTagName('h4')

function twenty(){
  text[0].innerHTML = "Percentage  -  91.7%"
  text[1].innerHTML = "Number of Recruiters  -  430"
  text[2].innerHTML = "Number of Offers  -  1100+"
  text[3].innerHTML = "Highest CTC  -  1CPA"
  text[4].innerHTML = "Average CTC  -  16LPA"
  t.style.color = "white"
  t.style.background = "gray"
  n.style.background = "white"
  n.style.color = "gray"
}
function nine(){
    text[0].innerHTML = "Percentage  -  85.6%"
    text[1].innerHTML = ""
    text[2].innerHTML = "Number of Offers  -  925+"
    text[3].innerHTML = "Highest CTC  -  1.42CPA"
    text[4].innerHTML = "Average CTC  -  13LPA"
    n.style.background = "gray"
    n.style.color = "white"
    t.style.color = "gray"
    t.style.background = "white"
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