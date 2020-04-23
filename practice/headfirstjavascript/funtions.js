function bark(name, weight) {
if (weight > 20) {
console.log(name + " says WOOF WOOF");
} else {
console.log(name + " says woof woof");
}
}
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);

function whatShallIWear(temp){

if (temp < 60) {
console.log("Wear a jacket");
}
	else if (temp < 70) {
	console.log("Wear a sweater");
	}
		else {
		console.log("Wear t-shirt");
		}
}

var temp;
whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);

function doIt(param) {
param = 2;
}
var test = 1;
doIt(test);
console.log(test);

function dogYears(dogName, age) {
var years = age * 7;
console.log(dogName + " is " + years + " years old");
}
var myDog = "Fido";
dogYears(myDog, 4);

function makeTea(cups, tea) {
console.log("Brewing " + cups + " cups of " + tea);
}
var guests = 3;
makeTea(guests, "black tea");

function secret() {
console.log("The secret of life is 42");
}
secret();

function speak(kind) {
var defaultSound = "";
if (kind == "dog") {
alert("Woof");
} else if (kind == "cat") {
alert("Meow");
} else {
alert(defaultSound);
}
}
var pet = prompt("Enter a type of pet: ");
speak(pet);

var avatar;
var levelThreshold = 1000;
function getScore(points) {
var score;
var i = 0;
while (i < levelThreshold) {
//code here
i = i + 1;
}
return score;
}

var radius = 5;
var area = circleArea(radius);
alert(area);
function circleArea(r) {
var a = Math.PI * r * r;
return a;
}

function clunk(times) {
var num = times;
while (num > 0) {
display("clunk");
num = num - 1;
}
}
function thingamajig(size) {
var facky = 1;
clunkCounter = 0;
if (size == 0) {
display("clank");
} else if (size == 1) {
display("thunk");
} else {
while (size > 1) {
facky = facky * size;
size = size - 1;
}
clunk(facky);
}
}
function display(output) {
console.log(output);
clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(6);
console.log(clunkCounter);