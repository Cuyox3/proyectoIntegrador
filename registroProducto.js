/**
 * Green-Nova - Registro de Productos

 */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistroProducto");
    const idInput = document.getElementById("idProducto");

    // Función para calcular y asignar el siguiente ID secuencial disponible
    const generarSiguienteId = () => {
        let ultimoId = localStorage.getItem("ultimoIdProducto");
        // Si no existe, iniciamos en 1000 por estética profesional
        let nuevoId = ultimoId ? parseInt(ultimoId) + 1 : 1001;
        if (idInput) {
            idInput.value = `GN-${nuevoId}`;
        }
    };

    // Inicializamos el ID en el arranque
    generarSiguienteId();

    form.addEventListener("submit", (event) => {
        // Validación nativa de Bootstrap
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Detiene el refresco de pantalla para procesar el objeto

            // Recolectamos los campos técnicos de la descripción
            const detallesDescripcion = {
                luz: document.getElementById("luzProducto").value.trim() || "No especificado",
                riego: document.getElementById("riegoProducto").value.trim() || "No especificado",
                funcion: document.getElementById("funcionProducto").value.trim() || "No especificado",
                descripcionCorta: document.getElementById("descripcionCorta").value.trim() || "Sin descripción corta"
            };

            // Construimos la estructura final solicitada del Producto
            const nuevoProducto = {
                id: idInput.value.trim(),
                nombre: document.getElementById("nombreProducto").value.trim(),
                tipo: document.getElementById("tipoProducto").value,
                precio: parseFloat(document.getElementById("precioProducto").value).toFixed(2),
                imagen: document.getElementById("imagenProducto").files[0]?.name || "default.jpg",
                // La propiedad "descripcion" contendrá el sub-objeto estructurado
                descripcion: detallesDescripcion
            };

            // Muestra en consola el objeto final para verificar que los datos entren correctamente
            console.log("Producto Registrado de manera exitosa:", nuevoProducto);

            alert(`¡Producto registrado exitosamente!\nID: ${nuevoProducto.id}\nNombre: ${nuevoProducto.nombre}\nTipo: ${nuevoProducto.tipo}`);

            // Extraemos la parte numérica si el ID conservaba el prefijo secuencial original para actualizar el consecutivo
            const matchId = nuevoProducto.id.match(/\d+/);
            if (matchId) {
                localStorage.setItem("ultimoIdProducto", matchId[0]);
            }

            // Reseteo visual del formulario
            form.reset();
            form.classList.remove("was-validated");

            // Regeneramos el ID consecutivo para la siguiente captura
            generarSiguienteId();
            return;
        }

        form.classList.add("was-validated");
    }, false);
});