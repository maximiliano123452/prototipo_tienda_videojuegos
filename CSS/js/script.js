document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".contacto-form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // EVITAR ENVIO POR DEFECTO

        // CAPTURA VALORES INGRESADOS CONTACTO
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // VALIDACION
        if (nombre === "" || email === "" || mensaje === "") {
            alert("⚠️ Por favor, completa todos los campos.");
            return;
        }

        // VALIDAR EMAIL
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("❌ Ingresa un correo electrónico válido.");
            return;
        }

        
        alert(`✅ Gracias, ${nombre}. Tu mensaje ha sido enviado correctamente.`);

        // LIMPIAR LOS CAMPOS DESPUES DEL ENVIO
        formulario.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault(); // EVITA ENVIO AUTOMATICO

        // CAPTURA LOS VALORES INGRESADOS  (FORMULARIO)
        const nombre = document.getElementById("nombre").value.trim();
        const usuario = document.getElementById("usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const password2 = document.getElementById("password2").value.trim();
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        // VALIDAR CAMPOS VACIOS 
        if (!nombre || !usuario || !email || !password || !password2 || !fechaNacimiento) {
            alert("⚠️ Todos los campos obligatorios deben ser rellenados.");
            return;
        }

        // VALIDAR CORREO (FORMULARIO)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("❌ Ingresa un correo electrónico válido.");
            return;
        }

        // VALIDAR CONTRASEÑA
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
        if (!passwordRegex.test(password)) {
            alert("⚠️ La contraseña debe tener entre 6 y 18 caracteres, al menos una mayúscula y un número.");
            return;
        }

        // CONFIRMAR COINCIDENCIA DE CONTRASEÑAS 
        if (password !== password2) {
            alert("⚠️ Las contraseñas no coinciden.");
            return;
        }

        // VALIDAR EDAD (MIN 13 AÑOS)
        const hoy = new Date();
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        if (edad < 13) {
            alert("⚠️ Debes tener al menos 13 años para registrarte.");
            return;
        }

        // SIMULACION DE ENVIO EXITOSO  (FORMULARIO)
        alert(`✅ Gracias, ${nombre}. Tu registro se ha completado correctamente.`);

        // LIMPIAR LOS CAMPOS DESPUES DEL ENVIO (FORMULARIO)
        registroForm.reset();
    });
});

