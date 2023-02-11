

let cartProducts = localStorage.getItem("productos-en-carrito");
cartProducts = JSON.parse(cartProducts);
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoAccionTotal = document.querySelector("#carrito-acciones-total");
const total = document.querySelector("#total");

cargarProductosCarrito(cartProducts);
initializeVaciar();


function initializeVaciar() {
    const botonVaciar = document.querySelector("#btnVaciar");
    botonVaciar.addEventListener("click", vaciarCarrito);
}

function vaciarCarrito() {
    Swal.fire({
        title: 'Está seguro de que desea vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        denyButtonText: 'No', /* NO SE MUESTRA*/ 
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Su carrito está vacio'
                
              })
        }
      })
  
    cartProducts.length = [];
    localStorage.setItem("productos-en-carrito", JSON.stringify(cartProducts));
    cargarProductosCarrito();
  
      
}

/*function cargarProductosCarrito(cartProducts) {


    if (cartProducts && cartProducts.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAccionTotal.classList.remove("disabled");
        contenedorCarritoProductos.innerHTML = "";
    
        cartProducts.forEach((producto) => {
          // const div = document.createElement("div");
          // div.classList.add("carrito-producto");
          // div.innerHTML = `
          //     <div class="CartNameProduct">
          //         <small>Producto</small>
          //         <h3>${producto.name}</h3>
          //     </div>
          //     <div class="CartQuantityProduct">
          //         <small>Cantidad</small>
          //         <p>${producto.quantity}</p>
          //     </div>
          //     <div class="CartPriceProduct">
          //         <small>Precio</small>
          //         <p>$${producto.price}</p>
          //     </div>
          //     <div class="CartProductSubtotal">
          //         <small>Subtotal</small>
          //         <p>$${producto.price * producto.quantity}</p>
          //     </div>

          //     <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
          // `;




          
          const div = document.createElement("div");
          div.className = "productoEnCarrito";
          div.classList.add("carrito-producto");
          div.innerHTML = `
        
        <p>Producto: ${producto.name}</p>
        <p>Precio:$${producto.price}</p>
        <p>Cantidad: <span id="cantidad">${producto.quantity}</span></p>
        <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
        
        `;

          contenedorCarritoProductos.append(div);
         
        });

        actualizarBotonesEliminar();
        actualizarTotal();
	
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAccionTotal.classList.add("disabled");
    }

}*/

function actualizarBotonesEliminar() {
    let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {

    const id = e.currentTarget.id;
    const index = cartProducts.findIndex(product => product.id === id);
    cartProducts.splice(index, 1);

    cargarProductosCarrito(cartProducts);
    localStorage.setItem("productos-en-carrito", JSON.stringify(cartProducts));
}

function actualizarTotal() {
    const totalCalculado = cartProducts.reduce((acc, producto) => acc + (producto.price * producto.quantity), 0);
    const div = document.createElement("div");
    div.innerHTML = `
    <p class = "cartTotal"> Total: $${totalCalculado}  <p>
   `
   
    contenedorCarritoProductos.append(div);
}


