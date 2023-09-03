

// pages

let page1 = ListVideos.slice(0,21);
let page2 = ListVideos.slice(21,42);
let page3 = ListVideos.slice(42,63);
let page4 = ListVideos.slice(63,84);
let max_pages = 4;

let max_pages_tex = max_pages + 1;
for (var i = 0; i < max_pages_tex; i++) {
     let div = document.createElement("div");
    div.classList = "pageBtn t_primary";
    div.setAttribute("onclick",`PageStorage(${max_pages_tex - i})`);
    div.innerHTML = i;
    document.querySelector(".bottom-container").append(div);       
}
document.querySelectorAll(".pageBtn")[0].remove();

// functions

    function Link(y) {
        location.hrey='Player.html?'+y;
    }

function card(x,page) {
    let a = document.createElement("a");
    a.className = "video-card";
    a.href = "Player.html?" + page[x][0].name;
    let div = document.createElement("div");
    div.className = "vc-img";
    let p = document.createElement("p");
    p.innerHTML = page[x][0].duration;
    let img = document.createElement("img");
    img.src = page[x][0].banner;
    let div2 = document.createElement("div");
    div2.className = "vc-des";
    let h2 = document.createElement("h2");
    h2.innerHTML = page[x][0].name.replace(/_/g, " ");
    if (typeof page[x][0].author !== "undefined") {
    let nav = document.createElement("nav");
    nav.className = "vc-tags";
    nav.setAttribute("id", "tag-author");
    nav.innerHTML = page[x][0].author;
    div2.append(nav);
    div2.prepend(h2);
    } else {
        div2.append(h2);
    }

    
    div.prepend(p);
    div.append(img);
    a.prepend(div);
    a.append(div2);
    let cardPlace = document.querySelector(".container-cards");
    cardPlace.append(a);
}

const buttonsPages = document.querySelectorAll('.pageBtn');

buttonsPages.forEach(button => {
  button.addEventListener('click', function() {
    
    buttonsPages.forEach(btn => {
      btn.className = "pageBtn t_primary";
    });

    this.className = "pageBtn activeBtn";
  });
});

function Page(x) {
    document.querySelector('.container-cards').innerHTML = '';
    let l = max_pages + 1;
    for (var i = l - 1; i > 0; i--) {
        let page = "page" + i;
        if (x == eval(page)) {
            for (var k = x.length - 1; k >= 0; k--) {
                card(k,x);
            }
        }
    }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}


function PageStorage(x) {
    localStorage.setItem("page_videos",x);
    let f = "page" + localStorage.page_videos
    Page(eval(f));
    document.querySelector("title").innerHTML = (max_pages_tex - localStorage.page_videos) + " " + "|" + " " + "VIDEOS"; 
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.page_videos == null) {
        localStorage.setItem("page_videos",1);
        let f = "page" + localStorage.page_videos
        Page(eval(f)); 
        let num = max_pages_tex - Number(localStorage.page_videos);
        buttonsPages[num - 1].click();             
        document.querySelector("title").innerHTML = (max_pages_tex - localStorage.page_videos) + " " + "|" + " " + "VIDEOS";   
    } else {
         let f = "page" + localStorage.page_videos
        Page(eval(f));  
        let num = max_pages_tex - Number(localStorage.page_videos);
        buttonsPages[num - 1].click();  
        document.querySelector("title").innerHTML = (max_pages_tex - localStorage.page_videos) + " " + "|" + " " + "VIDEOS";   
    }

});

    let count = ListVideos.length;
    let elemCount = document.querySelector("#count");
    elemCount.innerHTML = count;



