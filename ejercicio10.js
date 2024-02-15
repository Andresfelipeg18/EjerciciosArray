
let personas = ["Juan", 25, true, { ciudad: "Nueva York" }];
let objeto = {};
personas.forEach((elemento, indice) => {
  objeto[`propiedad${indice + 1}`] = elemento;
});
console.log(objeto);
