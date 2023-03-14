
let nombre = "Andrés";
console.log(nombre);

let apellido = "Millán";
console.log(apellido);

let estudiante = "Estudiante: " + nombre + " " + apellido;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase(); 
console.log(estudianteMayus);

let estudianteMinus= estudiante.toLowerCase();
console.log(estudianteMinus);

let letraestudiante = estudiante.length;
console.log(letraestudiante)

console.log(estudiante.indexOf("Andrés"))
let primeraletra = estudiante.charAt(12);
console.log(primeraletra);

console.log(estudiante.indexOf("án"))
let ultimaletra = estudiante.charAt(24);
console.log(ultimaletra);

let eliminar_espacios = estudiante.trim();
console.log(eliminar_espacios);

let estaelnombre = estudiante.includes("Andrés");
console.log(estaelnombre);

