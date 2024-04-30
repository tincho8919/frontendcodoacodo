document.addEventListener('DOMContentLoaded', function () {
    const carritoContainer = document.querySelector('.carrito-container');
    const eliminarTodosButton = document.getElementById('eliminar-todos');

    function eliminarProducto(event) {
        const producto = event.target.closest('.producto');
        const productoId = producto.dataset.id;
        eliminarProductoDelCarrito(productoId);
        renderizarCarrito();
    }

    function eliminarTodosLosProductos() {
        localStorage.removeItem('carrito');
        renderizarCarrito();
    }

    function eliminarProductoDelCarrito(id) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito = carrito.filter((producto, index) => index !== parseInt(id));
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function renderizarCarrito() {
        carritoContainer.innerHTML = '';
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.forEach((producto, index) => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');
            productoElement.dataset.id = index;
            productoElement.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
                <button class="eliminar-producto">Eliminar</button>
            `;
            carritoContainer.appendChild(productoElement);
        });

        const botonesEliminar = document.querySelectorAll('.eliminar-producto');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', eliminarProducto);
        });
    }

    eliminarTodosButton.addEventListener('click', eliminarTodosLosProductos);

    renderizarCarrito();
});


document.addEventListener('DOMContentLoaded', function () {

    const comprarButton = document.getElementById('comprar');

    comprarButton.addEventListener('click', function () {
        window.location.href = '/main/ventas.html';
    });
});

