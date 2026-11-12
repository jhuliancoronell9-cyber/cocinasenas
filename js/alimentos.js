
/* =========================================
   COCINASEÑAS
   Base de datos de alimentos
========================================= */

const alimentos = [

    {
        nombre: "Hamburguesa",
        archivo: "HAMBURGUESA",
        categoria: "Comida rápida"
    },
    {
        nombre: "Helado",
        archivo: "HELADO",
        categoria: "Postres"
    },
    {
        nombre: "Hígado",
        archivo: "HIGADO",
        categoria: "Carnes"
    },
    {
        nombre: "Huevo",
        archivo: "HUEVO",
        categoria: "Alimentos"
    },
    {
        nombre: "Jamón",
        archivo: "JAMON",
        categoria: "Carnes"
    },
    {
        nombre: "Jugo",
        archivo: "JUGO",
        categoria: "Bebidas"
    },
    {
        nombre: "Leche",
        archivo: "LECHE",
        categoria: "Bebidas"
    },
    {
        nombre: "Lenteja",
        archivo: "LENTEJA",
        categoria: "Legumbres"
    },
    {
        nombre: "Lleno",
        archivo: "LLENO",
        categoria: "Expresiones"
    },
    {
        nombre: "Mantequilla",
        archivo: "MANTEQUILLA",
        categoria: "Alimentos"
    },
    {
        nombre: "Mazorca",
        archivo: "MAZORCA",
        categoria: "Vegetales"
    },
    {
        nombre: "Mermelada",
        archivo: "MERMELADA",
        categoria: "Alimentos"
    },
    {
        nombre: "Naranja",
        archivo: "NARANJA",
        categoria: "Frutas"
    },
    {
        nombre: "Oler",
        archivo: "OLER",
        categoria: "Acciones"
    },
    {
        nombre: "Pan",
        archivo: "PAN",
        categoria: "Alimentos"
    },
    {
        nombre: "Panela",
        archivo: "PANELA",
        categoria: "Alimentos"
    },
    {
        nombre: "Papa",
        archivo: "PAPA",
        categoria: "Vegetales"
    },
    {
        nombre: "Perro caliente",
        archivo: "PERRO_CALIENTE",
        categoria: "Comida rápida"
    },
    {
        nombre: "Pizza",
        archivo: "PIZZA",
        categoria: "Comida rápida"
    },
    {
        nombre: "Pollo",
        archivo: "POLLO",
        categoria: "Carnes"
    },
    {
        nombre: "Ponqué (torta)",
        archivo: "PONQUE_TORTA",
        categoria: "Postres"
    },
    {
        nombre: "Rico",
        archivo: "RICO",
        categoria: "Expresiones"
    },
    {
        nombre: "Sal",
        archivo: "SAL",
        categoria: "Condimentos"
    },
    {
        nombre: "Salchicha",
        archivo: "SALCHICHA",
        categoria: "Carnes"
    },
    {
        nombre: "Salsa de tomate",
        archivo: "SALSA_DE_TOMATE",
        categoria: "Condimentos"
    },
    {
        nombre: "Sopa",
        archivo: "SOPA",
        categoria: "Comidas"
    },
    {
        nombre: "Té",
        archivo: "TE",
        categoria: "Bebidas"
    },
    {
        nombre: "Verdura",
        archivo: "VERDURA",
        categoria: "Vegetales"
    },
    {
        nombre: "Yuca",
        archivo: "YUCA",
        categoria: "Vegetales"
    },
    {
        nombre: "Zanahoria",
        archivo: "ZANAHORIA",
        categoria: "Vegetales"
    }

];


/* =========================================
   GENERAR RUTAS DE ARCHIVOS
========================================= */

function obtenerImagenSena(alimento) {
    return `Contenido/señas/señas_${alimento.archivo}.png`;
}

function obtenerImagenAlimento(alimento) {
    return `Contenido/alimentos/alimentos_${alimento.archivo}.png`;
}

function obtenerVideoSena(alimento) {
    return `Contenido/videos/videos_${alimento.archivo}.mp4`;
}


/* =========================================
   BUSCAR ALIMENTO POR SU NOMBRE
========================================= */

function buscarAlimento(nombre) {

    const busqueda = nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    return alimentos.find(alimento => {

        const nombreAlimento = alimento.nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        return nombreAlimento === busqueda;

    });

}


/* =========================================
   OBTENER ALIMENTOS ALEATORIOS
========================================= */

function obtenerAlimentosAleatorios(cantidad) {

    const copia = [...alimentos];

    for (let i = copia.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];

    }

    return copia.slice(0, cantidad);

}


/* =========================================
   ROLES EN EL PLATILLO (juego "arma el pedido")
   Cada palabra de alimento pertenece a un rol.
   La lista de 30 palabras no se modifica.
========================================= */

const ROLES_PLATILLO = [
    {
        id: "entrada",
        titulo: "ENTRADA",
        icono: "🥣",
        palabras: ["SOPA", "LENTEJA", "HUEVO", "VERDURA", "ZANAHORIA"]
    },
    {
        id: "fuerte",
        titulo: "PLATO FUERTE",
        icono: "🍽️",
        palabras: ["HIGADO", "POLLO", "HAMBURGUESA", "PIZZA", "PERRO_CALIENTE", "SALCHICHA", "JAMON"]
    },
    {
        id: "acompanamiento",
        titulo: "ACOMPAÑAMIENTO",
        icono: "🥔",
        palabras: ["PAPA", "YUCA", "MAZORCA", "PAN", "SALSA_DE_TOMATE", "MANTEQUILLA", "SAL"]
    },
    {
        id: "bebida",
        titulo: "BEBIDA",
        icono: "🥤",
        palabras: ["JUGO", "LECHE", "TE", "PANELA"]
    },
    {
        id: "postre",
        titulo: "POSTRE",
        icono: "🍰",
        palabras: ["HELADO", "PONQUE_TORTA", "NARANJA", "MERMELADA"]
    }
];

/* Conceptos que no son ingredientes: se usan como
   "reacción del cliente" al terminar cada platillo. */
const ARCHIVOS_REACCION = ["RICO", "OLER", "LLENO"];


/* =========================================
   FUNCIONES DE APOYO PARA ROLES
========================================= */

function buscarPorArchivo(archivo) {

    return alimentos.find(alimento => alimento.archivo === archivo);

}

function obtenerAlimentosDeRol(rol) {

    return rol.palabras
        .map(buscarPorArchivo)
        .filter(Boolean);

}

function obtenerReacciones() {

    return ARCHIVOS_REACCION
        .map(buscarPorArchivo)
        .filter(Boolean);

}
