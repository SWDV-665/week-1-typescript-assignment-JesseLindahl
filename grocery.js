var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity; //initializes the variables from the Grocery class
    }
    return Grocery;
}());
var groceryItems = [
    new Grocery("milk", 3),
    new Grocery("bread", 6),
    new Grocery("egg", 11)
];
