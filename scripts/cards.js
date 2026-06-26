import { plantasExterior, plantasInterior, macetas, accesorios, suculentas, cactus } from "./productos.js";


const contenedorFila = document.getElementById("prodRow");
const exteriorBtn = document.getElementById("exteriorBtn");
const interiorBtn = document.getElementById("interiorBtn");
const macetasBtn = document.getElementById("macetasBtn");
const accesoriosBtn = document.getElementById("accesoriosBtn");
const suculentasBtn = document.getElementById("suculentasBtn");
const cactusBtn = document.getElementById("cactusBtn");
const todosBtn = document.getElementById("todosBtn");

const botonesFiltro = document.querySelectorAll(".btn-filtro");

// funcion para renderizar cualquier tipo de producto
function renderizarTarjetas(arregloProductos, mensajeVacio = "No hay productos disponibles.") {
    contenedorFila.innerHTML = ""; 

    if (arregloProductos && arregloProductos.length > 0) {
        const tarjetasHtml = arregloProductos.map(producto => `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${producto.imagen}" class="card-img-top p-3" alt="${producto.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
                    
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate" title="${producto.nombre}">
                            ${producto.nombre}
                        </h5>
                        
                        <p class="text-success fw-bold fs-5 mb-2">
                            $${producto.precio || '0.00'}
                        </p>
                        
                        <p class="card-text small mb-3 text-muted">
                            ${producto.descripcion || 'Sin descripción disponible.'}
                        </p>
                        
                        <button class="btn btn-success mt-auto">Comprar</button>
                    </div>
                </div>
            </div>
        `).join("");

        contenedorFila.innerHTML = tarjetasHtml;
    } else {
        contenedorFila.innerHTML = `<p class='text-center'>${mensajeVacio}</p>`;
    }
}

// función para cargar todos los productos unidos
function cargarTodos() {
    //   usamos spread operator para unir todos los arreglos
    const todosLosProductos = [
        ...plantasInterior, 
        ...plantasExterior, 
        ...macetas, 
        ...suculentas, 
        ...cactus, 
        ...accesorios
    ];
    renderizarTarjetas(todosLosProductos, "No hay productos en la tienda en este momento.");
}

// asignar Event Listeners 
todosBtn?.addEventListener("click", cargarTodos);
interiorBtn?.addEventListener("click", () => renderizarTarjetas(plantasInterior, "No hay plantas de interior."));
exteriorBtn?.addEventListener("click", () => renderizarTarjetas(plantasExterior, "No hay plantas de exterior."));
macetasBtn?.addEventListener("click", () => renderizarTarjetas(macetas, "No hay macetas disponibles."));
suculentasBtn?.addEventListener("click", () => renderizarTarjetas(suculentas, "No hay suculentas disponibles."));
cactusBtn?.addEventListener("click", () => renderizarTarjetas(cactus, "No hay cactus disponibles."));
accesoriosBtn?.addEventListener("click", () => renderizarTarjetas(accesorios, "No hay accesorios disponibles."));

//  visual de los botones activos
botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", function () {
        botonesFiltro.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
    });
});


cargarTodos();