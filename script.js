document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let valido = true;

    // Limpiar errores previos
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Capturar valores
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let password = document.getElementById("password").value.trim();
    let edad = document.getElementById("edad").value;
    let fecha = document.getElementById("fecha").value;
    let telefono = document.getElementById("telefono").value.trim();
    let sexo = document.getElementById("sexo").value;

    // VALIDACIONES
    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "Falta capturar el nombre";
        valido = false;
    }

    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        document.getElementById("errorCorreo").textContent = "Correo inválido";
        valido = false;
    }

    if (password.length < 6) {
        document.getElementById("errorPassword").textContent = "Mínimo 6 caracteres";
        valido = false;
    }

    if (edad < 18 || edad > 60 || edad === "") {
        document.getElementById("errorEdad").textContent = "Edad fuera de rango (18-60)";
        valido = false;
    }

    if (fecha === "") {
        document.getElementById("errorFecha").textContent = "Seleccione una fecha válida";
        valido = false;
    }

    let regexTel = /^[0-9]{10}$/;
    if (!regexTel.test(telefono)) {
        document.getElementById("errorTelefono").textContent = "Teléfono debe tener 10 dígitos";
        valido = false;
    }

    if (sexo === "") {
        document.getElementById("errorSexo").textContent = "Seleccione una opción";
        valido = false;
    }

    if (valido) {
        alert("Todo bien, registro enviado");
        document.getElementById("formulario").reset();
    }
});