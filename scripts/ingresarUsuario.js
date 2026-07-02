/**
 * Validaciones y autenticación del lado del cliente 
 */

// Función para mostrar alertas dinámicas usando Bootstrap 
function mostrarAlerta(mensaje, tipo) {
    let contenedorAlertas = document.getElementById("alertas");

    if (!contenedorAlertas) { 
        contenedorAlertas = document.createElement("div"); 
        contenedorAlertas.id = "alertas"; 
        
        const formulario = document.querySelector(".form-box"); 
        if (formulario) {
            formulario.parentNode.insertBefore(contenedorAlertas, formulario); 
        } else {
            document.body.appendChild(contenedorAlertas);
        }
    }

    contenedorAlertas.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `; 
}

//  Función para asegurar que el usuario de prueba exista en Local Storage
function inicializarUsuarioPrueba() {
    // Recuperamos los usuarios existentes o creamos un arreglo vacío si no hay ninguno
    let usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    
    // Buscamos si ya existe el correo para no duplicarlo cada vez que recargues
    const existeGreenNova = usuarios.some(user => user.usuario === "green.nova@gmail.com");

    if (!existeGreenNova) {
        const usuarioPrueba = {
            usuario: "green.nova@gmail.com", 
            password: "1234green",
            nombre: "Green Nova Admin"
        };
        
        // Agregamos el nuevo usuario al arreglo y lo guardamos
        usuarios.push(usuarioPrueba);
        localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));
        console.log("Usuario de prueba Green-Nova almacenado en Local Storage de manera exitosa.");
    }
}

// Función para procesar y validar el acceso de un usuario
function autenticarUsuario(event) {
    event.preventDefault(); 

    // Ajustado a "username" en lugar de "email" para alinearse a la instrucción "nombre de usuario"
    const userInput = document.getElementById("login-username") || document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");

    if (!userInput || !passwordInput) return;

    const userValue = userInput.value.trim();
    const passwordValue = passwordInput.value;

    // 1. Validación de campos obligatorios vacíos
    if (userValue === "" || passwordValue === "") {
        mostrarAlerta("Todos los campos son obligatorios.", "danger");
        return;
    }

    // 2. Recuperar usuarios desde localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    // 3. Buscar correspondencia de credenciales (revisa tanto .usuario como .email por si acaso)
    const usuarioValido = usuarios.find(user => 
        (user.usuario === userValue || user.email === userValue) && user.password === passwordValue
    );

    if (usuarioValido) {
        sessionStorage.setItem("sesionActiva", JSON.stringify({
            nombre: usuarioValido.nombre,
            usuario: usuarioValido.usuario || usuarioValido.email
        }));

        mostrarAlerta("¡Inicio de sesión exitoso! Redirigiendo...", "success");

        // 4. Redirección automática tras 1.5 segundos
        setTimeout(() => {
            window.location.href = "../index.html"; 
        }, 1500);

    } else {
        // Mensaje explícito para usuario o contraseña inválidos
        mostrarAlerta("El nombre de usuario o la contraseña son incorrectos.", "danger");
    }
}

// Asegurar el montaje de los escuchas de eventos una vez que el DOM esté completamente listo
document.addEventListener("DOMContentLoaded", () => {
    // Inicializar el almacenamiento del usuario de prueba requerido
    inicializarUsuarioPrueba();

    const formularioLogin = document.getElementById("login-form");
    
    if (formularioLogin) {
        formularioLogin.addEventListener("submit", autenticarUsuario);
        console.log("Formulario de login detectado y vinculado correctamente.");
    } else {
        console.error("Error: No se pudo encontrar el elemento con ID 'login-form'.");
    }
});