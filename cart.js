class Cart {
  constructor(arrayCartProducts) {
    this.arrayCartProducts = arrayCartProducts;
  }

  addProduct(product) {
    let cartProduct = new CartProduct(product, 1);//todo: falta el if para chequear si el product esta o no en el carrito
    this.arrayCartProducts.push(cartProduct);
  }

  removeProduct(product) {
    let indexProduct = this.arrayCartProducts.indexOf(product);
    arrayCartProducts.splice(indexProduct, 1);
  }

  calculateTotal() {
    let total = this.arrayCartProducts.reduce((acumulador, product) => {
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
    let resultado = this.arrayCartProducts.filter((cartProduct) =>
      cartProduct.product.category.includes(category)
    );
    resultado.forEach((product) =>
      console.log("los juegos de " + category + " son: " + product.name)
    );
  }
}





export default Cart