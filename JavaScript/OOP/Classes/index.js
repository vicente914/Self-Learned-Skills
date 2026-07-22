//Class, provides a more cleaner and structured way to work with object
//compared to the traditional constructor function

class Product{
    
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.02;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Toy", 15.99);
const product3 = new Product("Jacket", 29.99);

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);