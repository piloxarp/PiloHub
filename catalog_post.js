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

// Start Stats

const countNames = (arr) => {
  let count = 0;
  arr.forEach((item) => {
    if (item.name !== "") {
      const names = item.name.split("&");
      count += names.length;
    }
  });
  return count;
};

function countElementsWithParentheses(arr) {
  let countWithParentheses = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes("(") && arr[i].name.includes(")")) {
      countWithParentheses++;
    }
  }

  return countWithParentheses;
}


const AnswerBBC = countNames(BBC) - countElementsWithParentheses(BBC);
const AnswerGelatomusume = countNames(Gelatomusume) - countElementsWithParentheses(Gelatomusume);
const AnswerPicturd = countNames(Picturd) - countElementsWithParentheses(Picturd);
const AnswerOther = countNames(Other) - countElementsWithParentheses(Other);
const AnswerFiveT = countNames(FiveT) - countElementsWithParentheses(FiveT);


// End Stats




if (localStorage.tag == null) {
    localStorage.setItem("tag","&");
}

function Preview(y) {
let nav = document.createElement("nav");
  nav.className = "select_bigTag";
  let elem_name = document.createElement("h2");
  let elem_inf = document.createElement("nav");
  elem_inf.className = "preview_child_inf";
  let inf_comics = document.createElement("h3");
  let inf_soloArts = document.createElement("h3");
    elem_name.innerHTML = y;
    nav.id = "TagIdPreview_" + y;
    inf_soloArts.innerHTML = "Solo arts: " + window[y].reduce((total, item) => total + item.count, 0);
    inf_comics.innerHTML = "Comics: " + eval("Answer" + y);
  let preview_container = document.querySelector(".preview_first");
  preview_container.append(nav);nav.append(elem_name);nav.append(elem_inf);elem_inf.append(inf_comics);elem_inf.append(inf_soloArts);
}
Preview("BBC");
Preview("Gelatomusume");
Preview("Picturd");
Preview("Other");
Preview("FiveT");


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
}

// Выбираем все div с классом tag_container
var containers = document.querySelectorAll('.tag_container');

// Проходим по каждому div
containers.forEach(function(container) {
  // Выбираем все кнопки с классом select_Tag внутри текущего div
  var buttons = container.querySelectorAll('.select_Tag');

  // Проходим по каждой кнопке
  buttons.forEach(function(button) {
    // Обработка события клика на кнопке
    button.addEventListener('click', function() {
      // Добавляем или удаляем класс select_Tag_Active
      button.classList.toggle('select_Tag_Active');
      if (button.id === "TagID_BBC") {
        document.querySelector("#TagIdPreview_BBC").classList.toggle("Preveiw_child_Active");
      } else if (button.id === "TagID_Gelatomusume") {
        document.querySelector("#TagIdPreview_Gelatomusume").classList.toggle("Preveiw_child_Active");
      } else if (button.id === "TagID_Picturd") {
        document.querySelector("#TagIdPreview_Picturd").classList.toggle("Preveiw_child_Active");
      } else if (button.id === "TagID_Other") {
        document.querySelector("#TagIdPreview_Other").classList.toggle("Preveiw_child_Active");
      } else if (button.id === "TagID_FiveT") {
        document.querySelector("#TagIdPreview_FiveT").classList.toggle("Preveiw_child_Active");
      }

      // Сохраняем состояние кнопки в localStorage
      var buttonId = button.id;
      var isActive = button.classList.contains('select_Tag_Active');
      localStorage.setItem(buttonId, isActive);
    });

    // Восстанавливаем состояние кнопки из localStorage при загрузке страницы
    var buttonId = button.id;
    var isActive = localStorage.getItem(buttonId);
    if (isActive === 'true') {
      button.classList.add('select_Tag_Active');
    }
  });

  // Восстанавливаем состояние превью из localStorage при загрузке страницы
  var isBBCActive = localStorage.getItem('TagID_BBC') === 'true';
  var isGelatomusumeActive = localStorage.getItem('TagID_Gelatomusume') === 'true';
  var isPicturdActive = localStorage.getItem('TagID_Picturd') === 'true';
  var isOtherActive = localStorage.getItem('TagID_Other') === 'true';
  var isFiveTActive = localStorage.getItem('TagID_FiveT') === 'true';
  document.querySelector("#TagIdPreview_BBC").classList.toggle("Preveiw_child_Active", isBBCActive);
  document.querySelector("#TagIdPreview_Gelatomusume").classList.toggle("Preveiw_child_Active", isGelatomusumeActive);
  document.querySelector("#TagIdPreview_Picturd").classList.toggle("Preveiw_child_Active", isPicturdActive);
  document.querySelector("#TagIdPreview_Other").classList.toggle("Preveiw_child_Active", isOtherActive);
  document.querySelector("#TagIdPreview_FiveT").classList.toggle("Preveiw_child_Active", isFiveTActive);
});


function Clear() {
    localStorage.tag = "";
    localStorage.TagID_BBC = "false";
    localStorage.TagID_Gelatomusume = "false";
    localStorage.TagID_Picturd = "false";
    localStorage.TagID_Other = "false";
    localStorage.TagID_FiveT = "false";
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

    /*const childDivs = container.getElementsByTagName('div');
    for (let i = 1; i < childDivs.length; i++) {
    container.removeChild(childDivs[i]);} */
}

function Uploading(Comics,Solo,tag) {
    if (Solo == 1) {
        for (var i = window["Other" + "_" + tag].length - 1; i >= 0; i--) {
            post(i,window["Other" + "_" + tag]);
        }       
    }
    if (Comics == 1 && tag == "BBC") {
        // stick on top
        MultiPost(Black_Breeding_initiative);
        MultiPost(Blacked_underwear);
        MultiPost(A_Mothers_Apology);
        MultiPost(Her_boyfriends_hobbies);
        MultiPost(Bard);
        MultiPost(Good_friends_of_Uraki);
        MultiPost(The_BBC_addicted_wife_KISARAGI_AYAKO);
        MultiPost(TracerxSombra);
        MultiPost(Xingqiu_and_likes);
        MultiPost(Medical_checkup);
        MultiPost(Makima_and_pet);
        MultiPost(Defeating_Traveler_and_Wendy);
        MultiPost(BLACKED_Person);
        MultiPost(Its_just_his_dick_is_so_much_better);
        MultiPost(Kirito_Sissy);
        MultiPost(Elf);
        MultiPost(Mother_Training_Daughter);
        MultiPost(After);
        MultiPost(Stretch);
        MultiPost(The_new_Black_Worldorder_Teachers);
        MultiPost(Mother_assisted_femboy_test);
        MultiPost(Waitress_for_bbc);
        MultiPost(Inko_and_BBC);
        MultiPost(Deku_kun_and_Ochaco_with_master);
        MultiPost(Waifu_Interview); 
        MultiPost(A_new_side_of_Uraraka);
    } else if (Comics == 1 && tag == "Gelatomusume") {
        // stick on top
        MultiPost(Mommy_Val_cages_Millie);
        MultiPost(Ren);
        MultiPost(Quinn_Leg_Day);
        MultiPost(Princess_Peach_NTR);
        MultiPost(Millie_being_pounded);
        MultiPost(Izuku_and_Inko_Midoriya_Oyakodon);
        MultiPost(Alexs_Social_Media_Hijinks);
        MultiPost(Suzu_Nakano_Doggy);
        MultiPost(Valeria_Disciplining_Millie);
        MultiPost(Mariya_Shidou);
        MultiPost(Gwen_Stacy);
        MultiPost(Suzu_Nakano_Handjob);
        MultiPost(Suzu_Nakano);
        MultiPost(Val_and_Millie_Edging);
        MultiPost(Astolfo_Reverse_Bunnysuit);
        MultiPost(The_Beloved_Heros_Secret);
        MultiPost(Succubus);
        MultiPost(Workout);
        MultiPost(Starfire_goes_Trick_or_Treating);
        MultiPost(Makima_BBC);
        MultiPost(Lanas_Mom_Breeding_Cow);
        MultiPost(Ann_Possible_NTR);
        MultiPost(Valeria_and_Millie);
        MultiPost(Quinn_and_Friends_Reuniting);
        MultiPost(Alex_and_Millie);
        MultiPost(Wife_Bathroom_NTR);
        MultiPost(Sissy_Training);
        MultiPost(Pregnant_Mommy);
        MultiPost(Peeking);
        MultiPost(Mom_NTR);
        MultiPost(Full_nelson);
        MultiPost(First_time);
        MultiPost(BBC_Cock_Worship);
    } else if (Comics == 1 && tag == "Picturd") {
        // stick on top
        MultiPost(Isui);
        MultiPost(Cody);
        MultiPost(Venti);
        MultiPost(Midna);
        MultiPost(LolaxBugs);
        MultiPost(Jade);
        MultiPost(Zozo);
        MultiPost(Mary);
        MultiPost(Link_and_Isabelle);
        MultiPost(Tony_and_drink);
        MultiPost(TailsxAmy);
        MultiPost(Tails_Bimbo);
        MultiPost(Orendi);
        MultiPost(Nido_Queen);
        MultiPost(Grusha);
        MultiPost(ZOO);
        MultiPost(Rona);
        MultiPost(Nick);
        MultiPost(Fonny_bat);
        MultiPost(Ren_and_sisters);
        MultiPost(Tony_Gloryhole);
        MultiPost(Bowser);
        MultiPost(Koda);        
    } else if (Comics == 1 && tag == "Other") {
        // stick on top
        MultiPost(Sunny_Jerks_You_Off);
        MultiPost(Suddenly_Choking_Bunny_Gf);
        MultiPost(Astolfo_matemi);
        MultiPost(Cuck_Lessons);
        MultiPost(Will_you_really_cover_my_entire_bill);
        MultiPost(A_manga_about_brainwashing_a_brother_and_sister);
        MultiPost(Elf);
        MultiPost(Cuckold_Relationship);
        MultiPost(First_trip);
        MultiPost(Rimuru_and_Gobta);
        MultiPost(Lynn_Defeated_and_Trained);
        MultiPost(James);
        MultiPost(Yorha_9S);
    } else if (Comics == 1 && tag == "FiveT") {
        // stick on top
        MultiPost(Defeated_Makima);
        MultiPost(Prostitution_Devil_Makima);
    }
    

};

