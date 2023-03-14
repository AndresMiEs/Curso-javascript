//Cómo trabajar con Listas(arrays, arreglos, vectores...)
let var1 = 45;
let array = [1, "Hola", 3, false, { id:5 }, null, undefined, var1];
console.log(array);

//acceder a los valores de un array a traves de su posición
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);

//Métodos para introducir nuevos valores en nuestros arrays
//.push() .unshift() => Mutan el valor de nuestro array
//.push -> Valores al final
array.push("Final", "Mas cosas", 5);
console.log(array);
//Valores al principio -> .unShift
array.unshift("Principio", 3456);
console.log(array);

//Métodos para eliminar valores en nuestros arrays.
// .pop() .shift() => Mutan el valor del array

let array2 = [1, 4, "Hola", false];
//valores al final -> pop
array2.pop();
console.log(array2);
//valores al principio -> shift
array2.shift();
console.log(array2);

//Método para eliminar, modificar o añadir valores
// .splice(x, y, z)
const array3 = [1, 2, 3, 4];

//Eliminar valores .splice(indice, numValores a eliminar)
array3.splice(2, 1);
console.log(array3);

//Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola");
console.log(array3);

//Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3);
console.log(array3);

