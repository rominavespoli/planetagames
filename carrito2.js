export function loadCardModalExp(cartProducts) {
    const modalBody = document.querySelector(".modal .modal-body")
      modalBody.innerHTML = ""
      cartProducts.forEach((product) => {
        //modalBody.className = "productoEnCarrito";
        //modalBody.classList.add("carrito-producto");
        modalBody.innerHTML += `
        <div class="modal-contenedor">
        
        <img class="imgCart" src="${product.image}" >
        
        <p>Producto: ${product.name}</p>
        <p>Precio:$${product.price}</p>
        <p>Cantidad: <span id="cantidad">${product.quantity}</span></p>
        <button class="carrito-producto-eliminar" id="${product.id}"><i class="bi bi-trash-fill"></i></button>
        
        
      </div>
        `
        initializeEmptyCartButton(cartProducts);
        initializeRemoveProduct(cartProducts);
        actualizarTotal(cartProducts);
      })
    }


    function initializeRemoveProduct(cartProducts) {
        let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
        botonesEliminar.forEach(boton => {
            boton.addEventListener("click", (e) => {
                removeProduct(e, cartProducts)
             }); 
            });
    }
    
    function removeProduct(e, cartProducts) {
    
        const id = e.currentTarget.id;
        const index = cartProducts.findIndex(product => product.id === id);
        cartProducts.splice(index, 1);
    
        loadCardModalExp(cartProducts);
        updateCartCounter(cartProducts, document.querySelector("#contadorCarrito"))
        localStorage.setItem("productos-en-carrito", JSON.stringify(cartProducts));
        actualizarTotal(cartProducts);
    }

    function initializeEmptyCartButton(cartProducts) {
        const botonVaciar = document.querySelector("#btnVaciar");
        botonVaciar.addEventListener("click", () => {
            emptyCart(cartProducts)
        });
    }
    
    function emptyCart(cartProducts) {
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
            cartProducts.length = [];
            localStorage.setItem("productos-en-carrito", JSON.stringify(cartProducts));
            loadCardModalExp(cartProducts);
            updateCartCounter(cartProducts, document.querySelector("#contadorCarrito"))
            actualizarTotal(cartProducts);
        }
        })
    }
    

export function updateCartCounter(cartProducts, contadorCarrito) {
    let counter = cartProducts.reduce((acc, product) => acc + product.quantity, 0);
    contadorCarrito.innerText = counter;
  }



  function actualizarTotal(cartProducts) {
    const totalCalculado = cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const cartTotal = document.querySelector(".cartTotal")
    cartTotal.innerText = `
   El total es $${totalCalculado}  
   `

}
