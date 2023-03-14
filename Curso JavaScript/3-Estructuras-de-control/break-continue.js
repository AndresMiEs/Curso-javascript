//Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i < lista.length; i++){
    var a = 50;
    if(lista[i] === 3){
        continue;
    }
    
    console.log(lista[i]);

    if (lista[i] >= 5){
        break;
    }
}

//Cuál es el ámbito de un bucle

console.log(a);//Siendo var si que te dejaría
console.log(i);//siendo let no te deja llamarlo fuera del bucle