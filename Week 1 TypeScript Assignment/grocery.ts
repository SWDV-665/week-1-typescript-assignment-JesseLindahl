class Grocery {
    name: string;
    quantity: number; //class with basic attributes 
    price: number;

    constructor(name: string, quantity: number){
        this.name = name;
        this.quantity = quantity;  //initializes the variables from the Grocery class
    }
}

let groceryItems = [
    new Grocery("milk", 3),
    new Grocery("bread", 6),  //array of items for the HTML output
    new Grocery("egg", 11)
]