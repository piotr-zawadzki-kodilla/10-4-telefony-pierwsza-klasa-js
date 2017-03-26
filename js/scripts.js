function MobilePhone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

MobilePhone.prototype.printInfo = function () {
	console.log("Marka telefonu to " + this.brand + ", kolor to " + this.color + ", a cena to " + this.price + ".");
};

var samsungGalaxyS6 = new MobilePhone("Samsung", 1750, "biały");
var iPhone6S = new MobilePhone("Apple", 2350, "srebrny");
var onePlusOne = new MobilePhone("OnePlus", 1399, "czarny");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
