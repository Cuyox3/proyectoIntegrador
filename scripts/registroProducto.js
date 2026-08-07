async function guardarProducto() {
    // ... (Mantén todas tus validaciones previas aquí)

    // Construimos el objeto producto para el backend
    // Nota: Asegúrate de que los nombres de las propiedades coincidan con el modelo Producto.java
    const nuevoProducto = {
        nombre: nombreProducto,
        tipoProducto: tipoProducto,
        precio: Number(precioProducto),
        imagen: imagen.files[0]?.name || "sin-imagen.jpg",
        rLuz: luz,
        fRiego: riego,
        funcion: funcion,
        descripcion: descripcion
    };

    try {
        const respuesta = await fetch('http://localhost:8080/api/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        });

        if (respuesta.ok) {
            mostrarAlerta("Producto guardado correctamente en la base de datos.", "success");
            document.getElementById("formRegistroProducto").reset();
        } else {
            const errorData = await respuesta.json();
            mostrarAlerta("Error al guardar: " + (errorData.message || "Revisa el servidor"), "danger");
        }
    } catch (error) {
        console.error("Error:", error);
        mostrarAlerta("No se pudo conectar con el servidor.", "danger");
    }
}