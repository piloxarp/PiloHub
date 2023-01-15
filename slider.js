var Counts = document.querySelector("#number");
Collection_type = ["Author", "Story", "Character"];
Label_name = ["Nick","First trip"];
Author = ["Picturd","Green"];
Cover = ["https://lh3.google.com/u/0/d/10IUh2GRY0EXRyoS3NgooaHxOOoKdPoZu=w1215-h966-iv1"
,"https://lh3.google.com/u/0/d/1AkplHpnK3v1D-jdIOnvB_c1cbSrUOthU=w1885-h936-iv1"];
List = [
    // Collection 1
    {label: "Label 1", cover:"https://lh3.google.com/u/0/d/10IUh2GRY0EXRyoS3NgooaHxOOoKdPoZu=w1215-h966-iv1", link:"index.html"},
    {label:"Label 2", cover:"#", link:"#"}
    // Collection 2
];

let btnLeft = document.querySelectorAll(".btnC")[1]; // btn left -1
let btnRight = document.querySelectorAll(".btnC")[2]; // btn right +1
let TextC_t = document.querySelector("nav.textC h3"); // text Collection (h3)
let TextL_n = document.querySelector("nav.textC h1"); // text Header (h1)
let TextA = document.querySelector("nav.textC h2"); // text Author (h2)
let TextCover = document.querySelector("div.containerLeft img"); // Left Cover

function ListItem(a,b,c) {
/*
<a target="_blank" href="#" class="listCItem">
<div class="tooltip"><span class="tooltiptext">
<img src="#"></span><span class="iconify" data-icon="material-symbols:image-search"></span></div>
<p id="listLabel">Error</p></div></a>
*/
let link = document.createElement('a');
link.target = "_blank";
link.href = List[c].link;
link.className = "listCItem";
let div = document.createElement('div');
div.className = "tooltip";
let span = document.createElement('span');
span.className = "tooltiptext";
let img = document.createElement('img');
img.src = List[b].cover;
let icon = document.createElement('span');
icon.className = "iconify";
icon.setAttribute("data-icon","material-symbols:image-search");
let p = document.createElement('p');
p.id = "listlabel";
p.innerHTML = List[a].label;
let list = document.querySelector('.listC');
link.append(p);
span.prepend(img);
div.append(icon)
div.prepend(span);
link.prepend(div);
list.prepend(link);


}

function ListItemDelete() {
    let list = document.querySelectorAll('.listCItem');
    for (let i = 0; i < list.length; i++) {
        list[i].remove();
      }
}

function Slider() {
    let Items = Counts.innerHTML;
    if (Items === "1") {
        TextCover.src = Cover[0];
        TextC_t.innerHTML = `Collection: ${Collection_type[0]}`;
        TextL_n.innerHTML = Label_name[0];
        TextA.innerHTML = `Author: ${Author[0]}`;
        // List 🠗
        ListItemDelete();
        ListItem(0,0,0);
        
    } 
    if (Items === "2") {
        TextCover.src = Cover[1];
        TextC_t.innerHTML = `Collection: ${Collection_type[0]}`;
        TextL_n.innerHTML = Label_name[1];
        TextA.innerHTML = `Author: ${Author[1]}`;      
    } 
}

function RightClick() {Counts.innerHTML++; Slider();}

function LeftClick() { Counts.innerHTML--; Slider();}




document.addEventListener("DOMContentLoaded", function() {
    Slider();
  });