// Bucles For
for(let i = 0; i <= 10; i += 3){
    //for(Inicialización; Condición; Actualización)
    //Esto es el bucle que se ejecutará mietras dure la condicion de arriba
    console.log(i);
}

for(let i = 10; i >= 0; i--){
    console.log(i);
}

let lista= [1, 5 ,7 ,9 , 10, 12,100, 800];
for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

//Estructura for...of
for(let valor of lista){
    console.log(valor);
}

//Estructura forEach
lista.forEach(valor =>{
    console.log(valor);
})
//For...in
let persona={
    nombre:"Andrés",
    apellido: "Millán",
    edad: 29,
    isDeveloper: true
}
let prop = "edad";
console.log(persona[prop]);

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}