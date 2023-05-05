// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Grid Panel

  function LangDropDown() {
  document.getElementById("lang-Dropdown").classList.toggle("show");
}


document.addEventListener('DOMContentLoaded', function () {
  localStorage.setItem("Default", 1);
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 0);
  });
if (window.matchMedia("(max-width: 768px)").matches) {

function DefaultGrid() {

  if (localStorage.Default == 1) {
    console.log(localStorage.Default);
  } else {
  var card = document.querySelectorAll(".card");
    var cardNAV = document.querySelectorAll(".card > nav");
  var cardIMG = document.querySelectorAll(".card > img");
  localStorage.setItem("Default", 1)
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 0);  
  for (var i = 0; i < cardIMG.length; i++) {
    card[i].classList.remove("cardReverse");
    cardIMG[i].classList.remove("cardImgLargeReverseMobile");
    cardNAV[i].classList.remove("cardNAV");
  }}}

function ReverseGrid() {
  localStorage.setItem("Default", 0);
  localStorage.setItem("Reverse", 1); 
  if (localStorage.LargeReverse == 1) {
    localStorage.setItem("LargeReverse", 0);
  var card = document.querySelectorAll(".card");
  var cardIMG = document.querySelectorAll(".card > img");
  var cardNAV = document.querySelectorAll(".card > nav");
  for (var i = 0; i < card.length; i++) {
    cardIMG[i].classList.remove("cardImgLargeReverseMobile");
    card[i].classList.add("cardReverse");
    cardNAV[i].classList.add("cardNAV");
  }} else {
  var card = document.querySelectorAll(".card");
  var cardNAV = document.querySelectorAll(".card > nav");
  for (var i = 0; i < card.length; i++) {
    card[i].classList.add("cardReverse");
    cardNAV[i].classList.add("cardNAV");
  }   
  }
  }


function LargeReverseGrid() {
  localStorage.setItem("Default", 0);
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 1);
  var card = document.querySelectorAll(".card");
  var cardNAV = document.querySelectorAll(".card > nav");
  var cardIMG = document.querySelectorAll(".card > img");
  for (var i = 0; i < cardIMG.length; i++) {
    card[i].classList.add("cardReverse");
    cardIMG[i].classList.add("cardImgLargeReverseMobile");
    cardNAV[i].classList.add("cardNAV");
  }
}




} else {
function DefaultGrid() {

  if (localStorage.Default == 1) {
    console.log(localStorage.Default);
  } else {
  var card = document.querySelectorAll(".card");
    var cardNAV = document.querySelectorAll(".card > nav");
  var cardIMG = document.querySelectorAll(".card > img");
  localStorage.setItem("Default", 1)
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 0);  
  for (var i = 0; i < cardIMG.length; i++) {
    card[i].classList.remove("cardReverse");
    cardIMG[i].classList.remove("cardImgLargeReverse");
    cardNAV[i].classList.remove("cardNAV");
  }}}

function ReverseGrid() {
  localStorage.setItem("Default", 0);
  localStorage.setItem("Reverse", 1); 
  if (localStorage.LargeReverse == 1) {
    localStorage.setItem("LargeReverse", 0);
  var card = document.querySelectorAll(".card");
    var cardNAV = document.querySelectorAll(".card > nav");
  var cardIMG = document.querySelectorAll(".card > img");
  for (var i = 0; i < card.length; i++) {
    cardIMG[i].classList.remove("cardImgLargeReverse");
    card[i].classList.add("cardReverse");
    cardNAV[i].classList.add("cardNAV");
  }} else {
  var card = document.querySelectorAll(".card");
  var cardNAV = document.querySelectorAll(".card > nav");
  for (var i = 0; i < card.length; i++) {
    card[i].classList.add("cardReverse");
    cardNAV[i].classList.add("cardNAV");
  }   
  }
  }


function LargeReverseGrid() {
  localStorage.setItem("Default", 0);
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 1);
  var card = document.querySelectorAll(".card");
    var cardNAV = document.querySelectorAll(".card > nav");
  var cardIMG = document.querySelectorAll(".card > img");
  for (var i = 0; i < cardIMG.length; i++) {
    card[i].classList.add("cardReverse");
    cardIMG[i].classList.add("cardImgLargeReverse");
    cardNAV[i].classList.add("cardNAV");
  }
}

}

let sortbtn = document.getElementById("sortbtn");
let container = document.querySelector(".container");
let FramSVG = document.querySelector("#sortIcon");
let svgUP = "M5.71 6.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3V17a1 1 0 0 0 2 0V9.41l.29.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2Zm10 8H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm0-5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z";
let svgDown = "m6.29 14.29l-.29.3V7a1 1 0 0 0-2 0v7.59l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l2-2a1 1 0 0 0-1.42-1.42ZM11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2Zm10 3H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm0 5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z";


function SortUP() {
  container.setAttribute("style","flex-direction: column-reverse; gap:15px;");
  FramSVG.setAttribute("d",svgDown);
  sortbtn.setAttribute("onclick","SortDown()");
}
function SortDown() {
  container.setAttribute("style","gap:15px;");
  FramSVG.setAttribute("d",svgUP);
  sortbtn.setAttribute("onclick","SortUP()");
}


function MW0() {
  let PagesList = document.querySelectorAll(".paper");
  for (var i = 0; i < PagesList.length; i++) {
    PagesList[i].style = "max-width:100%;"
  }
  document.querySelector(".MW0 svg").setAttribute("id","activeBtn");
  document.querySelector(".MW0").setAttribute("onclick", "MW0A()");
}

function MW0A() {
  let PagesList = document.querySelectorAll(".paper");
  for (var i = 0; i < PagesList.length; i++) {
    PagesList[i].removeAttribute("style");
  }
  document.querySelector(".MW0 svg").removeAttribute("id");
  document.querySelector(".MW0").setAttribute("onclick", "MW0()");
}

function MixPost() {
  let container = document.querySelector(".container");
  let PagesList = document.querySelectorAll(".container div");
  Array.from(PagesList)
  .sort(() => Math.random() - 0.5)
  .forEach(div => container.appendChild(div));
}

function Dropdown(x) {
  document.getElementById("myDropdown").classList.toggle("show");
  if (x == 1) {
    document.querySelector(".dropbtn svg").setAttribute("id","activeBtn");
    document.querySelector(".dropbtn").setAttribute("onclick","Dropdown(0)");
  } else if (x == 0) {
    document.querySelector(".dropbtn svg").removeAttribute("id");
    document.querySelector(".dropbtn").setAttribute("onclick","Dropdown(1)");
  }
}