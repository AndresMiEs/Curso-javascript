//Vamos a trabajar con métodos más avanzados.
//.map()  .reduce()


const ciudades = ["Málaga", "Sevilla", "Córdoba", "Huelva", "Granada", "Almería"];

const val = ciudades.forEach(v => {
    console.log(v);
    return 4
});

    console.log(val);

const newArray = ciudades.map((valor, indice) =>  `${indice + 1} - ${valor}`)

    console.log(newArray);

//.filter()

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Megan", edad: 56},
    {nombre: "Hernesto", edad: 13},
    {nombre: "Samuelita", edad: 23},
    {nombre: "Paco", edad: 45}
];

/*Este método, aunque válido, es más engorroso

const mayorTreinta = listaObjetos.filter(obj =>{
    if(obj.edad > 30){
        return true;
    }else{
        return false;
    }
}) */

//Así sería mucho más sencillo
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)

console.log(personasMayores);

