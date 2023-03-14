//Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

//Suma
console.log(a + b);

//Resta
console.log(a - b);

//Multiplicación
console.log(a * b);

//División
console.log(a / b);

//Representación de los números en cadenas de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//Redondeo números decimales
let c = 3.3;
let d = c * 3;

console.log(d);
// .toFixed(x)....limita el numero de decimales al valor x
//Nos convierte el valor en un String
console.log(d.toFixed(2))
let e = 1839.123456789;
console.log(e.toFixed(2));

// .toPrecision(x) limita el numero de cifras significativas a x
// Tambien nos convierte el valor en un String
console.log(e.toPrecision(6))

