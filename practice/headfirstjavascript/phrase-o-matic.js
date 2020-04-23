var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];
var numFlavors = flavors.length;
console.log(flavors.length);

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = products[products.length-1];
var recent = products[last];
console.log(last);

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var output;
var i = 0;
while (i < scores.length) {
output = "Bubble solution #" + i + " score: " + scores[i];
console.log(output);
i = i + 1;
}

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;
while (i < hasBubbleGum.length) {
	if (hasBubbleGum[i]){

		console.log(products[i] + " contains bubble gum");
	}
	i = i + 1;

}

for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
	if (hasBubbleGum[i]) {
	console.log(products[i] + " contains bubble gum")
}
}