let personas = [
    {nombre :"Andres",edad : 23},
    {nombre :"jana",edad : 18},
    {nombre :"maria",edad : 10},
    {nombre :"luis",edad : 80},
    {nombre :"Ana",edad : 70}
];

console.log(personas.filter(x=>x.edad>=18).map(personas=>personas.nombre));

for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad >= 18) {
        console.log(`${personas[i].nombre} es mayor de edad.`);
    } else {
        console.log(`${personas[i].nombre} no es mayor de edad.`);
    }
};