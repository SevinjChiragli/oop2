class Product{
    constructor(name,price){
        this.name=name
        this.price=price
    }
}
class ProductManager{
    constructor(products=[]){
        this.products=products;
    }
    sortingByDescending(){
        this.products.sort((a,b)=> b.price-a.price);
    }
     
    
    sortByIncresing(){
        this.products.sort((a,b)=>a.price-b.price);
    }
    showProducts(){
        this.products.forEach(product=>console.log(`Name:${product.name},Price:${product.price}`)
        );
    }
}

let products = [
    new Product('Shoes',100),
    new Product(`Bags`,200),
    new Product(`T-shirts`, 150)
]
let manager=new ProductManager(products)
console.log(manager);
manager.sortingByDescending();
// manager.sortByIncresing();
manager.showProducts()