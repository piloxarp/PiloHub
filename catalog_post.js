
function post(x,page) {
    let div = document.createElement("div");
    div.className = "paper";
    let a = document.createElement("a");
    a.href = page[x].banner;
    let img = document.createElement("img");
    img.src = page[x].banner;
    img.loading = "lazy";
    img.alt = page[x].name;
    nav = document.createElement("nav");
    nav.className = "description";
    h2 = document.createElement("h2");
    h2.innerHTML = page[x].name;
    div.append(a);a.append(img);div.append(nav);nav.append(h2);
    container = document.querySelector(".container");container.append(div);
}

function MultiPost(page) {
    divFlex = document.createElement("div");
    divFlex.className = "mangaFlex";
    container = document.querySelector(".container");container.append(divFlex);
    for (var x = page.length - 1; x >= 0; x--) {
    let div = document.createElement("div2");
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
    h2.innerHTML = page[x].name;
    p = document.createElement("p");
    p.innerHTML = (x+1) + "/" + page.length;
    divFlex.prepend(div);div.append(a);a.append(img);div.append(nav);nav.append(h2);nav.append(p);
    }

}

// Generate BTN

const tagValues = [...new Set(List.map(item => item.tag))].filter(tag => tag !== undefined && tag.trim() !== "");
const undefinedTags = List.filter(item => item.tag === "undefined");

for (let i = 0; i < tagValues.length; i++) {
    let btn = document.createElement("button");
    btn.className = "select_Tag";
    btn.setAttribute("onclick",`Tag('${tagValues[i]}')`);
    btn.innerHTML = tagValues[i];
    document.querySelector("#TagsNav").append(btn);
}

if (localStorage.tag == null) {
    localStorage.setItem("tag","&");
}

// Generate BTN


function Tag(y) {
    // Tag Add
  if (localStorage.tag) {
    let tagsArray = localStorage.tag.split('&'); // Split the string into an array
    if (tagsArray.includes(y)) {
      tagsArray = tagsArray.filter(tag => tag !== y); // Remove the specific value from the array
    } else {
      tagsArray.unshift(y); // Add the specific value to the beginning of the array
    }

    localStorage.tag = '&' + tagsArray.join('&'); // Convert the array back to a string and add '&' at the beginning
  } else {
    localStorage.tag = '&' + y; // Set the value directly if localStorage.tag doesn't exist
  }
  document.querySelector(".preview_first").innerHTML = "";
  let tagsArrayff = localStorage.tag.split('&'); // Split the string into an array
  const array2 = tagsArrayff.filter(element => element !== "");
  for (let i = 0; i < array2.length; i++) {
    let p = document.createElement("p"); // Create a new <p> element
    p.textContent = `${i}:  ${array2[i]}`; // Set the text content of the <p> element
    document.querySelector(".preview_first").append(p); // Append the <p> element to the .preview_first element
  }

}

function Clear() {
    localStorage.tag = "";
    localStorage.setItem("Select_Theme", 0);
    localStorage.setItem("Catalog_Type_Solo", 0);
    localStorage.setItem("Catalog_Type_Comics", 0);
    location.href = 'Catalog.html';
}



if (localStorage.Select_Theme == "0" || localStorage.Select_Theme == null) {
    document.querySelectorAll("input")[2].setAttribute("checked","checked");
    document.querySelector(".preview_elem_theme").innerHTML = "Default"
    document.querySelector(".preview_elem_theme").classList.add("Theme_Preview_Default");
    document.querySelector(".preview_elem_theme").classList.remove("Theme_Preview_BBC");
    document.querySelector("body").classList.remove("Catalog_Theme_BBC");
} else if (localStorage.Select_Theme == "1") {
    document.querySelectorAll("input")[3].setAttribute("checked","checked");
    document.querySelector(".preview_elem_theme").innerHTML = "BBC"
    document.querySelector(".preview_elem_theme").classList.add("Theme_Preview_BBC");
    document.querySelector(".preview_elem_theme").classList.remove("Theme_Preview_Default");
    document.querySelector("body").classList.add("Catalog_Theme_BBC");
}

document.getElementById('Theme_btn_Default').addEventListener('click', function() {
    document.querySelector(".preview_elem_theme").innerHTML = "Default"
    document.querySelector(".preview_elem_theme").classList.add("Theme_Preview_Default");
    document.querySelector(".preview_elem_theme").classList.remove("Theme_Preview_BBC");
    document.querySelector("body").classList.remove("Catalog_Theme_BBC");
});

document.getElementById('Theme_btn_BBC').addEventListener('click', function() {
    document.querySelector(".preview_elem_theme").innerHTML = "BBC"
    document.querySelector(".preview_elem_theme").classList.add("Theme_Preview_BBC");
    document.querySelector(".preview_elem_theme").classList.remove("Theme_Preview_Default");
    document.querySelector("body").classList.add("Catalog_Theme_BBC");
});

let ComicsBTN = document.querySelector("#Comics");
let SoloBTN = document.querySelector("#Solo");


function Check() {
    if (ComicsBTN.checked && SoloBTN.checked) {
        console.log("ComicsBTN and SoloBTN")
        localStorage.setItem("Catalog_Type_Solo",1);
        localStorage.setItem("Catalog_Type_Comics",1);
        //GenerateBTN.setAttribute("onclick","Uploading(1,1)");
    } else if (ComicsBTN.checked) {
        console.log("ComicsBTN")
        localStorage.setItem("Catalog_Type_Solo",0);
        localStorage.setItem("Catalog_Type_Comics",1);        
        //GenerateBTN.setAttribute("onclick","Uploading(1,0)");
    } else if (SoloBTN.checked) {
        console.log("SoloBTN")
        localStorage.setItem("Catalog_Type_Solo",1);
        localStorage.setItem("Catalog_Type_Comics",0);        
        //GenerateBTN.setAttribute("onclick","Uploading(0,1)");
    } else {
        localStorage.setItem("Catalog_Type_Solo",0);
        localStorage.setItem("Catalog_Type_Comics",0);         
    }

}

if (localStorage.Catalog_Type_Solo == null) {
    localStorage.setItem("Catalog_Type_Solo",0);
}

if (localStorage.Catalog_Type_Comics == null) {
    localStorage.setItem("Catalog_Type_Comics",0);
}



function Type_Content(name,status) {
    if (name === "Solo" && status === 0) {
        localStorage.setItem("Catalog_Type_Solo",1);
        document.querySelector("#Solo").setAttribute("onclick","Type_Content('Solo',1)");
    } else if (name === "Solo" && status === 1) {
        localStorage.setItem("Catalog_Type_Solo",0);
        document.querySelector("#Solo").setAttribute("onclick","Type_Content('Solo',0)");        
    }

    if (name === "Comics" && status === 0) {
        localStorage.setItem("Catalog_Type_Comics",1);
        document.querySelector("#Comics").setAttribute("onclick","Type_Content('Comics',1)");
    } else if (name === "Comics" && status === 1) {
        localStorage.setItem("Catalog_Type_Comics",0);
        document.querySelector("#Comics").setAttribute("onclick","Type_Content('Comics',0)");        
    }    

}

function Submit() {
    if (localStorage.Catalog_Type_Solo == 1 || localStorage.Catalog_Type_Comics == 1) {
    // Tag
  if (localStorage.tag) {
    let tagsArray = localStorage.tag.split('&'); // Split the string into an array
    let uniqueSet = new Set(tagsArray); // Convert array to Set to remove duplicates
    let uniqueArray = [...uniqueSet]; // Convert Set back to array
    let uniqueString = uniqueArray.join('&'); // Join the unique tags with '&'
    console.log(uniqueString);
    location.href = 'Catalog.html?' + "tag=" + uniqueString;
    localStorage.tag = uniqueString; // Update localStorage.tag with the unique string
  } else {
    localStorage.tag = "";
    location.href = 'Catalog.html';
  }
  // Theme
    var rad=document.getElementsByName('Theme');
  for (var i=0;i<rad.length; i++) {
    if (rad[i].checked) {
      localStorage.setItem("Select_Theme", i);
    }}
} else if (localStorage.Catalog_Type_Solo == 0 && localStorage.Catalog_Type_Comics == 0) {
    document.querySelector("#Type_Detector").innerHTML = "Type: You need to select at least one"
    document.querySelector("#Type_Detector").style = "color:#ff6c6c";
}}

if (window.location.href.includes("&")) {
    document.querySelector(".select_container").style = "display:none";
      const tags = window.location.href.split('&');
      tags.shift();
      console.log(tags);
      for (var i = 0; i < tags.length; i++) {
        console.log(tags[i]);
        if (localStorage.Catalog_Type_Solo == 1 && localStorage.Catalog_Type_Comics == 1) {
            Uploading(1,1,tags[i]);
        } else if (localStorage.Catalog_Type_Solo == 1 && localStorage.Catalog_Type_Comics == 0) {
            Uploading(0,1,tags[i]);
        } else if (localStorage.Catalog_Type_Solo == 0 && localStorage.Catalog_Type_Comics == 1) {
            Uploading(1,0,tags[i]);
        }
          
      }

} else {
    document.querySelector(".select_container").style = "display:flex";
}

function Uploading(Comics,Solo,tagFind) {
    if (Solo == 1) {
        for (var i = window["Other" + "_" + tagFind].length - 1; i >= 0; i--) {
            post(i,window["Other" + "_" + tagFind]);
        }       
    }
    if (Comics == 1) {
        let comicsArray = List.filter(item => item.tag === tagFind);
        for (var i = comicsArray.length - 1; i >= 0; i--) {
            MultiPost(eval(comicsArray[i].name));
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    localStorage.tag = "";
    localStorage.setItem("Select_Theme", 0);
    localStorage.setItem("Catalog_Type_Solo", 0);
    localStorage.setItem("Catalog_Type_Comics", 0);
  });