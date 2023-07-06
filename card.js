const coverComics = ["covers moon/003.jpg","covers moon/028.jpg","covers moon/088.jpg","covers moon/176.jpg"];
const coverMini = ["covers miniComics/grusha1.png","covers miniComics/nick1.png","covers miniComics/rona1.png","covers miniComics/Venti1.png"];
const coverCollection = ["covers collection/BBC pack/1waifu_interview.png","covers collection/Gelatomusume/Makima BBC1.png","covers collection/BBC pack/Pussy free senpai.png","covers collection/Gelatomusume/Wife Bathroom NTR1.png"];
const coverVideos = ["covers videos/Yennefer - BLACKED. BBC HMV _ PMV [The Witcher]_upscayl_8x_realesrgan-x4plus.png","covers videos/no-problems-hmv-pmv-with-link-9s-and-cloud_1080p_upscayl_8x_realesrgan-x4plus-anime.png","covers videos/Makima - BLACKED - Chainsaw Man. [Artist_ _mamimi _ _violetva]_upscayl_8x_realesrgan-x4plus-min.png","covers videos/180792a69e739e38ea54629a00c5b903_upscayl_8x_realesrgan-x4plus-anime.png"];

const imgComics = document.querySelector("#imgCOMICS");
const imgMini = document.querySelector("#imgMINI");
const imgCollection = document.querySelector("#imgCOLLECTION");
const imgVideos = document.querySelector("#imgVideos");

function changeImages(frames) {
  imgComics.src = coverComics[frames];
  imgMini.src = coverMini[frames];
  imgCollection.src = coverCollection[frames];
  imgVideos.src = coverVideos[frames];
}


document.addEventListener("DOMContentLoaded", function() {
  setInterval(() => {
    changeImages(0);
  }, 1000);
  setInterval(() => {
    changeImages(1);
  }, 2000);
  setInterval(() => {
    changeImages(2);
  }, 3000);
  setInterval(() => {
    changeImages(3);
  }, 4000);
});