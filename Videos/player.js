function Video(x) {
	let iframe = document.createElement("iframe");
	let nameToFind = x;
  const result = ListVideos.findIndex(subArray => subArray.findIndex(obj => obj.name === nameToFind) !== -1); // result
	if (result !== -1) { 
   iframe.src = ListVideos[result][0].link; 
  	} else {console.log(`${nameToFind} not found in ListVideos`);}
  	iframe.width = "1045";
  	iframe.height = "560";
  	iframe.allow = "fullscreen";
  	let container = document.querySelector(".container-vids");
  	container.prepend(iframe);
}

function Infograph(x) {
  let nameToFind = x;
  const result = ListVideos.findIndex(subArray => subArray.findIndex(obj => obj.name === nameToFind) !== -1); // result
  if (result !== -1) {
    let nav = document.querySelector("#tag-author");
    let p = document.querySelector(".info_vid > p");
    let h2 = document.querySelector(".info_vid > h2");
    if (ListVideos[result][0].author == undefined) {
      nav.remove();
    } else {
      nav.innerHTML = ListVideos[result][0].author;
    }
    
    p.innerHTML = ListVideos[result][0].duration;
    h2.innerHTML = ListVideos[result][0].name.replace(/_/g, " ");
    document.querySelector("#download_btn_vid").href = ListVideos[result][0].link.replace("file/d/","u/1/uc?id=").replace("/preview","&export=download");
  }

}

function Other(y,x) {
    let nameToFind = x;
  const result = ListVideos.findIndex(subArray => subArray.findIndex(obj => obj.name === nameToFind) !== -1); // result
  if (result !== -1) {
    let a = document.createElement("a");
    a.className = "video-card";
    a.href = "Player.html?" + ListVideos[y][0].name;
    let div = document.createElement("div");
    div.className = "vc-img";
    let p = document.createElement("p");
    p.innerHTML = ListVideos[y][0].duration;
    let img = document.createElement("img");
    img.src = ListVideos[y][0].banner;
    let div2 = document.createElement("div");
    div2.className = "vc-des";
    let h2 = document.createElement("h2");
    h2.innerHTML = ListVideos[y][0].name.replace(/_/g, " ");
    let nav = document.createElement("nav");
    nav.className = "vc-tags";
    nav.setAttribute("id", "tag-author");
    nav.innerHTML = ListVideos[y][0].author;
    div2.append(nav);    
    div.prepend(p);
    div.append(img);
    div2.prepend(h2);
    a.prepend(div);
    a.append(div2);
    let cardPlace = document.querySelector(".container-other");
    cardPlace.append(a);
    let container = document.querySelector(".container-vids");
    container.append(cardPlace)
  }

}

var result=location.search.substring(1);
document.querySelector("title").innerHTML = result.replace(/_/g, " ");;

Video(result);
Infograph(result);

const randomIndexes = [];

while (randomIndexes.length < 4) {
  const randomIndex = Math.floor(Math.random() * ListVideos.length);

  if (!randomIndexes.includes(randomIndex)) {
    randomIndexes.push(randomIndex);
  }
}

randomIndexes.forEach((index) => {
  Other(index,result);
});


