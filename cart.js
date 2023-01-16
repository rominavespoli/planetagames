class Cart {
  constructor(arrayProducts) {
    this.arrayProducts = arrayProducts;
  }

  addProduct(product) {
    this.arrayProducts.push(product);
  }

  removeProduct(product) {
    let indexProduct = this.arrayProducts.indexOf(product);
    arrayProducts.splice(indexProduct, 1);
  }

  calculateTotal() {
    let total = this.arrayProducts.reduce((acumulador, product) => {
      return acumulador + product.price;
    }, 0);
    console.log("La suma es : " + total);
  }

  showProduct() {
    this.arrayProducts.forEach((product) => {
      console.log("los productos son: " + product.name);
    });
  }

  filterProduct(category) {
    let resultado = this.arrayProducts.filter((product) =>
      product.category.includes(category)
    );
    resultado.forEach((product) =>
      console.log("los juegos de " + category + " son: " + product.name)
    );
  }
}
