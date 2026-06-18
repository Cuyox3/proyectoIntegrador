import { plantasExterior, plantasInterior, macetas } from "./productos.js";

const contenedorFila = document.getElementById("prodRow");
const exteriorBtn = document.getElementById("exteriorBtn");
const interiorBtn = document.getElementById("interiorBtn");
const macetasBtn = document.getElementById("macetasBtn");

function cargarTarjetas(arregloPlantas) {
  contenedorFila.innerHTML = ""; // Limpiamos el contenedor

  // Verificamos que el arreglo exista y tenga elementos
  if (arregloPlantas && arregloPlantas.length > 0) {
    arregloPlantas.forEach((planta) => {
      const tarjetaHtml = `
                <div class="col-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${planta.imagen}" class="card-img-top p-3" alt="${planta.nombreComun}" style="height: 250px; object-fit: cover; border-radius: 20px;">
                        
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate" title="${planta.nombreComun}">
                                ${planta.nombreComun}
                            </h5>
                            
                            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate" title="${planta.nombre}">
                                ${planta.nombre}
                            </h6>
                            
                            <p class="card-text small mb-1">
                                <strong>Luz:</strong> ${planta.luz}
                            </p>
                            <p class="card-text small mb-3">
                                <strong>Riego:</strong> ${planta.riego}
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
//Funcion para cargar tarjetas de macetas
function cargarTarjetasProductos(arregloProducto) {
  contenedorFila.innerHTML = ""; // Limpiamos el contenedor

  // Verificamos que el arreglo exista y tenga elementos
  if (arregloProducto && arregloProducto.length > 0) {
    arregloProducto.forEach((producto) => {
      const tarjetaHtml = `
                <div class="col-3 mb-4">
    <div class="card h-100 shadow-sm">
        <img src="${producto.imagen}" class="card-img-top p-3" alt="${producto.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
        
        <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate mb-1" title="${producto.nombre}">
                ${producto.nombre}
            </h5>
            
            <p class="text-success fw-bold fs-5 mb-2">
                $${producto.precio}
            </p>
            
            <p class="card-text text-muted small mb-1">
                ${producto.descripcionCorta}
            </p>

            <div class="collapse" id="descripcion-${producto.id}">
                <p class="card-text small text-secondary mt-2 pt-2 border-top">
                    ${producto.descripcionLarga}
                </p>
            </div>

            <a class="btn btn-link btn-sm text-decoration-none text-start ps-0 mb-3" 
               data-bs-toggle="collapse" 
               href="#descripcion-${producto.id}" 
               role="button" 
               aria-expanded="false">
               + Ver más
            </a>
            
            <button class="btn btn-success mt-auto btn-agregar" data-id="${producto.id}">
                Comprar
            </button>
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

//Fin de función para cargar tarjetas de macetas
interiorBtn.addEventListener("click", () => cargarTarjetas(plantasInterior));
exteriorBtn.addEventListener("click", () => cargarTarjetas(plantasExterior));
macetasBtn.addEventListener("click", () => cargarTarjetasProductos(macetas));
const botonesFiltro = document.querySelectorAll(".btn-filtro");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", function () {
    botonesFiltro.forEach((btn) => btn.classList.remove("active"));

    this.classList.add("active");
  });
});
