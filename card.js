coverCOMICS = ["covers moon/003.jpg","covers moon/028.jpg","covers moon/088.jpg","covers moon/176.jpg"];
coverMINI = ["covers miniComics/grusha1.png","covers miniComics/nick1.png","covers miniComics/rona1.png","covers miniComics/Venti1.png"];
coverOTHER = ["covers other/NCalicia.png","covers other/panchy.png","covers other/RimuruStrapon.png","covers other/tigress.png"];
coverCOLLECTION = ["covers collection/BBC pack/1waifu_interview.png","covers collection/Gelatomusume/Makima BBC1.png","covers collection/BBC pack/Pussy free senpai.png","covers collection/Gelatomusume/Wife Bathroom NTR1.png"];

let COMICS = document.querySelector("#imgCOMICS");
let MINI = document.querySelector("#imgMINI");
let OTHER = document.querySelector("#imgOTHER");
let COLLECTION = document.querySelector("#imgCOLLECTION");



function Anim1(){

COMICS.src=coverCOMICS[0];
MINI.src=coverMINI[0];
OTHER.src=coverOTHER[0];
COLLECTION.src=coverCOLLECTION[0];
}
function Anim2(){

COMICS.src=coverCOMICS[1];
MINI.src=coverMINI[1];
OTHER.src=coverOTHER[1];
COLLECTION.src=coverCOLLECTION[1];
}
function Anim3(){

COMICS.src=coverCOMICS[2];
MINI.src=coverMINI[2];
OTHER.src=coverOTHER[2];
COLLECTION.src=coverCOLLECTION[2];
}
function Anim4(){

COMICS.src=coverCOMICS[3];
MINI.src=coverMINI[3];
OTHER.src=coverOTHER[3];
COLLECTION.src=coverCOLLECTION[3];
}
function Starter() {
	let timer = 1000;
	setTimeout(Anim1,timer);
	setTimeout(Anim2,timer*2);
	setTimeout(Anim3,timer*3);
	setTimeout(Anim4,timer*4);
}


document.addEventListener("DOMContentLoaded", function() {
	
	function Start() {
		setInterval(Starter,4000);
	}
   	setTimeout(Start,1000);
  });