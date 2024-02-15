let utiles = [
    {color:"rojo",tamaño: 10, tipo:  "redondo"},
    {color:"verde",tamaño: 8, tipo:  "cuadrado"},
    {color:"azul",tamaño: 1, tipo:  "triangulo"},
    {color:"rosado",tamaño: 30, tipo:  "redondo"},
    {color:"naraja",tamaño: 15, tipo:  "cuadrado"},
];

let utilesAgrupados = utiles.reduce((acumulador, util) => {
    let tipo = util.tipo;
    (acumulador[tipo] = acumulador[tipo] || []).push(util);
    return acumulador;
}, {});

console.log(utilesAgrupados);