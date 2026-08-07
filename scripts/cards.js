// 1. Seleccionamos el contenedor donde se dibujarán las tarjetas (el <div id="prodRow">)
const prodRow = document.getElementById('prodRow');

// 2. Función para crear e inyectar las tarjetas en el HTML usando Bootstrap
function mostrarProductos(listaProductos) {
    prodRow.innerHTML = ''; // Limpiamos el contenedor por si había algo antes

    listaProductos.forEach(producto => {
        // Nota cómo usamos producto.nombre y producto.precio (igual que en tu Producto.java)
        const cardHTML = `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 250px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold" style="font-family: var(--font-work-sans);">${producto.nombre}</h5>
                        <h6 class="text-success mb-3 fs-5">$${producto.precio} MXN</h6>
                        <p class="card-text small text-muted mb-4" style="font-family: var(--font-inter);">${producto.descripcion ? producto.descripcion.substring(0, 80) : ''}...</p>
                        
                        <!-- El botón se empuja hacia abajo gracias al mt-auto -->
                        <button class="btn btn-success mt-auto w-100 rounded-pill">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        `;
        
        // Inyectamos la tarjeta en el contenedor HTML
        prodRow.innerHTML += cardHTML;
    });
}

// 3. Función que se conecta a tu Backend con fetch
async function cargarProductosDesdeBackend() {
    try {
        // Hacemos la petición GET a tu API de Spring Boot
        const respuesta = await fetch('http://localhost:8080/api/productos');
        
        if (respuesta.ok) {
            const productosBD = await respuesta.json(); // Convertimos la respuesta a JSON
            mostrarProductos(productosBD); // Dibujamos los productos en la pantalla
        } else {
            console.error("Error en la respuesta del servidor");
            prodRow.innerHTML = '<p class="text-center text-danger">Error al cargar los productos desde el servidor.</p>';
        }
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        prodRow.innerHTML = '<p class="text-center text-danger">No se pudo conectar con el backend. Verifica que Spring Boot esté corriendo.</p>';
    }
}

// 4. Llamamos a la función principal justo cuando la página HTML termine de cargar
document.addEventListener('DOMContentLoaded', () => {
    cargarProductosDesdeBackend();
});