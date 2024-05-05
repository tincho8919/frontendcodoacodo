var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    var formData = new FormData(form); // Obtiene los datos del formulario, incluyendo el archivo

    // Itera sobre los datos del formulario y haz lo que necesites con ellos
    for (var pair of formData.entries()) {
        var field = pair[0];
        var value = pair[1];
        if (value instanceof File) {
            // Si es un archivo, puedes manejarlo como necesites
            // Por ejemplo, puedes mostrar la imagen en una vista previa o enviarla a través de AJAX
        } else {
            // Si no es un archivo, haz lo que necesites con los otros campos del formulario
        }
    }
});
