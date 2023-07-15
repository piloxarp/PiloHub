// pages

let page1 = List.slice(0,21);
let page2 = List.slice(21,42);
let page3 = List.slice(42,63);
let page4 = List.slice(63,84);
let page5 = List.slice(84,105);

let max_pages = 5;

function GenPagesBTN() {
    let l = max_pages + 1;
    for (var i = 0; i < l; i++) {
         let div = document.createElement("div");
        div.classList = "pageBtn t_primary";
        div.setAttribute("onclick",`PageStorage(${i})`);
        div.innerHTML = i;
        document.querySelector(".bottom-container").append(div);       
    }
    document.querySelectorAll(".pageBtn")[0].remove();

}

GenPagesBTN();

// functions

    function Link(y) {
        location.hrey='comics.html?'+y;
    }

function card(x,page) {
    let a = document.createElement("a");
    a.classList = "card";
    a.href = "Comics/comics.html?"+ "name=" + page[x].name + "&" + "theme=" + page[x].theme;
    if (localStorage.NoImage_Mcomics == "1") {
        a.style = "background-image: linear-gradient(to top, rgb(31, 28, 44), rgb(146, 141, 171));";
    } else if (localStorage.NoImage_Mcomics == "0" || localStorage.NoImage_Mcomics == null) {
        a.style = `background-image:url(${page[x].banner})`;
    }
    
    if (page[x].positionBanner == 1) {
        a.classList.add("cardLeft");
    } else if (page[x].positionBanner == 2) {
        aclassList.add("cardRight");
    } else if (page[x].positionBanner == 3) {
        aclassList.add("cardCenter");
    } 
    let nav = document.createElement("nav");
    let div2 = document.createElement("div");
    div2.style = "gap:5px; display: flex;flex-direction: column; align-items: flex-start;width:100%;}"
    let h2 = document.createElement("h2");
    if (page[x].machineTS == true) {
        h2.innerHTML = "Machine Translate"
        h2.className = "tag_RED"
    }
    if (page[x].theme == "bbc") {
       let img = document.createElement("img");
       img.style = "height:32px;"
       img.src = "icons/Q ICON/favicon-32x32.png";
       nav.append(img);
    }
    
    let h1 = document.createElement("h1");
    h1.innerHTML = page[x].name.replace(/_/g, " ");
    let p = document.createElement("p");
    p.innerHTML = page[x].pages + " " + "pages"; 
    let cardPlace = document.querySelector(".container-cards");
    nav.append(div2);
    div2.prepend(h1);
    div2.append(p);
    div2.append(h2);
    a.append(nav);
    cardPlace.append(a);
    

var cards = document.querySelectorAll('.card');
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', function(e) {
        var nav = e.currentTarget.querySelector('nav');
        nav.style = "padding:15px;backdrop-filter: blur(12px);border-radius: 25px 25px 0 0;";
    });

    cards[i].addEventListener('mouseout', function(e) {
        var nav = e.currentTarget.querySelector('nav');
        nav.style = "";
    });
}
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
          if (localStorage.SizeCard !== null) {
        SizeControl(localStorage.SizeCard);
    }
}

function PageStorage(x) {
    localStorage.setItem("page_Mcomics",x);
    let f = "page" + localStorage.page_Mcomics;
    Page(eval(f));
    document.querySelector("title").innerHTML = localStorage.page_Mcomics + " " + "|" + " " + "MINI-COMICS"; 
}

function NoImage(x) {
      if (x == 1) {
    document.querySelector(".NoImage").setAttribute("id","activeSVG");
    document.querySelector(".NoImage").setAttribute("onclick","NoImage(0)");
  } else if (x == 0 ) {
    document.querySelector(".NoImage").removeAttribute("id");
    document.querySelector(".NoImage").setAttribute("onclick","NoImage(1)");
  }

    if (localStorage.NoImage_Mcomics == "0" || localStorage.NoImage_Mcomics == null ) {
        localStorage.setItem("NoImage_Mcomics",1);
    } else if (localStorage.NoImage_Mcomics == "1") {
        localStorage.setItem("NoImage_Mcomics",0);
    } 
    let f = "page" + localStorage.page_Mcomics;
    Page(eval(f));
}

function SizeControl(size) {
    console.log("name: " + size + " " + "type: " + typeof size);
    let card = document.querySelectorAll(".card");
    let word = document.querySelectorAll(".SizeControlCenter > .group > button");
    if (size == "s") {
        for (var i = card.length - 1; i >= 0; i--) {
            card[i].setAttribute("id","Size_S");
        }
        for (var i = word.length - 1; i >= 0; i--) {
            word[i].style = "color:var(--white);"
        }
        word[0].style = "color:var(--primary);"
        localStorage.setItem("SizeCard","s");

    } else if (size == "m") {
        for (var i = card.length - 1; i >= 0; i--) {
            card[i].setAttribute("id","Size_M");
        }
        for (var i = word.length - 1; i >= 0; i--) {
            word[i].style = "color:var(--white);"
        }        
        word[1].style = "color:var(--primary);"  
        localStorage.setItem("SizeCard","m");

    } else if (size == "l") {
        for (var i = card.length - 1; i >= 0; i--) {
            card[i].setAttribute("id","Size_L");
        }
        for (var i = word.length - 1; i >= 0; i--) {
            word[i].style = "color:var(--white);"
        }        
        word[2].style = "color:var(--primary);"
        localStorage.setItem("SizeCard","l");

    } else {console.log("Not Size")}
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.page_Mcomics == null) {
        localStorage.setItem("page_Mcomics",1);
        let f = "page" + localStorage.page_Mcomics
        Page(eval(f));
        let num = Number(localStorage.page_Mcomics);
        buttonsPages[num - 1].click();           
        document.querySelector("title").innerHTML = localStorage.page_Mcomics + " " + "|" + " " + "MINI-COMICS";   
    } else {
         let f = "page" + localStorage.page_Mcomics
        Page(eval(f));  
        let num = Number(localStorage.page_Mcomics);
        buttonsPages[num - 1].click();  
        document.querySelector("title").innerHTML = localStorage.page_Mcomics + " " + "|" + " " + "MINI-COMICS";   
    }
    if (localStorage.NoImage_Mcomics == "1") {
        document.querySelector(".NoImage").setAttribute("id","activeSVG");
        document.querySelector(".NoImage").setAttribute("onclick","NoImage(0)");
    }
    if (localStorage.SizeCard !== null) {
        SizeControl(localStorage.SizeCard);
    }
});



    let count = List.length;
    let elemCount = document.querySelector("#count");
    elemCount.innerHTML = count;



