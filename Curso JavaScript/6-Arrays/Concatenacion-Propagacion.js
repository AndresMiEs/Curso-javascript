//Como unir dos listas .concat(lista2)

const list1 = ["Hola", 2, false, null];
const list2 = ["adios", 8, true, undefined];

console.log(list1.concat(list2));
const list3 = list1.concat(list2);
console.log(list3);

//como unir dos listas con el factor de propagación
console.log(...list3);
const list4 = [...list1, ...list2];
console.log(list4);

//error!! Mal entendido el concepto del factor de propagación
const list5 = [list1, list2];
console.log(list5);