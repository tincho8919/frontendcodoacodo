document.getElementById('miFormulario').addEventListener('input', function(event) {
    let field = event.target;
    let fieldId = field.id;
    let errorSpan = document.getElementById(fieldId + 'Error');
    let valid = field.checkValidity();

    if (valid) {
        errorSpan.textContent = '';
        errorSpan.classList.remove('error');
        errorSpan.classList.add('success');
    } else {
        errorSpan.textContent = field.validationMessage;
        errorSpan.classList.remove('success');
        errorSpan.classList.add('error');
    }
});

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    let valid = true;
    let formStatus = document.getElementById('formStatus');
    formStatus.textContent = '';

    // Validate each field again before submitting
    let fields = ['imagen', 'nombre', 'apellido', 'edad', 'email', 'comentarios'];
    fields.forEach(fieldId => {
        let field = document.getElementById(fieldId);
        let errorSpan = document.getElementById(fieldId + 'Error');
        if (!field.checkValidity()) {
            errorSpan.textContent = field.validationMessage;
            errorSpan.classList.remove('success');
            errorSpan.classList.add('error');
            valid = false;
        } else {
            errorSpan.textContent = '';
        }
    });

    // Validate Genero
    let genero = document.querySelectorAll('input[name="genero"]:checked');
    if (genero.length === 0) {
        document.getElementById('generoError').textContent = 'Género es requerido.';
        valid = false;
    }

    // If valid, allow form submission
    if (!valid) {
        event.preventDefault();
        formStatus.textContent = 'Por favor, corrija los errores en rojo antes de enviar.';
        formStatus.classList.remove('success');
        formStatus.classList.add('error');
    }
});