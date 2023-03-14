//Calculamos el factorial de 10 usando un bucle while con break
let factorial = 1;
let num = 10;
bucleBreak: while(true){
    factorial *= num;
    num--;
    if(num === 1){
        break bucleBreak;
    }
}
console.log(factorial);
