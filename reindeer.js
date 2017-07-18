console.log("Hi");

let colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
let reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

let reindeerColors = "";

let hohohoElement = document.getElementById("reindeer");

for (let i = 0; i <= reindeer.length; i++) {

// console.log(hohohoElement);
	// console.log(colors);
	// console.log(reindeer);
	// console.log(reindeerColors);


	reindeerColors += `<div>${colors[i]}` + " " + `${reindeer[i]}</div>`;

}

hohohoElement.innerHTML = reindeerColors;