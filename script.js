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
  var cardIMG = document.querySelectorAll(".card > img");
  localStorage.setItem("Default", 1)
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 0);  
  for (var i = 0; i < cardIMG.length; i++) {
    card[i].classList.remove("cardReverse");
    cardIMG[i].classList.remove("cardImgLargeReverseMobile");
  }}}

function ReverseGrid() {
  localStorage.setItem("Default", 0);
  localStorage.setItem("Reverse", 1); 
  if (localStorage.LargeReverse == 1) {
    localStorage.setItem("LargeReverse", 0);
  var card = document.querySelectorAll(".card");
  var cardIMG = document.querySelectorAll(".card > img");
  for (var i = 0; i < card.length; i++) {
    cardIMG[i].classList.remove("cardImgLargeReverseMobile");
    card[i].classList.add("cardReverse");
  }} else {
  var card = document.querySelectorAll(".card");
  for (var i = 0; i < card.length; i++) {
    card[i].classList.add("cardReverse");
  }   
  }
  }


function LargeReverseGrid() {
  localStorage.setItem("Default", 0);
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 1);
  var card = document.querySelectorAll(".card");
  var cardIMG = document.querySelectorAll(".card > img");
  for (var i = 0; i < cardIMG.length; i++) {
    card[i].classList.add("cardReverse");
    cardIMG[i].classList.add("cardImgLargeReverseMobile");
  }
}




} else {
function DefaultGrid() {

  if (localStorage.Default == 1) {
    console.log(localStorage.Default);
  } else {
  var card = document.querySelectorAll(".card");
  var cardIMG = document.querySelectorAll(".card > img");
  localStorage.setItem("Default", 1)
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 0);  
  for (var i = 0; i < cardIMG.length; i++) {
    card[i].classList.remove("cardReverse");
    cardIMG[i].classList.remove("cardImgLargeReverse");
  }}}

function ReverseGrid() {
  localStorage.setItem("Default", 0);
  localStorage.setItem("Reverse", 1); 
  if (localStorage.LargeReverse == 1) {
    localStorage.setItem("LargeReverse", 0);
  var card = document.querySelectorAll(".card");
  var cardIMG = document.querySelectorAll(".card > img");
  for (var i = 0; i < card.length; i++) {
    cardIMG[i].classList.remove("cardImgLargeReverse");
    card[i].classList.add("cardReverse");
  }} else {
  var card = document.querySelectorAll(".card");
  for (var i = 0; i < card.length; i++) {
    card[i].classList.add("cardReverse");
  }   
  }
  }


function LargeReverseGrid() {
  localStorage.setItem("Default", 0);
  localStorage.setItem("Reverse", 0);
  localStorage.setItem("LargeReverse", 1);
  var card = document.querySelectorAll(".card");
  var cardIMG = document.querySelectorAll(".card > img");
  for (var i = 0; i < cardIMG.length; i++) {
    card[i].classList.add("cardReverse");
    cardIMG[i].classList.add("cardImgLargeReverse");
  }
}

}