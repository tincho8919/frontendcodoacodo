
document.addEventListener('DOMContentLoaded', function() {
    const detallesCompra = document.getElementById('detalles-compra');
    const totalVenta = document.getElementById('total-venta');

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function renderizarDetallesCompra() {
        detallesCompra.innerHTML = ''; 

        let precioTotal = 0;

        carrito.forEach(producto => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
            `;
            detallesCompra.appendChild(fila);

            precioTotal += parseFloat(producto.precio);
        });

        totalVenta.textContent = `$${precioTotal.toFixed(2)}`;
    }

    renderizarDetallesCompra();
});
