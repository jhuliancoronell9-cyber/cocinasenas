
/* =========================================
   COCINASEÑAS
   Funciones generales del proyecto
========================================= */


/* 1. MOSTRAR MENSAJES */

function mostrarMensaje(contenedor, mensaje, tipo = "normal") {

    const elemento = document.getElementById(contenedor);

    if (!elemento) {
        console.warn(`No se encontró el elemento: ${contenedor}`);
        return;
    }

    elemento.textContent = mensaje;
    elemento.className = `mensaje ${tipo}`;
    elemento.classList.remove("oculto");
}


/* 2. OCULTAR MENSAJES */

function ocultarMensaje(contenedor) {

    const elemento = document.getElementById(contenedor);

    if (!elemento) return;

    elemento.classList.add("oculto");
}


/* 3. VOLVER AL INICIO */

function volverAlInicio() {

    window.location.href = "index.html";

}


/* 4. CAMBIAR DE PÁGINA */

function navegarA(pagina) {

    window.location.href = pagina;

}


/* 5. MEZCLAR ELEMENTOS DE UNA LISTA */

function mezclarLista(lista) {

    const resultado = [...lista];

    for (let i = resultado.length - 1; i > 0; i--) {

        const posicion = Math.floor(Math.random() * (i + 1));

        [resultado[i], resultado[posicion]] =
        [resultado[posicion], resultado[i]];

    }

    return resultado;

}


/* 6. NORMALIZAR TEXTO PARA BÚSQUEDAS */

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


/* 7. FORMATEAR PUNTUACIÓN */

function formatearPuntuacion(puntos) {

    return `${puntos} puntos`;

}


/* 8. ACTUALIZAR UNA BARRA DE PROGRESO */

function actualizarProgreso(barra, actual, total) {

    const elemento = document.getElementById(barra);

    if (!elemento || total <= 0) return;

    const porcentaje = (actual / total) * 100;

    elemento.style.width = `${porcentaje}%`;

}


/* 9. MOSTRAR U OCULTAR ELEMENTOS */

function cambiarVisibilidad(elementoId, visible) {

    const elemento = document.getElementById(elementoId);

    if (!elemento) return;

    elemento.classList.toggle("oculto", !visible);

}


/* 10. AÑO ACTUAL EN EL PIE DE PÁGINA */

document.addEventListener("DOMContentLoaded", () => {

    const elementosAnio = document.querySelectorAll(".anio-actual");

    elementosAnio.forEach(elemento => {

        elemento.textContent = new Date().getFullYear();

    });

});


/* 11. IMAGEN NO DISPONIBLE
   Si una imagen no se encuentra, se avisa en pantalla
   en lugar de mostrar el ícono roto del navegador. */

function imagenNoDisponible(imagen) {

    if (!imagen || !imagen.parentNode) return;

    const aviso = document.createElement("div");

    aviso.className = "sin-recurso";
    aviso.textContent = `Falta imagen: ${imagen.alt || ""}`;

    imagen.replaceWith(aviso);

}
