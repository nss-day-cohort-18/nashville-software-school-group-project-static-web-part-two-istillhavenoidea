var earPlugs = [];


// Plug #1
var plug1 = {
	name: "Blue Ear Plug",
	description: "Spicy jalap eno bacon ipsum dolor amet vo luptate ground round pancetta kielbasa. Anim alca tra ball tip, pic anha turdu cken porchetta cupid atat jowl flank. Jerky est reprehenderit fugiat, corned beef eu turkey jowl hamburger.",
	price: 5,
	imgUrl: "images/blue.jpg"
};

// Plug #2
var plug2 = {
	name: "Green Ear Plug",
	description: "Spicy jalap eno bacon ipsum dolor amet volu ptate ground round pancetta kielbasa. Anim alc atra ball tip, pic anha turd ucken porchetta cupidatat jowl flank. Jerky est reprehenderit fugiat, corned beef eu turkey jowl hamburger. ",
	price: 5,
	imgUrl: "images/green.jpg"
};


// Plug #3
var plug3 = {
	name: "Yellow Ear Plug",
	description: "Spicy jala peno bacon ipsum dolor amet volu ptate ground round pan cetta kielbasa. Anim alc atra ball tip, pic anha tur ducken porc hetta cupid atat jowl flank. Jerky est reprehe nderit fugiat, corned beef eu turkey jowl hamburger.",
	price: 5,
	imgUrl: "images/yellow.jpg"
};


// Plug #4
var plug4 = {
	name: "Orange Ear Plug",
	description: "Akin to the adventure of Perseus and Andromeda—indeed, by some supposed to be indirectly derived from it—is that famous story of St. George and the Dragon; which dragon I maintain to have been a whale; for in many old chronicles whales and dragons are strangely jumbled together.",
	price: 5,
	imgUrl: "images/orange.jpg"
};

// Plug #5
var plug5 = {
	name: "Yellow & Pink Ear Plug",
	description: "A room in the house in Saville Row was set apart for Aouda, who was overwhelmed with grief at her protector's misfortune. From the words which Mr. Fogg dropped, she saw that he was meditating some serious project.",
	price: 5,
	imgUrl: "images/yellowPink.jpg"
};

// Plug #6
var plug6 = {
	name: "Bunch O' Ear Plugs",
	description: "I went on to the crowd. There were really, I should think, two or three hundred people elbowing and jostling one another, the one or two ladies there being by no means the least active.",
	price: 5,
	imgUrl: "images/bunch.jpg"
};

// Plug #7
var plug7 = {
	name: "Deluxe Ear Plug",
	description: "The Witch of the South. She is the most powerful of all the Witches, and rules over the Quadlings. Besides, her castle stands on the edge of the desert, so she may know a way to cross it",
	price: 5,
	imgUrl: "images/deluxe.jpg"
};

// Plug #8
var plug8 = {
	name: "Barbed Wire Ear Plugs",
	description: "Two lines!' cried the Mock Turtle. 'Seals, turtles, salmon, and so on; then, when you've cleared all the jelly-fish out of the way—",
	price: 5,
	imgUrl: "images/barbed.jpg"
};



// <name>				"plugName#"
// <description>		"plugDesc#"
// <price>				"plugPrice#"
// <img>				"plugImg#"


earPlugs.push(plug1);
earPlugs.push(plug2);
earPlugs.push(plug3);
earPlugs.push(plug4);
earPlugs.push(plug5);
earPlugs.push(plug6);
earPlugs.push(plug7);
earPlugs.push(plug8);

console.log("EarPlugs[i]: ", earPlugs);


// Plug # 1
var nameDOM1 = document.getElementById("plugName1");
var descDOM1 = document.getElementById("plugDesc1");
var priceDOM1 = document.getElementById("plugPrice1");
var imageDOM1 = document.getElementById("plugImg1");

nameDOM1.innerHTML = earPlugs[0].name;
descDOM1.innerHTML = earPlugs[0].description;
priceDOM1.innerHTML = earPlugs[0].price;
imageDOM1.src = earPlugs[0].imgUrl;



// Plug # 2
var nameDOM2 = document.getElementById("plugName2");
var descDOM2 = document.getElementById("plugDesc2");
var priceDOM2 = document.getElementById("plugPrice2");
var imageDOM2 = document.getElementById("plugImg2");

nameDOM2.innerHTML = earPlugs[1].name;
descDOM2.innerHTML = earPlugs[1].description;
priceDOM2.innerHTML = earPlugs[1].price;
imageDOM2.src = earPlugs[1].imgUrl;


// Plug # 3
var nameDOM3 = document.getElementById("plugName3");
var descDOM3 = document.getElementById("plugDesc3");
var priceDOM3 = document.getElementById("plugPrice3");
var imageDOM3 = document.getElementById("plugImg3");

nameDOM3.innerHTML = earPlugs[2].name;
descDOM3.innerHTML = earPlugs[2].description;
priceDOM3.innerHTML = earPlugs[2].price;
imageDOM3.src = earPlugs[2].imgUrl;


// Plug # 4
var nameDOM4 = document.getElementById("plugName4");
var descDOM4 = document.getElementById("plugDesc4");
var priceDOM4 = document.getElementById("plugPrice4");
var imageDOM4 = document.getElementById("plugImg4");

nameDOM4.innerHTML = earPlugs[3].name;
descDOM4.innerHTML = earPlugs[3].description;
priceDOM4.innerHTML = earPlugs[3].price;
imageDOM4.src = earPlugs[3].imgUrl;


// Plug # 5
var nameDOM5 = document.getElementById("plugName5");
var descDOM5 = document.getElementById("plugDesc5");
var priceDOM5 = document.getElementById("plugPrice5");
var imageDOM5 = document.getElementById("plugImg5");

nameDOM5.innerHTML = earPlugs[4].name;
descDOM5.innerHTML = earPlugs[4].description;
priceDOM5.innerHTML = earPlugs[4].price;
imageDOM5.src = earPlugs[4].imgUrl;



// Plug # 6
var nameDOM6 = document.getElementById("plugName6");
var descDOM6 = document.getElementById("plugDesc6");
var priceDOM6 = document.getElementById("plugPrice6");
var imageDOM6 = document.getElementById("plugImg6");

nameDOM6.innerHTML = earPlugs[5].name;
descDOM6.innerHTML = earPlugs[5].description;
priceDOM6.innerHTML = earPlugs[5].price;
imageDOM6.src = earPlugs[5].imgUrl;

// Plug # 7
var nameDOM7 = document.getElementById("plugName7");
var descDOM7 = document.getElementById("plugDesc7");
var priceDOM7 = document.getElementById("plugPrice7");
var imageDOM7 = document.getElementById("plugImg7");

nameDOM7.innerHTML = earPlugs[6].name;
descDOM7.innerHTML = earPlugs[6].description;
priceDOM7.innerHTML = earPlugs[6].price;
imageDOM7.src = earPlugs[6].imgUrl;

// Plug # 8
var nameDOM8 = document.getElementById("plugName8");
var descDOM8 = document.getElementById("plugDesc8");
var priceDOM8 = document.getElementById("plugPrice8");
var imageDOM8 = document.getElementById("plugImg8");

nameDOM8.innerHTML = earPlugs[7].name;
descDOM8.innerHTML = earPlugs[7].description;
priceDOM8.innerHTML = earPlugs[7].price;
imageDOM8.src = earPlugs[7].imgUrl;


