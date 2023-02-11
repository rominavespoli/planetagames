import Product from "./product.js";
import {loadCardModalExp} from './carrito2.js'
import {updateCartCounter} from './carrito2.js'



let products = [];
let cartProducts;
const categoryButtons = document.querySelectorAll(".menuButton");
const contentProd = document.querySelector("#contentProd");

fetchProducts();
initializeCartProduct();
initializeMenuButtons();



function fetchProducts() {
  fetch("/product.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).then((data) => {
    products = data;
    localStorage.setItem("products", JSON.stringify(products));
    showProducts(products);
    initializeAddButtons();
  })

}


function initializeMenuButtons() {
  categoryButtons.forEach(boton => {
    boton.addEventListener("click", menuButtonClick)
});
}

function showProducts(products) {

  contentProd.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.id = product.id;
    div.classList.add("product");
    div.innerHTML = `
        <div class="productMain">    
            <img class="prodImg" src="${product.image}">
        
            <h3 class="prodName">${product.name}</h3>
            <p class="prodPrice">$${product.price}</p>
            <button class="btnAdd" id="${product.id}">Agregar al carrito</button>
        </div>
`;
    contentProd.append(div);
  });
}

function menuButtonClick(e) {

    if (e.currentTarget.id != "todos") {
        const categoryProducts = products.filter(producto => producto.category === e.currentTarget.id);
        showProducts(categoryProducts);
    } else {
      showProducts(products);
    }
    initializeAddButtons();

}

function initializeAddButtons() {
  let addButtons = document.querySelectorAll(".btnAdd");
  addButtons.forEach((button) => {
    button.addEventListener("click", addCartProduct);
  });
  
}

function initializeCartProduct() {
let cartProductsLS = localStorage.getItem("productos-en-carrito");
if (cartProductsLS) {
  cartProducts = JSON.parse(cartProductsLS);
} else {
  cartProducts = [];
}
  
}

function findProductById(id) {
  return products.find(product => product.id === id);
}

function existCartProduct(id) {
  return cartProducts.some(cartProduct => cartProduct.id === id);
}

function addCartProduct(evt) {
  const div = evt.target.closest(".product");
  const product = findProductById(div.id)

  if (existCartProduct(div.id)) {
    const index = cartProducts.findIndex(producto => producto.id === div.id);
    cartProducts[index].quantity++;
  } else {
    product.quantity = 1;
    cartProducts.push(product);
  }
  
  updateCartCounter(cartProducts, document.querySelector("#contadorCarrito"));
  loadCardModalExp(cartProducts);
  localStorage.setItem("productos-en-carrito", JSON.stringify(cartProducts));
}