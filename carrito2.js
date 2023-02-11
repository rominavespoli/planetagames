export function loadCardModalExp(cartProducts) {
  const modalBody = document.querySelector(".modal .modal-body");
  modalBody.innerHTML = "";
  cartProducts.forEach((product) => {
    modalBody.innerHTML += `
        <div class="modal-contenedor">
        
        <img class="imgCart" src="${product.image}" >
        
        <p>Producto: ${product.name}</p>
        <p>Precio:$${product.price}</p>
        <p>Cantidad: <span id="cantidad">${product.quantity}</span></p>
        <button class="carrito-producto-eliminar" id="${product.id}"><i class="bi bi-trash-fill"></i></button>
        </div>`;
    initializeEmptyCartButton(cartProducts);
    initializeRemoveProduct(cartProducts);
    initializeCheckoutButton(cartProducts);
    updateTotal(cartProducts);
  });
}

function initializeRemoveProduct(cartProducts) {
  let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      removeProduct(e, cartProducts);
    });
  });
}

function removeProduct(e, cartProducts) {
  const id = e.currentTarget.id;
  const index = cartProducts.findIndex((product) => product.id === id);
  cartProducts.splice(index, 1);

  loadCardModalExp(cartProducts);
  updateCartCounter(cartProducts, document.querySelector("#contadorCarrito"));
  localStorage.setItem("productos-en-carrito", JSON.stringify(cartProducts));
  updateTotal(cartProducts);
}

function initializeEmptyCartButton(cartProducts) {
  const botonVaciar = document.querySelector("#btnVaciar");
  botonVaciar.addEventListener("click", () => {
    emptyCart(cartProducts);
  });
}

function emptyCart(cartProducts) {
  Swal.fire({
    title: "Está seguro de que desea vaciar el carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Su carrito está vacio",
      });
      cartProducts.length = [];
      localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(cartProducts)
      );
      loadCardModalExp(cartProducts);
      updateCartCounter(
        cartProducts,
        document.querySelector("#contadorCarrito")
      );
      updateTotal(cartProducts);
    }
  });
}

export function updateCartCounter(cartProducts, contadorCarrito) {
  let counter = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  contadorCarrito.innerText = counter;
}

function updateTotal(cartProducts) {
  const totalCalculado = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const cartTotal = document.querySelector(".cartTotal");
  cartTotal.innerText = `
   El total es $${totalCalculado}  
   `;
}

function initializeCheckoutButton(cartProducts) {
  const checkoutButton = document.querySelector("#finalizarCompra");
  checkoutButton.addEventListener("click", (e) => {
    finish(cartProducts);
  });
}
function finish(cartProducts) {
  Swal.fire("Gracias por su compra");
  cartProducts.length = [];
  localStorage.setItem("productos-en-carrito", JSON.stringify(cartProducts));
  loadCardModalExp(cartProducts);
  updateCartCounter(cartProducts, document.querySelector("#contadorCarrito"));
  updateTotal(cartProducts);
}
