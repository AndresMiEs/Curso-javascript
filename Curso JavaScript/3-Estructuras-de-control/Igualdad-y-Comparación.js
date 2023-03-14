// Comparación

// Igualdad
if (5 == 5){
    console.log("5 es igual a 5");
}

if (5===5){
    console.log("5 es muy igual a 5");
}

let a = 5;
console.log(typeof a);

let b = "5";
console.log(typeof b);

if(a == b){
    console.log("a es igual a b - Débil");
    //Con == solo se comprueba el valor.
}
if(a === b){
    //Con === se comprueba tanto el valor como el tipo.
    console.log("a es igual a b - Fuerte");
}

let c = 4;
let d = "4";

if (c != d){
    console.log("No son iguales - Débil");
}

if (c !== d){
    console.log("No son iguales - Fuerte");
}

//Mayor que... Menor que
let max = 10;
let min = 5;

if(max > min){
    console.log("Max es mayor que min")
}
if(max >= 10){
    console.log("Max es mayor o igual que 10");
}


