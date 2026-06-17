//Plantas de interior

const plantasInterior = [
    {
        id: 1,
        nombre: "Monstera Deliciosa",
        nombreComun: "Costilla de Adán",
        luz: "Indirecta brillante",
        riego: "1 vez por semana"
    },
    {
        id: 2,
        nombre: "Sansevieria Trifasciata",
        nombreComun: "Lengua de Suegra",
        luz: "Baja a alta",
        riego: "Cada 2 semanas"
    },
    {
        id: 3,
        nombre: "Epipremnum Aureum",
        nombreComun: "Poto",
        luz: "Indirecta media",
        riego: "1 vez por semana"
    },
    {
        id: 4,
        nombre: "Spathiphyllum",
        nombreComun: "Lirio de la Paz",
        luz: "Indirecta baja",
        riego: "Mantener húmedo"
    },
    {
        id: 5,
        nombre: "Ficus Elastica",
        nombreComun: "Árbol de Caucho",
        luz: "Indirecta brillante",
        riego: "Cada 7-10 días"
    },
    {
        id: 6,
        nombre: "Zamioculcas Zamiifolia",
        nombreComun: "ZZ Plant",
        luz: "Baja a media",
        riego: "Cada 2-3 semanas"
    },
    {
        id: 7,
        nombre: "Chamaedorea Elegans",
        nombreComun: "Palma de Salón",
        luz: "Indirecta media",
        riego: "1 vez por semana"
    },
    {
        id: 8,
        nombre: "Dracaena Marginata",
        nombreComun: "Drácena",
        luz: "Indirecta brillante",
        riego: "Cada 10 días"
    },
    {
        id: 9,
        nombre: "Aglaonema",
        nombreComun: "Aglaonema Roja",
        luz: "Baja a media",
        riego: "1 vez por semana"
    },
    {
        id: 10,
        nombre: "Philodendron Hederaceum",
        nombreComun: "Filodendro Corazón",
        luz: "Indirecta media",
        riego: "Cada 7 días"
    }
];

const plantasExterior = [

    {
    id: 1,
    nombre: "Lavandula spp.",
    nombreComun: "Lavanda",
    luz: "Sol directo",
    riego: "1 vez cada 1 o 2 semanas",
    imagen: "https://images.pexels.com/photos/12970054/pexels-photo-12970054.jpeg"
  },
  {
    id: 2,
    nombre: "Aloe barbadensis",
    nombreComun: "Sábila / Aloe Vera",
    luz: "Sol directo o resolana",
    riego: "1 vez cada 2 o 3 semanas",
    imagen: "https://images.pexels.com/photos/34465158/pexels-photo-34465158.jpeg"
  },
  {
    id: 3,
    nombre: "Bougainvillea spp.",
    nombreComun: "Bugambilia",
    luz: "Sol directo",
    riego: "1 o 2 veces por semana",
    imagen: "https://images.pexels.com/photos/16100361/pexels-photo-16100361.jpeg"
  },
  {
    id: 4,
    nombre: "Citrus x limon",
    nombreComun: "Limonero / Árbol de Limón",
    luz: "Sol directo",
    riego: "2 a 3 veces por semana",
    imagen: "https://images.pexels.com/photos/36977032/pexels-photo-36977032.jpeg"
  },

  {
    id: 5,
    nombre: "Pachypodium lamerei",
    nombreComun: "Palma de Madagascar",
    luz: "Sol directo",
    riego: "1 vez cada 2 o 3 semanas",
    imagen: "https://images.pexels.com/photos/31964234/pexels-photo-31964234.jpeg"
  },
  
  {
    id: 6,
    nombre: "Nephrolepis exaltata",
    nombreComun: "Helecho",
    luz: "Sombra o semisombra",
    riego: "2 a 3 veces por semana",
    imagen: "https://images.pexels.com/photos/10903254/pexels-photo-10903254.jpeg"
  },
  
  {
    id: 7,
    nombre: "Spathiphyllum wallisii",
    nombreComun: "Cuna de Moisés",
    luz: "Sombra o semisombra",
    riego: "2 a 3 veces por semana",
    imagen: "https://images.pexels.com/photos/19404633/pexels-photo-19404633.jpeg"
  },
  {
    id: 8,
    nombre: "Beaucarnea recurvata",
    nombreComun: "Pata de Elefante",
    luz: "Sol o semisombra",
    riego: "1 vez cada 2 o 3 semanas",
    imagen: "https://images.pexels.com/photos/30343682/pexels-photo-30343682.jpeg"
  },
  {
    id: 9,
    nombre: "Helianthus annuus",
    nombreComun: "Girasol",
    luz: "Sol directo",
    riego: "3 a 4 veces por semana (casi diario en calor)",
    imagen: "https://images.pexels.com/photos/14876097/pexels-photo-14876097.jpeg"
  },
  
  {
    id: 10,
    nombre: "Jasminum sambac",
    nombreComun: "Jazmín Árabe",
    luz: "Sol directo",
    riego: "2 a 3 veces por semana",
    imagen: "https://images.pexels.com/photos/37745598/pexels-photo-37745598.jpeg"
  }

];

//Macetas
const macetas = [
    {
        id: "m001", // Convertido a string
        nombre: "Cilíndricas", // Comilla cerrada
        precio: 250,
        imagen: "https://zuccudesign.com/cdn/shop/products/cilindricamediana1.jpg?v=1674328585",
        descripcionCorta: "Maceta minimalista con tonos grises o pastel.",
        descripcionLarga: "Su estética cruda combina perfecto con el verde intenso de plantas como la Monstera o el Ficus Lyrata. Al ser pesadas, le dan una estabilidad increíble a plantas altas."
    },
    {
        id: "m002",
        nombre: "Cubremacetas",
        precio: 350,
            imagen: "https://hersteragarden.com/shop/wp-content/uploads/2023/10/categoria-cubremacetas-orquideas.jpg",

        descripcionCorta: "maceta de cerámica esmaltada (normalmente blanca o negra) que se asienta sobre un soporte de madera de tres o cuatro patas que la eleva del suelo",
        descripcionLarga: "Es la favorita para poner en las esquinas de las salas de estar o junto al escritorio del jefe."
    },
    {
        id: "m003",
        nombre: "Plástico con Texturas",
        precio: 350,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_702598-MLM109425230926_042026-O.webp",

        descripcionCorta: "Son macetas de plástico de alta calidad que, visualmente, imitan a la perfección otros materiales como el tejido de ratán, la madera o la piedra tallada",
        descripcionLarga: "Tienen la estética sofisticada de una maceta pesada y costosa, pero con los beneficios del plástico: son superbaratas, ligeras, fáciles de mover y retienen excelente la humedad."
    },
    {
        id: "m004",
        nombre: "Colgantes",
        precio: 550,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_612416-MLM46471454692_062021-O.webp",

        descripcionCorta: "Suelen ser de plástico o resina ligera, vienen con cordones resistentes (o cadenas) para colgar del techo o repisas, e incorporan un pequeño tanque de agua en la base",
        descripcionLarga: "El diseño vertical está en supertendencia para aprovechar espacios pequeños. Como las plantas colgantes suelen ser difíciles de alcanzar para regar seguido, el sistema de auto-riego te ahorra tener que subirte a una silla cada tres días. Son las compañeras perfectas de los Potos"
    },
    {
        id: "m005",
        nombre: "Terracota",
        precio: 350,
        imagen: "https://agostore.es/cdn/shop/files/macetas-egipto-terracota-artesanales.jpg?v=1776795450&width=1946",
        descripcionCorta: "A pesar de los años y la tecnología, la maceta tradicional de barro color ladrillo sigue estando en el top de ventas a nivel mundial.",
        descripcionLarga: "Se han vuelto un elemento de culto para los amantes de las plantas de estilo 'vintage' o rústico. Además, los científicos de las plantas y los jardineros expertos las siguen prefiriendo por encima de cualquier otra porque es el material más sano para las raíces de la planta." // 'vintage' corregido
    }
];
