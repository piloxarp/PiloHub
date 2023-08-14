
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
    nav = document.createElement("nav");
    nav.className = "description";
    h2 = document.createElement("h2");
    h2.innerHTML = page[x].name.replace(/_/g, " ");
    p = document.createElement("p");
    p.innerHTML = (x+1) + "/" + page.length;
	navFlex.prepend(div);div.append(a);a.append(img);div.append(nav);nav.append(h2);nav.append(p);
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


/*
if (result == "Deku_kun_and_Ochaco_with_master" || "Waifu_Interview" || "A_new_side_of_Uraraka" || "Inko_and_BBC" 
    || "Waitress_for_bbc" || "Mother_assisted_femboy_test" || "The_new_Black_Worldorder_Teachers" || "Cuckold_Relationship" 
    || "Stretch" || "After" || "Mother_Training_Daughter" || "Elf" || "Kirito_Sissy" || "Its_just_his_dick_is_so_much_better" 
    || "BLACKED_Person")  {
    
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../Collection/bbcEdition.css";
    document.querySelector("head").prepend(link);
    document.querySelector("body").style = "background: url(../Collection/bbcBG.png) #151515 repeat;";
} */