var cadi = {
	make: "Cadillac",
	model: "GM",
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892,
	engine: "v8",
	airbags: true,
	year: 1959,
	started: false,
	start: function () {
		this.started = true;
	},
	stop: function () {
		this.started = false;
	},
	drive: function () {
		if (this.started) {
			console.log("Zoom zoom!");
		} else {
			console.log("You need to start the engine first.");
		}
	}
};

var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021,
	started: false,
	start: function () {
		this.started = true;
	},
	stop: function () {
		this.started = false;
	},
	drive: function () {
		if (this.started) {
			alert("Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};


var dog = {
	name: "Fido",
	weight: 20.2,
	age: 4,
	breed: "mixed",
	activity: "fetch balls"
};

var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341,
	started: false,
	start: function () {
		this.started = true;
	},
	stop: function () {
		this.started = false;
	},
	drive: function () {
		if (this.started) {
			alert("Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,
	start: function () {
		started = true;
	},
	stop: function () {
		started = false;
	},
	drive: function () {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " + this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
				alert("Uh oh, out of fuel.");
				this.stop();
			}
		} else {
			alert("You need to start the engine first.");
		}
	},
	addFuel: function (amount) {
		this.fuel = this.fuel + amount;
	}
};

fiat.start();
fiat.drive();

// cadi.start();
// cadi.drive();
// cadi.stop();
// chevy.start();
// chevy.drive();
// chevy.stop();
// taxi.start();
// taxi.drive();
// taxi.stop();

if (cadi.year < 1965) {
	classic = true;
}


var bark;
if (dog.weight > 20) {
	bark = "WOOF WOOF";
} else {
	bark = "woof woof";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

//prequal
function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}
var worthALook = prequal(taxi);
if (worthALook) {
	console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
	console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}


var checkItOut = prequal(cadi);
if (checkItOut) {
	console.log("You gotta check out this " + cadi.make + " " + cadi.model);
} else {
	console.log("You should really pass on the " + cadi.make + " " + cadi.model);
}

var letsTryAgain = prequal(fiat);
if (letsTryAgain) {
	console.log("You gotta check out this " + fiat.make + " " + fiat.model);
} else {
	console.log("You should really pass on the " + fiat.make + " " + fiat.model);
}

var okLastTime = prequal(chevy);
if (okLastTime) {
	console.log("You gotta check out this " + chevy.make + " " + chevy.model);
} else {
	console.log("You should really pass on the " + chevy.make + " " + chevy.model + ".");
}

//Using oop to find secretPassword
function getSecret(file, secretPassword) {
	file.opened = file.opened + 1;
	if (secretPassword == file.password) {
		return file.contents;
	}
	else {
		return "Invalid password! No secret for you.";
	}
}
function setSecret(file, secretPassword, secret) {
	if (secretPassword == file.password) {
		file.opened = 0;
		file.contents = secret;
	}
}
var superSecretFile = {
	level: "classified",
	opened: 0,
	password: 2,
	contents: "Dr. Evel's next meeting is in Detroit."
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

//display properties of object
for (var prop in chevy) {
	console.log(prop + ": " + chevy[prop]);
}