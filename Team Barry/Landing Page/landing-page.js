let timer1;
let preloader = document.querySelector(".preloader");
let nav = document.querySelector(".navbar");
timer1 = setInterval(() => {
  preloader.classList.add("endpreloadopacity");
  setTimeout(timer1);
}, 4500);
let timer2 = setInterval(() => {
  nav.classList.remove("nav_beforepreload");
  setTimeout(timer2);
  document.body.style.transition = "0s none";
  document.body.style.transition.delay = "none";
  document.querySelector(".headervdo").classList.add("headervdo_afterpreload");
}, 4600);
let timer3 = setInterval(() => {
  preloader.style.display = "none";
  setTimeout(timer3);
}, 5500);
