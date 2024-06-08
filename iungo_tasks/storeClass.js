class Item {
    // Creating constructor
    constructor(name, price, quantity){
        this.name = name,
            this.price = price,
            this.quantity = quantity
    }
}

class Store{
    constructor(name, inventory){
        this.name = name,
            this.inventory = {}
    }

    // Creating the method to add new items to Store's inventory
    add_item(product){
        // if(typeof(product)== 'object'){}

        if(product instanceof Item){
            this.inventory[product.name] = product
        } else {
            console.log(error)
        }
    }
}

// Creating 3 new objects that are instances of the Item Class
let apples = new Item('apple', 24, 150)
let grapes = new Item('grape' , 12, 125)
let oranges = new Item('orange', 18, 259)
console.log(apples)
console.log(grapes)
console.log(oranges)

let The_Shop = new Store('The Shop')
The_Shop.add_item(apples)
The_Shop.add_item(grapes)
The_Shop.add_item(oranges)
console.log(The_Shop)