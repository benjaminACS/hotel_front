var passwordState = false;
function toggle(){
    if(passwordState){ //Contraseña está oculta, la muestra.
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").style.color = 'ghostwhite';
        passwordState = false; //Actualiza el estado de la contraseña a oculta.
    }else{ //Contraseña está visible, la oculta.
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").style.color = 'white';
        passwordState = true; //Actualiza el estado de la contraseña a visible.
    }            
};

function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!fullName || !age || !email || !password){ // Verificar campos requeridos.
        alert("Todos los campos son obligatorios.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Validar direcciones de correo electrónico.
    if (!emailRegex.test(email)){ //Formato de correo electrónico.
        alert("Formato de correo electrónico inválido.");
        return false;
    }

    if (parseInt(age) < 18) { //Edad mínima.
        alert("Debes ser mayor de 18 años para registrarte.");
        return false;
    }

    if (password.length < 8){ //Longitud de contraseña.
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }
    
    return true; //Si todas las validaciones pasan, el formulario es válido.
}

document.getElementById("formContainer").addEventListener("submit", function(event) {
    if (!validateForm()){ //Evitar el envío del formulario si no es válido.
        event.preventDefault();
    }
});