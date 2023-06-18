const coverBBC = ["covers collection/BBC Pack/1waifu_interview.png","covers collection/BBC Pack/Pussy free senpai.png","covers collection/BBC Pack/bbc only.png","covers collection/BBC Pack/makima best!.png","covers collection/BBC Pack/tighnari bbc slut.png"];
const coverGelatomusume = ["covers collection/Gelatomusume/Makima BBC1.png","covers collection/Gelatomusume/Mariya Shidou4.png","covers collection/Gelatomusume/Mom NTR Impregnation.jpg","covers collection/Gelatomusume/Wife Bathroom NTR1.png","covers collection/Gelatomusume/Zelda X Ganon NTR.png"];
const coverYen = ["covers collection/Yen/yen.png","covers collection/Yen/yen2.png","covers collection/Yen/yen3.png","covers collection/Yen/yen4.png","covers collection/Yen/yen5.png"];

const imgBBC = document.querySelector("#imgBBC");
const imgGelatomusume = document.querySelector("#imgGelatomusume");
const imgYen = document.querySelector("#imgYen");

let frames = 0;

function changeImages() {
  imgBBC.src = coverBBC[frames % coverBBC.length];
  imgGelatomusume.src = coverGelatomusume[frames % coverGelatomusume.length];
  imgYen.src = coverYen[frames % coverYen.length];
  
  frames++;
}

document.addEventListener("DOMContentLoaded", function() {
  let interval = 2000; // Change this value to adjust the interval (in milliseconds)
  
  let timerId = setInterval(changeImages, interval);
});
