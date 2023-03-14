//Calculamos el factorial de 10 usando un bucle while

let factorial = 1;
let num = 10;
bucleWhile: while(num > 1){
    factorial *= num;
    num--;
}
console.log(factorial);