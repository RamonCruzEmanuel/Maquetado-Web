// Función para avanzar entre pasos
function nextStep(step) {
    if (validateStep(step - 1)) {
        document.querySelectorAll('.form-step').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`step-${step}`).classList.add('active');
        
        if (step === 4) {
            mostrarResumen();
        }
    }
}

// Función para regresar al paso anterior
function prevStep(step) {
    document.querySelectorAll('.form-step').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`step-${step}`).classList.add('active');
}

// Validación de campos en cada paso
function validateStep(step) {
    const currentStep = document.getElementById(`step-${step}`);
    const inputs = currentStep.querySelectorAll('input[required]');
    for (let input of inputs) {
        if (!input.value) {
            alert(`Por favor, completa el campo: ${input.previousElementSibling.textContent}`);
            return false;
        }
    }
    return true;
}

// Mostrar resumen de datos en el paso 4
function mostrarResumen() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;

    const dimensiones = document.getElementById('dimensiones').value;
    const peso = document.getElementById('peso').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;

    const envio = document.querySelector('input[name="envio"]:checked').nextSibling.textContent;

    document.getElementById('resumen').innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <hr>
        <p><strong>Dimensiones:</strong> ${dimensiones}</p>
        <p><strong>Peso:</strong> ${peso} kg</p>
        <p><strong>Origen:</strong> ${origen}</p>
        <p><strong>Destino:</strong> ${destino}</p>
        <p><strong>Opción de envío:</strong> ${envio}</p>
    `;
}
