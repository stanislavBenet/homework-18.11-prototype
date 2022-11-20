function Product(name, price, currently) {
  this.name = name;
  this.price = price;
  this.currently = currently;
  this.discount = 0;
}
function FuncForProduct() {
  this.showInfo = function () {
    if (this.discount === 0) {
      return `Information about product: 
  name: ${this.name}
  price: ${this.price} ${this.currently}`;
    }
    return `Information about product: 
  name: ${this.name}
  price: ${this.price} ${this.currently}
  your personaly discount: ${this.discount}\%`;
  };
  this.setDiscount10Percent = function () {
    this.discount += 10;
    return (this.price = Number(this.price) * 0.9);
  };
}

Product.prototype = new FuncForProduct();

const tshirt = new Product("Red T-Shirt", "345", "$");
const trousers = new Product("Military trousers", "200", "€");
console.log(tshirt.showInfo());
console.log(trousers.showInfo());
