let Mcomics_Card = document.querySelector(".card-Mcomics");
let BBC_Card = document.querySelector(".BBC");
let Gelatomusume_Card = document.querySelector(".Gelatomusume");
let Picturd_Card = document.querySelector(".Picturd")
let Other_Card = document.querySelector(".Other");
let Videos_Card = document.querySelector(".Videos");
let Comics_Card = document.querySelector(".Comics");
let changelogInfo_Card = document.querySelector(".changelog-info");
let FiveT_Card = document.querySelector(".FiveT");
let Hyanmaru_Card = document.querySelector(".Hyanmaru");
let YUE_C_Card = document.querySelector(".YUE_C");

	let version_container = document.querySelector(".versions");
	let numbers = ["1.0","1.1","1.2","1.3","1.4","1.5","1.6","1.7","1.8",
		"1.9","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9",
		"3.0","3.1","3.2","3.3","3.4","3.5","3.6","3.7","3.8","3.9","4.0",
		"4.1","4.2","4.3","4.4","4.5","4.6","4.7"];
	for (var i = numbers.length - 1; i >= 0; i--) {
		let button = document.createElement("button");
		button.setAttribute("onclick",`Version(${numbers[i]})`);
		button.innerHTML = numbers[i];
		version_container.append(button)
		
	}

	let version_list = document.querySelectorAll(".versions > button");
	version_list.forEach(button => {
  button.addEventListener('click', function() {
    
    version_list.forEach(btn => {
      btn.className = "";
    });

    this.className = "activeBtn";
  });
});

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = element;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

function Generate_Card(id,array,type,x,y) {
  	if (type == "solo") {
const index = array.findIndex(item => item.version === x); // find version number
if (index === -1) /* not find version */ {
  id.querySelector("h2").innerHTML = "New: " + 0;
} else /* find version*/ {
  id.querySelector("h2").innerHTML = "New: " + array[index].count;
  animateCSS(id,"fadeIn");
};  		
  	} else if (type == "chapter") {
const index = array.findIndex(item => item.version === x);
if (id.querySelectorAll("h3").length != 0) {
for (var i = id.querySelectorAll("h3").length - 1; i >= 0; i--) {
	id.querySelectorAll("h3")[i].remove();
}}	
if (index === -1) {
  id.querySelector("h2").innerHTML = "Solo: " + 0;
} else {
	let MasList = array[index].name.split("&");
	
	for (var B = MasList.length - 1; B >= 0; B--) {
	let h3 = document.createElement("h3");h3.innerHTML = MasList[B];id.querySelector("nav").append(h3);
	if (id.querySelector("h3").innerHTML == "") {id.querySelector("h3").remove();} 
	id.querySelector("h2").innerHTML = "Solo: " + array[index].count;
	animateCSS(id,"fadeIn");
}};
  	if (y == "sum") {
  		if (index === -1) {
Mcomics_Card.querySelector("h2").innerHTML = "Sum: " + 0;
} else {
	Mcomics_Card.querySelector("h2").innerHTML = "Sum: " + Mcomics_Card.querySelectorAll("h3").length;
}}}};

function Generate_ColorCard(id,type,y) {
	if (type == "chapter") {
			if (id.querySelectorAll("h3").length !== 0 || id.querySelector("h2").innerHTML !== `${y}: 0`) {
				id.style = "color: var(--primary);border-color: var(--primary);";
			} else {id.style = "";}			
	} else if (type == "solo") {
			if (id.querySelector("h2").innerHTML !== "New: 0") {
				id.style = "color: var(--primary);border-color: var(--primary);";
			} else {id.style = "";}		
	}

}

function Version(x) {
		if (x == 1.0 || x == 2.0 || x == 3.0 || x == 4.0) {
		document.querySelector("#count").innerHTML = "v." + x + ".0";
	} else {
		document.querySelector("#count").innerHTML = "v." + x;
	}

	
// Generate cards
Generate_Card(Other_Card,Other,"chapter",x);
Generate_Card(Videos_Card,Videos,"solo",x);
Generate_Card(Comics_Card,Comics,"solo",x);
Generate_Card(BBC_Card,BBC,"chapter",x);
Generate_Card(FiveT_Card,FiveT,"chapter",x);
Generate_Card(Hyanmaru_Card,Hyanmaru,"chapter",x);
Generate_Card(YUE_C_Card,YUE_C,"chapter",x);
Generate_Card(Gelatomusume_Card,Gelatomusume,"chapter",x);
Generate_Card(Picturd_Card,Picturd,"chapter",x);
Generate_Card(Mcomics_Card,Mcomics,"chapter",x,"sum");

const Texts_index = Texts.findIndex(item => item.version === x);
if (Texts_index === -1) {
  changelogInfo_Card.querySelector(".content-md").innerHTML = "";
} else {
  changelogInfo_Card.querySelector(".content-md").innerHTML = marked.parse(Texts[Texts_index].name);
  animateCSS(changelogInfo_Card.querySelector(".content-md"),"fadeIn");
}

// Color cards
Generate_ColorCard(Mcomics_Card,"chapter","Sum");
Generate_ColorCard(BBC_Card,"chapter","Solo");
Generate_ColorCard(FiveT_Card,"chapter","Solo");
Generate_ColorCard(Hyanmaru_Card,"chapter","Solo");
Generate_ColorCard(YUE_C_Card,"chapter","Solo");
Generate_ColorCard(Gelatomusume_Card,"chapter","Solo");
Generate_ColorCard(Picturd_Card,"chapter","Solo");
Generate_ColorCard(Other_Card,"chapter","Solo");	
Generate_ColorCard(Videos_Card,"solo","New");
Generate_ColorCard(Comics_Card,"solo","New");




};
