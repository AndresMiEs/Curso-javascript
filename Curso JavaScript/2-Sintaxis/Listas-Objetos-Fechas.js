//Listas, arrays o arreglos;

const lista = [1, "Hola", true, undefined, null];
console.log(lista);

const lista2 = new Array(2, 3, 4, 5, 6);
console.log(lista2);

const lista3 = new Array(3);
lista3[0] = "Primero";
lista3[1] = "Segundo";
lista3[2] = "Tercero";
console.log(lista3);

const lista4 = [lista, lista2, lista3];
console.log(lista4);

//Objetos
const movil = {
    altura:10,
    anchura:5,
    marca:"Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martín", "Raúl"],
    tarjeta: {
        marca:"Sandisk",
        almacenamiento: 32
    } ,
    "altura-tarjeta" : 4,
    "anchura-tarjeta": 3,
}
movil.año = 2019;
console.log(movil.tarjeta.marca, movil.contactos, movil.año)

//Fechas
//Librerías de apoyo Moment.js
const ahora = new Date();
console.log(ahora)

const fecha_milis = new Date(10); //Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const año = ahora.getFullYear();

console.log(dia, mes, año);
