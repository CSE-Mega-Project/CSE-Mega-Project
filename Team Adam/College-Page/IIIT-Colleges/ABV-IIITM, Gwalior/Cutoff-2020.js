// const menuToggle = document.querySelector('.toggle');
// const showcase = document.querySelector('.showcase');

// menuToggle.addEventListener('click', () => {
//     menuToggle.classList.toggle('active');
//     showcase.classList.toggle('active');
// })

var btn = document.getElementsByClassName('btns')
var gen = document.getElementById('gen_20')
var ews = document.getElementById('ews_20')
var obc = document.getElementById('obc_20')
var sc = document.getElementById('sc_20')
var st = document.getElementById('st_20')
var text = document.querySelectorAll("#cutoff-2020 td");

function general_20(){
    text[1].innerHTML = "12477"
    text[2].innerHTML = "8722"
  
    gen.style.color = "white"
    gen.style.background = "gray"
    ews.style.background = "white"
    ews.style.color = "gray"
    obc.style.background = "white"
    obc.style.color = "gray"
    sc.style.background = "white"
    sc.style.color = "gray"
    st.style.background = "white"
    st.style.color = "gray"
  }
function ewsc_20(){
    text[1].innerHTML = "2206"
    text[2].innerHTML = "1692"
  
    ews.style.color = "white"
    ews.style.background = "gray"
    gen.style.background = "white"
    gen.style.color = "gray"
    obc.style.background = "white"
    obc.style.color = "gray"
    sc.style.background = "white"
    sc.style.color = "gray"
    st.style.background = "white"
    st.style.color = "gray"
  }
function obcc_20(){
    text[1].innerHTML = "7824"
    text[2].innerHTML = "3292"
   
    obc.style.color = "white"
    obc.style.background = "gray"
    ews.style.background = "white"
    ews.style.color = "gray"
    gen.style.background = "white"
    gen.style.color = "gray"
    sc.style.background = "white"
    sc.style.color = "gray"
    st.style.background = "white"
    st.style.color = "gray"
  }
function scc_20(){
    text[1].innerHTML = "4897"
    text[2].innerHTML = "2191"
   
    sc.style.color = "white"
    sc.style.background = "gray"
    ews.style.background = "white"
    ews.style.color = "gray"
    obc.style.background = "white"
    obc.style.color = "gray"
    gen.style.background = "white"
    gen.style.color = "gray"
    st.style.background = "white"
    st.style.color = "gray"
  }
function stc_20(){
    text[1].innerHTML = "2528"
    text[2].innerHTML = "1465"
  
    st.style.color = "white"
    st.style.background = "gray"
    ews.style.background = "white"
    ews.style.color = "gray"
    obc.style.background = "white"
    obc.style.color = "gray"
    gen.style.background = "white"
    gen.style.color = "gray"
    sc.style.background = "white"
    sc.style.color = "gray"
  }