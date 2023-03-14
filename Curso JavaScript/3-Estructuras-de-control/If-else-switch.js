// Bifurcaciones if...else

let saldo = 50;
let efectivo = 1000.;

if(efectivo < saldo){
    console.log("Aquí tiene su dinero.");
}else{
    console.log("Saldo insuficiente.")
}

//if else + if else
let nota = 7;

if(nota == 5){
    console.log("Enhorabuena, has aprobado");
}else if(nota < 5){
    console.log("Has suspendido");
}else if(nota < 9){
    console.log("Has sacado un notable");
} else if(nota <=10){
    console.log("Has sacado un sobresaliente");
}

//Switch
let nota2 = 5;

switch(nota2){
    case 5:
        console.log("Buen trabajo, un sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo, pero podrías haberlo hecho perfecto");
        break;
    case 3:
        console.log("Aprobado por los pelos");
        break;
    case 2:
        console.log("Suspenso, mejora.");
        break;
    case 1:
        console.log("Suspenso, no has estudiado nada");
        break;
    default:
        console.log("Error, introduce un dato válido.");
        break;
}

