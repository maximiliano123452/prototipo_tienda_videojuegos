$(document).ready(function () {
    $("#registroForm").submit(function (event) {
        event.preventDefault(); // EVITA ENVIO POR DEFECTO

        let nombre = $("#nombre").val().trim();
        let usuario = $("#usuario").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();
        let password2 = $("#password2").val();
        let fechaNacimiento = $("#fechaNacimiento").val();
        let terminos = $("#terminos").is(":checked");

        let errores = [];

        // VALIDAR CAMPOS VACIOS 
        if (!nombre || !usuario || !email || !password || !password2 || !fechaNacimiento) {
            errores.push("Todos los campos obligatorios deben completarse.");
        }

        // VALIDAR FORMATO EMAIL
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errores.push("El correo electrónico no es válido.");
        }

        // VALIDAR CONTRASEÑA COINCIDAN 
        if (password !== password2) {
            errores.push("Las contraseñas no coinciden.");
        }

        // VALIDAR CONTRASEÑA 
        let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
        if (!passwordRegex.test(password)) {
            errores.push("La contraseña debe tener entre 6 y 18 caracteres, incluir al menos un número y una letra mayúscula.");
        }

        // VALIDAR EDAD (13 años)
        let fechaNac = new Date(fechaNacimiento);
        let edad = new Date().getFullYear() - fechaNac.getFullYear();
        if (edad < 13) {
            errores.push("Debes tener al menos 13 años para registrarte.");
        }

        // VALIDAR CAMBIOS 
        if (!terminos) {
            errores.push("Debes aceptar los términos y condiciones.");
        }

        // MOSTRAR ERRORES O ENVIAR FORMULARIO
        if (errores.length > 0) {
            alert(errores.join("\n")); //MUESTRA ERRORES 
        } else {
            alert("Registro exitoso. ¡Bienvenido!");
            $("#registroForm")[0].reset(); // LIMPIA FORMULARIO
        }
    });
});
