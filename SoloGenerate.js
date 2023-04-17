// Lists

Other = [
	// {name:"NNN",banner:"ban"},
	{name:"Porn Addiction",banner:"https://lh3.google.com/u/0/d/1-MeZ4LTfDSSa1U7JDwP2Ns5TZwy6gVh2=w1823-h966-iv1"},
	{name:"Panchy",banner:"https://lh3.google.com/u/0/d/11tPwzCJeJqGbKftBwjfpt_urtabjN-j3=w1823-h966-iv1"},
	{name:"BBC and Tsunade",banner:"https://lh3.google.com/u/0/d/1wIX2XgBNi2GQ2KQlReUa6iISFq6GkpvT=w1885-h918-iv3"},
	{name:"Alicia",banner:"https://lh3.google.com/u/0/d/19FVe2yzrpE_KOvevtNfaeFSIJkFERt2V=w1885-h913-iv1"},
	{name:"Tigress",banner:"https://lh3.google.com/u/0/d/19uNe_H5RmNrSoPt0-RpXVoRxL3Ky9UNP=w1885-h913-iv1"},
	{name:"Rimuru and strapon Shion",banner:"https://lh3.google.com/u/0/d/1ASJcKdNorJeYttZWD3qm4NVUBg4mAceS=w1885-h936-iv1"},
	{name:"Falkner",banner:"https://lh3.google.com/u/0/d/1Wpp0btgysi_HV-IbV_imsR7xKL9i4Wkx=w1885-h936-iv1"},
	{name:"Femboy tip",banner:"https://lh3.google.com/u/0/d/1Wp4Xike3lDeUEYSN6H-cSoHRwSYoPIHR=w1885-h936-iv1"},
	{name:"Growing type of relationships",banner:"https://lh3.google.com/u/0/d/1WspvXVmPs772Ok748d2937dg7feRxvUv=w1885-h936-iv1"},
	{name:"Kuvira",banner:"https://lh3.google.com/u/0/d/1X3AWd2cBHTwGdxo8hd8_o3EEczeDlh3r=w1885-h936-iv1"},
	{name:"Joy",banner:"https://lh3.google.com/u/0/d/1X8a-F7sDb80k7wPfVpduqWtHnq63mxEm=w1885-h936-iv1"}

];


// Generation

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


document.addEventListener("DOMContentLoaded", function() {
	
for (var i = Other.length - 1; i >= 0; i--) {
	post(i,Other);
} 		
	let count = document.querySelectorAll(".paper");
	let elemCount = document.querySelector("#count");
	elemCount.innerHTML = count.length;

});






