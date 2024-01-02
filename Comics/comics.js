
function MultiPost(page) {
    navFlex = document.createElement("nav");
    navFlex.className = "mangaFlex";
	container = document.querySelector(".container");container.append(navFlex);
	for (var x = page.length - 1; x >= 0; x--) {
    let div = document.createElement("div");
    div.className = "paper";
    div.style.id = page[x].name;
    let a = document.createElement("a");
    a.href = page[x].banner;
    let img = document.createElement("img");
    img.src = page[x].banner;
    img.loading = "lazy";
	navFlex.prepend(div);div.append(a);a.append(img);
    }

}

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const theme = urlParams.get('theme');

document.querySelector("title").innerHTML = name.replace(/_/g, " ");
MultiPost(window[name]);

if (theme == "bbc") {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../Collection/bbcEdition.css";
    document.querySelector("head").prepend(link);
    document.querySelector("body").style = "background: url(../Collection/Multimedia/bbcBG.png) #151515 repeat;";
}

document.addEventListener("DOMContentLoaded", function() {
    const images = [...document.querySelectorAll("img")];
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
            
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelector("#pagecount").innerHTML = `${images.indexOf(entry.target) + 1} / ${images.length}`
        }
      });
    }, options);
  
    images.forEach(image => {
      if (!observer.takeRecords().some(record => record.target === image)) {
        observer.observe(image);
  
      }
    });
  });
  
  function fixPage() {
      const images = [...document.querySelectorAll("img")];
          document.querySelector("#pagecount").innerHTML = `1 / ${images.length}`
  }
  setTimeout(fixPage, 10)