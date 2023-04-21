coverCOMICS = ["covers moon/003.jpg","covers moon/028.jpg","covers moon/088.jpg","covers moon/176.jpg"];
coverMINI = ["covers miniComics/grusha1.png","covers miniComics/nick1.png","covers miniComics/rona1.png","covers miniComics/Venti1.png"];
coverOTHER = ["covers other/NCalicia.png","covers other/panchy.png","covers other/RimuruStrapon.png","covers other/tigress.png"];
coverCOLLECTION = ["covers collection/BBC pack/1waifu_interview.png","covers collection/Gelatomusume/Makima BBC1.png","covers collection/BBC pack/Pussy free senpai.png","covers collection/Gelatomusume/Wife Bathroom NTR1.png"];

let COMICS = document.querySelector("#imgCOMICS");
let MINI = document.querySelector("#imgMINI");
let OTHER = document.querySelector("#imgOTHER");
let COLLECTION = document.querySelector("#imgCOLLECTION");

function Anim(frames) {
	COMICS.src=coverCOMICS[frames];
	MINI.src=coverMINI[frames];
	OTHER.src=coverOTHER[frames];
	COLLECTION.src=coverCOLLECTION[frames];
}

document.addEventListener("DOMContentLoaded", function() {
	let anim1 = setInterval(Anim,1000,0);
	let anim2 = setInterval(Anim,2000,1);
	let anim3 = setInterval(Anim,3000,2);
	let anim4 = setInterval(Anim,4000,3);
  });