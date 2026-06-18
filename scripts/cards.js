import { plantasExterior, plantasInterior } from './productos.js'; 

const contenedorFila = document.getElementById("prodRow");
const exteriorBtn = document.getElementById("exteriorBtn");
const interiorBtn = document.getElementById("interiorBtn");

function cargarTarjetas(arregloPlantas) {
    contenedorFila.innerHTML = ""; // Limpiamos el contenedor

    // Verificamos que el arreglo exista y tenga elementos
    if (arregloPlantas && arregloPlantas.length > 0) {
        arregloPlantas.forEach(planta => {
            
           
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
                            
                            <button class="btn btn-success mt-auto">Añadir al jardín</button>
                        </div>
                    </div>
                </div>
            `;
            contenedorFila.insertAdjacentHTML("beforeend", tarjetaHtml);
        });
    } else {
        contenedorFila.innerHTML = "<p class='text-center'>No hay plantas disponibles en este momento.</p>";
    }
}
interiorBtn.addEventListener("click", () => cargarTarjetas(plantasInterior));
exteriorBtn.addEventListener("click", () => cargarTarjetas(plantasExterior));

const botonesFiltro = document.querySelectorAll(".btn-filtro");

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", function() {
        
        botonesFiltro.forEach(btn => btn.classList.remove("active"));
        
        this.classList.add("active");
    });
});