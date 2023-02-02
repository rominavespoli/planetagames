import Cart from "./Cart.js";
import Product from "./product.js";

let products = [];
let cart = new Cart([]);

const contentProd = document.querySelector("#contentProd");

createProductsAndLocalStorage();
showProducts();
actualizarBotonesAdd();

function actualizarBotonesAdd() {
  let botonesAdd = document.querySelectorAll(".btnAdd");
  botonesAdd.forEach((button) => {
    button.addEventListener("click", addCartProduct);
  });
}

function createProductsAndLocalStorage() {
  products.push(
    new Product(
      "Alien",
      2000,
      "juegos de ingenio",
      20,
      "./images/alien-el-octavo-pasajero-el-destino-del-nostromo.jpg",
      "prod0"
    )
  );
  products.push(
    new Product(
      "Azul",
      3500,
      "juegos de ingenio",
      20,
      "./images/azul-master-chocolatier.jpg",
      "prod1"
    )
  );
  products.push(
    new Product(
      "Bloodhorne ",
      4900,
      "juegos didácticos",
      10,
      "./images/bloodborne-la-mazmorra-del-caliz.jpg",
      "prod2"
    )
  );
  products.push(
    new Product(
      "Challengers",
      2650,
      "juegos de estrategia",
      20,
      "./images/challengers.jpg",
      "prod3"
    )
  );
  products.push(
    new Product(
      "Downfall of empires",
      7000,
      "juegos de estrategia",
      20,
      "./images/downfall-of-empires.jpg",
      "prod4"
    )
  );
  products.push(
    new Product(
      "El señor de los anillos",
      7800,
      "juegos de estrategia",
      20,
      "./images/el señor de los anillos.jpeg",
      "prod5"
    )
  );
  localStorage.setItem("products", JSON.stringify(products));
}

function showProducts() {
  products.forEach((product) => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.className = "nuevoProducto";

    nuevoProducto.name = product.name;
    nuevoProducto.price = product.price;
    nuevoProducto.category = product.category;
    nuevoProducto.age = product.age;
    nuevoProducto.image = product.image;
    nuevoProducto.item = product.item;

    nuevoProducto.classList.add("product");
    nuevoProducto.innerHTML = `
        <img class="prodImg" src="${product.image}">
        <div>
            <h3 class="prodName">${product.name}</h3>
            <p class="prodPrice">$${product.price}</p>
            <button class="btnAdd" id="${product.item}">Agregar al carrito</button>
        </div>
`;
    contentProd.append(nuevoProducto);
  });
}

function addCartProduct(evt) {
  const product = evt.target.closest(".nuevoProducto");

  const nuevoProducto = new Product(
    product.name,
    product.price,
    product.category,
    product.age,
    product.image,
    product.item
  );
  cart.addProduct(nuevoProducto);

  console.log(cart.arrayCartProducts);
}
