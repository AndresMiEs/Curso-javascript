//Trabajando con Strings
let str = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples';
let str_comillas= 'Hola ahora "Esto va entre comillas."'

console.log(str);
console.log(str_sng);
console.log(str_comillas);

//con las comillas invertidas podemos introducir variables dentro de los strings.
let nombre= "Salchichonio";
let saludo= `Hola ${nombre}, bienvenido.`;

console.log(saludo);

//Plantillas Html

let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;

console.log(plantilla);

//Introducción de variables en Html.
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"];