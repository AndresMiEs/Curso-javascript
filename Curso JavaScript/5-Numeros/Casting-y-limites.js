//Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola Holita, Soy un String");
console.log(str);
console.log(str.valueOf());

//NaN(Not a Number) - Infinity
let n = Number('Adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

//En ambos casos va a darnos infinity
console.log(numerador / divisor);
console.log(numerador / divisor_2)

//Cómo convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = "5.89";
let numero_2 = 17.5
console.log(typeof numero);
console.log(typeof numero_2);
console.log(numero + numero_2)//Error de concepto

console.log(Number(numero) + numero_2);

console.log(parseInt(numero));

console.log(parseFloat(numero));

//Numeros Hexadecimales(base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));

//Obtener los valores Máximos y Mínimos en Javascript por el numero de bytes que ocupa
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2 ** 1024); //No puede trabajar con numeros superiores
