import { plantasExterior, plantasInterior, macetas, accesorios, suculentas, cactus } from "./productos.js";


// Obtener los elementos del DOM
const contenedorFila = document.getElementById("prodRow");
const exteriorBtn = document.getElementById("exteriorBtn");
const interiorBtn = document.getElementById("interiorBtn");
const macetasBtn = document.getElementById("macetasBtn");
const accesoriosBtn = document.getElementById("accesoriosBtn");
const suculentasBtn = document.getElementById("suculentasBtn");
const cactusBtn = document.getElementById("cactusBtn");
const todosBtn = document.getElementById("todosBtn");

const botonesFiltro = document.querySelectorAll(".btn-filtro");

//Funcion para cargar tarjetas de plantas
function cargarTarjetas(arregloPlantas) {
  contenedorFila.innerHTML = ""; // Limpiamos el contenedor

  // Verificamos que el arreglo exista y tenga elementos
  if (arregloPlantas && arregloPlantas.length > 0) {
    arregloPlantas.forEach((planta) => {
      const tarjetaHtml = `
                <div class="col-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${planta.imagen}" class="card-img-top p-3" alt="${planta.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
                        
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate" title="${planta.nombre}">
                                ${planta.nombre}
                            </h5>
                            
                            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate" title="${planta.nombre}">
                                ${planta.nombre}
                            </h6>
                            
                            <p class="card-text small mb-1">
                                <strong>Precio:</strong> $${planta.precio}
                            </p>
                            <p class="card-text small mb-3">
                                <strong>Descripción:</strong> ${planta.descripcion}
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
//--------------------------------------------------
//Funcion para cargar tarjetas de macetas
export function cargarTarjetasMacetas(arregloMacetas) {
  contenedorFila.innerHTML = ""; // Limpiamos el contenedor

  // Verificamos que el arreglo exista y tenga elementos
  if (arregloMacetas && arregloMacetas.length > 0) {
    arregloMacetas.forEach((maceta) => {
      const tarjetaHtml = `
                <div class="col-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${maceta.imagen}" class="card-img-top p-3" alt="${maceta.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
                        
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate" title="${maceta.nombre}">
                                ${maceta.nombre}
                            </h5>
                            
                            <p class="text-success fw-bold fs-5 mb-2">
                                $${maceta.precio}
                            </p>
                            
                            <p class="card-text small mb-1">
                                ${maceta.descripcion}
                            </p>
                            <p class="card-text small mb-3 text-muted">
                                ${maceta.descripcion}
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
      "<p class='text-center'>No hay macetas disponibles en este momento.</p>";
  }
}
//--------------------------------------------------
//Funcion para cargar tarjetas de suculentas
export function cargarTarjetasSuculentas(arregloSuculentas) {
  contenedorFila.innerHTML = ""; // Limpiamos el contenedor

  // Verificamos que el arreglo exista y tenga elementos
  if (arregloSuculentas && arregloSuculentas.length > 0) {
    arregloSuculentas.forEach((suculenta) => {
      const tarjetaHtml = `
                <div class="col-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${suculenta.imagen}" class="card-img-top p-3" alt="${suculenta.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
                        
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate" title="${suculenta.nombre}">
                                ${suculenta.nombre}
                            </h5>
                            
                            <p class="text-success fw-bold fs-5 mb-2">
                                $${suculenta.precio}
                            </p>
                            
                            <p class="card-text small mb-1">
                                ${suculenta.descripcion}
                            </p>
                            <p class="card-text small mb-3 text-muted">
                                ${suculenta.descripcion}
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
      "<p class='text-center'>No hay suculentas disponibles en este momento.</p>";
  }
}
//--------------------------------------------------
//Funcion para cargar tarjetas de cactus
export function cargarTarjetasCactus(arregloCactus) {
  contenedorFila.innerHTML = ""; // Limpiamos el contenedor

  // Verificamos que el arreglo exista y tenga elementos
  if (arregloCactus && arregloCactus.length > 0) {
    arregloCactus.forEach((cactus) => {
      const tarjetaHtml = `
                <div class="col-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${cactus.imagen}" class="card-img-top p-3" alt="${cactus.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
                        
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate" title="${cactus.nombre}">
                                ${cactus.nombre}
                            </h5>
                            
                            <p class="text-success fw-bold fs-5 mb-2">
                                $${cactus.precio}
                            </p>
                            
                            <p class="card-text small mb-1">
                                ${cactus.descripcion}
                            </p>
                            <p class="card-text small mb-3 text-muted">
                                ${cactus.descripcion}
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
      "<p class='text-center'>No hay cactus disponibles en este momento.</p>";
  }
}
//--------------------------------------------------
//Funcion para cargar tarjetas de accesorios
export function cargarTarjetasAccesorios(arregloAccesorios) {
  contenedorFila.innerHTML = ""; // Limpiamos el contenedor

  // Verificamos que el arreglo exista y tenga elementos
  if (arregloAccesorios && arregloAccesorios.length > 0) {
    arregloAccesorios.forEach((accesorio) => {
      const tarjetaHtml = `
                <div class="col-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${accesorio.imagen}" class="card-img-top p-3" alt="${accesorio.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
                        
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate" title="${accesorio.nombre}">
                                ${accesorio.nombre}
                            </h5>
                            
                            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate" title="${accesorio.nombre}">
                                ${accesorio.nombre}
                            </h6>

                            <p class="card-text small mb-1">
                                <strong>Precio:</strong> $${accesorio.precio}
                            </p>

                            <p class="card-text small mb-1">
                                <strong>Descripción:</strong> ${accesorio.descripcion}
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
      "<p class='text-center'>No hay accesorios disponibles en este momento.</p>";
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
          <img src="${planta.imagen}" class="card-img-top p-3" alt="${planta.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${planta.nombre}">${planta.nombre}</h5>
            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate">${planta.nombre}</h6>
            <p class="card-text small mb-1"><strong>Descripcion:</strong> ${planta.descripcion}</p>
            <p class="card-text small mb-3"><strong>Precio:</strong> ${planta.precio}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  plantasExterior.forEach((planta) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${planta.imagen}" class="card-img-top p-3" alt="${planta.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${planta.nombre}">${planta.nombre}</h5>
            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate">${planta.nombre}</h6>
            <p class="card-text small mb-1"><strong>Descripcion:</strong> ${planta.descripcion}</p>
            <p class="card-text small mb-3"><strong>Precio:</strong> ${planta.precio}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  macetas.forEach((maceta) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${maceta.imagen}" class="card-img-top p-3" alt="${maceta.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${maceta.nombre}">${maceta.nombre}</h5>
            <p class="text-success fw-bold fs-5 mb-2">$${maceta.precio}</p>
            <p class="card-text small mb-1">${maceta.descripcion}</p>
            <p class="card-text small mb-3 text-muted">${maceta.descripcion}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  suculentas.forEach((suculenta) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${suculenta.imagen}" class="card-img-top p-3" alt="${suculenta.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${suculenta.nombre}">${suculenta.nombre}</h5>
            <p class="text-success fw-bold fs-5 mb-2">$${suculenta.precio}</p>
            <p class="card-text small mb-1">${suculenta.descripcion}</p>
            <p class="card-text small mb-3 text-muted">${suculenta.descripcion}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  cactus.forEach((c) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${c.imagen}" class="card-img-top p-3" alt="${c.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${c.nombre}">${c.nombre}</h5>
            <p class="text-success fw-bold fs-5 mb-2">$${c.precio}</p>
            <p class="card-text small mb-1">${c.descripcion}</p>
            <p class="card-text small mb-3 text-muted">${c.descripcion}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });

  accesorios.forEach((accesorio) => {
    contenedorFila.insertAdjacentHTML("beforeend", `
      <div class="col-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${accesorio.imagen}" class="card-img-top p-3" alt="${accesorio.nombre}" style="height: 250px; object-fit: cover; border-radius: 20px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate" title="${accesorio.nombre}">${accesorio.nombre}</h5>
            <h6 class="card-subtitle mb-3 text-muted fst-italic text-truncate">${accesorio.nombre}</h6>
            <p class="card-text small mb-1"><strong>Función:</strong> ${accesorio.descripcion}</p>
            <p class="card-text small mb-3 text-muted"><strong>Precio:</strong> $${accesorio.precio}</p>
            <button class="btn btn-success mt-auto">Comprar</button>
          </div>
        </div>
      </div>`);
  });
}




todosBtn.addEventListener("click", cargarTodos);
interiorBtn.addEventListener("click", () => cargarTarjetas(plantasInterior));
exteriorBtn.addEventListener("click", () => cargarTarjetas(plantasExterior));
macetasBtn.addEventListener("click", () => cargarTarjetasMacetas(macetas));
suculentasBtn.addEventListener("click", () => cargarTarjetasSuculentas(suculentas));
cactusBtn.addEventListener("click", () => cargarTarjetasCactus(cactus));
accesoriosBtn.addEventListener("click", () => cargarTarjetasAccesorios(accesorios));
//------------------------------------------------------------

// Lógica visual de los botones activos (Clases Bootstrap)
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", function () {
    botonesFiltro.forEach((btn) => btn.classList.remove("active"));

    this.classList.add("active");
  });
});
//--------------------------------------------------