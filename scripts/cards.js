import { plantasExterior, plantasInterior, macetas, accesorios, suculentas, cactus } from "./productos.js";
const productos=JSON.parse(localStorage.getItem("productoNuevo"))||[];
console.log("Verificando contendido de localStorage",productos)

//console.log("Verificando contendido de productos nuevos",productos)


const contenedorFila = document.getElementById("prodRow");
const exteriorBtn = document.getElementById("exteriorBtn");
const interiorBtn = document.getElementById("interiorBtn");
const macetasBtn = document.getElementById("macetasBtn");
const accesoriosBtn = document.getElementById("accesoriosBtn");
const suculentasBtn = document.getElementById("suculentasBtn");
const cactusBtn = document.getElementById("cactusBtn");
const todosBtn = document.getElementById("todosBtn");
const nuevoArticulo=document.getElementById("nuevoArticulo");

const botonesFiltro = document.querySelectorAll(".btn-filtro");

// funcion para renderizar cualquier tipo de producto
function renderizarTarjetas(arregloProductos, mensajeVacio = "No hay productos disponibles.") {
    contenedorFila.innerHTML = ""; 

  // Verificamos que el arreglo exista y tenga elementos
  if (arregloPlantas && arregloPlantas.length > 0) {
    arregloPlantas.forEach((planta) => {
      const tarjetaHtml = `
                <div class="col-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${planta.imagen}" class="card-img-top p-3" alt="${planta.nombreProducto}" style="height: 250px; object-fit: cover; border-radius: 20px;">
                        
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate" title="${planta.nombreProducto}">
                                ${planta.nombreProducto}
                            </h5>
                            
                            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate" title="${planta.precioProducto}">
                                ${planta.precioProducto}
                            </h6>
                             <p class="card-text small mb-1">
                                <strong>luz:</strong> ${planta.luz}
                            </p>
                              <p class="card-text small mb-1">
                                <strong>Riego:</strong> ${planta.riego}
                            </p>
                              <p class="card-text small mb-1">
                                <strong>Funcion:</strong> ${planta.funcion}
                            </p>
                            
                            <p class="card-text small mb-1">
                                <strong>Descripcion:</strong> ${planta.descripcion}
                            </p>
                           
                            
                            
                            <button class="btn btn-success mt-auto">Comprar</button>
                        </div>
                    </div>
                </div>
            `;
      contenedorFila.insertAdjacentHTML("beforeend", tarjetaHtml);
    });
  } else {
    contenedorFila.innerHTML =
      "<p class='text-center'>No hay plantas disponibles en este momento.</p>";
  }
}

//Prueba nueva plantilla

export function cargarTarjetasNueva(nuevosProductos) {
  contenedorFila.innerHTML = ""; // Limpiamos el contenedor

  // Verificamos que el arreglo exista y tenga elementos
  if (nuevosProductos && nuevosProductos.length > 0) {
    nuevosProductos.forEach((artNuevo) => {
      const tarjetaHtml = `
                
                <div class="col-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <!-- Cargamos Imagen -->
                        <img src="./img/${artNuevo.imagen}" class="card-img-top p-3" >
                        
                        <div class="card-body d-flex flex-column">
                            <!-- Nombre del Producto -->
                            <h5 class="text-success fw-bold fs-5 mb-2" title="${artNuevo.nombreProducto}">
                            ${artNuevo.nombreProducto}
                            </h5>
                            
                            
                            <!-- Precio del Producto -->
                            <p class="text-success fw-bold fs-5 mb-2">
                               $${artNuevo.precioProducto}
                            </p>
                           
                            
                            <!-- Tipo y Detalles del cuidado -->
                            <p class="card-text small mb-1 text-muted">
                                <strong>Riego:</strong> ${artNuevo.riego}  
                            </p>
                            <p class="card-text small mb-1 text-muted">
                                <strong>Luz:</strong> ${artNuevo.luz} 
                            </p>
                            
                             <p class="card-text small mb-1 text-muted">
                                <strong>Funcion:</strong> ${artNuevo.funcion} 
                            </p>

                            <!-- Descripción -->
                            <p class="card-text small mb-3">
                                <strong>Descripcion:</strong>${artNuevo.descripcion}
                            </p>
                            
                            <button class="btn btn-success mt-auto">Comprar</button>
                        </div>
                    </div>
                </div>
            ` ;
      contenedorFila.insertAdjacentHTML("beforeend", tarjetaHtml);
    });
  } else {
    contenedorFila.innerHTML =
      "<p class='text-center'>No hay Productos nuevos disponibles en este momento.</p>";
  }
}







//--------------------------------------------------

// --- Configuración de los botones  ---
function cargarTodos() {
  contenedorFila.innerHTML = "";

  plantasInterior.forEach((planta) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${planta.imagen}" class="card-img-top p-3" alt="${planta.nombreProducto}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${planta.nombreProducto}">${planta.nombreProducto}</h5>
            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate">${planta.precioProducto}</h6>
            <p class="card-text small mb-1"><strong>Luz:</strong> ${planta.luz}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.riego}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.funcion}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.descripcion}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  plantasExterior.forEach((planta) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${planta.imagen}" class="card-img-top p-3" alt="${planta.nombreProducto}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${planta.nombreProducto}">${planta.nombreProducto}</h5>
            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate">${planta.precioProducto}</h6>
            <p class="card-text small mb-1"><strong>Luz:</strong> ${planta.luz}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.riego}</p>
              <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.funcion}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.descripcion}</p>

            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  macetas.forEach((maceta) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${maceta.imagen}" class="card-img-top p-3" alt="${maceta.nombreProducto}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${maceta.nombreProducto}">${maceta.nombreProducto}</h5>
            <p class="text-success fw-bold fs-5 mb-2">$${maceta.precioProducto}</p>
           <p class="card-text small mb-1"><strong>Luz:</strong> ${planta.luz}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.riego}</p>
              <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.funcion}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.descripcion}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  suculentas.forEach((suculenta) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${suculenta.imagen}" class="card-img-top p-3" alt="${suculenta.nombreProducto}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${suculenta.nombre}">${suculenta.nombre}</h5>
            <p class="text-success fw-bold fs-5 mb-2">$${suculenta.precioProducto}</p>
           <p class="card-text small mb-1"><strong>Luz:</strong> ${planta.luz}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.riego}</p>
              <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.funcion}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.descripcion}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  cactus.forEach((c) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${c.imagen}" class="card-img-top p-3" alt="${c.nombreProducto}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${c.nombreProducto}">${c.nombreProducto}</h5>
            <p class="text-success fw-bold fs-5 mb-2">$${c.precioProducto}</p>
           <p class="card-text small mb-1"><strong>Luz:</strong> ${planta.luz}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.riego}</p>
              <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.funcion}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.descripcion}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  accesorios.forEach((accesorio) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${accesorio.imagen}" class="card-img-top p-3" alt="${accesorio.nombreProducto}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${accesorio.nombreProducto}">${accesorio.nombreProducto}</h5>
            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate">${accesorio.precioProducto}</h6>
            <p class="card-text small mb-1"><strong>Luz:</strong> ${planta.luz}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.riego}</p>
              <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.funcion}</p>
            <p class="card-text small mb-3"><strong>Riego:</strong> ${planta.descripcion}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  //NuevoProducto
    productos.forEach((productos) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${productos.imagen}" class="card-img-top p-3" alt="${productos.nombreProducto}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${productos.nombre}">${productos.imagen}</h5>
            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate">${productos.descripcion}</h6>
            <p class="card-text small mb-1"><strong>Función:</strong> ${productos.precioProducto}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });






}

// asignar Event Listeners 
todosBtn?.addEventListener("click", cargarTodos);
interiorBtn?.addEventListener("click", () => renderizarTarjetas(plantasInterior, "No hay plantas de interior."));
exteriorBtn?.addEventListener("click", () => renderizarTarjetas(plantasExterior, "No hay plantas de exterior."));
macetasBtn?.addEventListener("click", () => renderizarTarjetas(macetas, "No hay macetas disponibles."));
suculentasBtn?.addEventListener("click", () => renderizarTarjetas(suculentas, "No hay suculentas disponibles."));
cactusBtn?.addEventListener("click", () => renderizarTarjetas(cactus, "No hay cactus disponibles."));
accesoriosBtn?.addEventListener("click", () => renderizarTarjetas(accesorios, "No hay accesorios disponibles."));



todosBtn.addEventListener("click", cargarTodos);
interiorBtn.addEventListener("click", () => cargarTarjetas(plantasInterior));
exteriorBtn.addEventListener("click", () => cargarTarjetas(plantasExterior));
macetasBtn.addEventListener("click", () => cargarTarjetas(macetas));
suculentasBtn.addEventListener("click", () => cargarTarjetas(suculentas));
cactusBtn.addEventListener("click", () => cargarTarjetas(cactus));
accesoriosBtn.addEventListener("click", () => cargarTarjetas(accesorios));
nuevoArticulo.addEventListener("click", () => cargarTarjetasNueva(productos));

//------------------------------------------------------------

// Lógica visual de los botones activos (Clases Bootstrap)
botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", function () {
        botonesFiltro.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
    });
});
//--------------------------------------------------

//Esta funcion se hace para que en el momento que se cargue productos.html en vez de que salga vacia se cargue los productos nuevos en automatico

const productosGuardados=JSON.parse(localStorage.getItem("productoNuevo"))||[];
if(productosGuardados.length>0){
  cargarTarjetasNueva(productosGuardados);
}
