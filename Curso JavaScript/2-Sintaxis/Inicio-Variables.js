var variable;
let variableLet_;

// const constante; Estas no se pueden modificar de igual forma que las variables
const constante = "Hola soy una constante";
console.log(constante);
// constante = adios; nos dara un error al intentar asignarle un valor diferente
var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = "Me llamo Menganito";
console.log(b);

b = 5;
console.log(b);

var variable = "Hola, soy una variable VAR";

for(var i = 0; i < 3; i++){
    variable = "Hola, soy la segunda variable";
}
console.log(variable);

let variableLet = "Hola, soy una variable LET";

for(var i = 0; i<3; i++){
    let variableLet = "Soy la segunda variable LET";
}
console.log(variableLet);

//typeof nos dice de que tipo es el valor indicado
var num = 18; 
console.log(typeof num);

var num = "Número"
console.log(typeof num);