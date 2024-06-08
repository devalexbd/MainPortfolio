class Item {
    // Creating constructor
    constructor(name, price, quantity){
        this.name = name,
            this.price = price,
            this.quantity = quantity
    }
}

class Store{
    constructor(name){
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

    // Creating a method that removes items from Store's inventory
    remove_item(product){
        if(product in this.inventory){
            delete this.inventory[product]
        } else {
            console.log(`There is no item called ${product} to remove.`)
        }
    }

    // Creating a method that updates an item's quantity
    update_quantity(product, newQuantity){
        if(product in this.inventory){
            this.inventory[product].quantity = newQuantity
            console.log(`The quantity of ${product} has changed to ${newQuantity}`)
        } else {
            console.log(`There is no item called ${product} to update.`)
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

The_Shop.remove_item('pears')
The_Shop.remove_item('apple')
console.log(The_Shop)

The_Shop.update_quantity('orange', 444)
console.log(The_Shop)