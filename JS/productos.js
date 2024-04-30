document.addEventListener('DOMContentLoaded', function() {
    const agregarAlCarritoButtons = document.querySelectorAll('.agregar-al-carrito');
    const productos = document.querySelectorAll('.producto');

    agregarAlCarritoButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const producto = productos[index];
            const nombre = producto.dataset.nombre;
            const imagen = producto.dataset.imagen;
            const precio = producto.dataset.precio;

            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push({ nombre, imagen, precio });
            localStorage.setItem('carrito', JSON.stringify(carrito));

            window.location.href = '/main/compras.html';
        });
    });
});

