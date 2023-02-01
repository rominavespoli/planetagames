import Cart from "./Cart.js";
import Product from "./product.js"

let products = [];
let cart = new Cart([])


const contentProd = document.querySelector("#contentProd");
let botonesAdd = document.querySelectorAll(".btnAdd")
console.log(botonesAdd);
console.log(contentProd);
createProductsAndLocalStorage();
showProducts();
actualizarBotonesAdd();

function actualizarBotonesAdd() {
    let botonesAdd = document.querySelectorAll(".btnAdd");
    botonesAdd.forEach(button => {
        button.addEventListener("click", myFunc);
        button.romi = 'This is my parameter';
    })
}

function createProductsAndLocalStorage() {
    products.push(new Product ("Alien", 2000, "juegos de ingenio", 20, "./images/alien-el-octavo-pasajero-el-destino-del-nostromo.jpg", "prod0"))
    products.push(new Product ("Azul", 3500, "juegos de ingenio", 20, "./images/azul-master-chocolatier.jpg", "prod1"))
    products.push(new Product ("Bloodhorne ", 4900, "juegos didácticos", 10, "./images/bloodborne-la-mazmorra-del-caliz.jpg", "prod2"))
    products.push(new Product ("Challengers", 2650, "juegos de estrategia", 20, "./images/challengers.jpg", "prod3"))
    products.push(new Product ("Downfall of empires", 7000, "juegos de estrategia", 20, "./images/downfall-of-empires.jpg", "prod4"))
    products.push(new Product ("El señor de los anillos", 7800, "juegos de estrategia", 20, "./images/el señor de los anillos.jpeg", "prod5"))
    localStorage.setItem("products", JSON.stringify(products));
}

function showProducts(){
    
    products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <img class="prodImg" src="${product.image}">
        <div>
            <h3 class="prodName">${product.name}</h3>
            <p class="prodPrice">$${product.price}</p>
            <button class="btnAdd" id="${product.item}">Agregar al carrito</button>
        </div>
` ;
        contentProd.append(div);
    })
}

function agregarCarrito(lala) {

console.log(lala)
}

function myFunc(evt)
{
  console.log(evt);
}




