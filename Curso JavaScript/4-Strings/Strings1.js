//Métodos mas utilizados con Strings
//Cómo obtener la longitud de un String
let str = "Hola soy un string";
console.log(str.length);

//Obtener partes de un string
//slice(), substring(), substr(obsoleto)
let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

//Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Andrés";
console.log(cadena);

console.log(cadena.replace('Andrés', 'Joselito'));

//Al utilizar string solo reemplaza la primera instancia

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

//Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'la mierda'));

