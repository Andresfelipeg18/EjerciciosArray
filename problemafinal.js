//Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de
//objetos)
//• Listar todos los productos: mostrar información completa de cada producto.
//• Buscar un producto por nombre: mostrar información del producto si existe.
//• Eliminar un producto: eliminar producto del inventario.
//• Actualizar la cantidad en stock: modificar la cantidad disponible de un product.

let tienda = [];

function agregarProducto (name,descripcion,precio,stock,categoria){
    let product ={
        name : name ,
        descripcion:descripcion,
        precio:precio,
        stock:stock,
        categoria:categoria
    };
    tienda.push(product);
};

function listarProductos () {
    tienda.forEach(product=> {
        console.log("Nombre:",product.name);
        console.log("Descripcion:",product.descripcion);
        console.log("precio:",product.precio);
        console.log("stock:",product.stock);
        console.log("categoria:",product.categoria);
        console.log("------------------------------");

    });
};
function buscarProducto (nombre) {
    let encontrado = tienda .find(product => product.name === nombre );
    if(encontrado){
        console.log("Nombre:",encontrado.name);
        console.log("Descripcion:",encontrado.descripcion);
        console.log("precio:",encontrado.precio);
        console.log("stock:",encontrado.stock);
        console.log("categoria:",encontrado.categoria)
        console.log("------------------------------");
 
    }
    
    else{
        console.log ("El producto no existe")  ;
       }
};


function eliminarProducto(nombre){
    tienda=tienda.filter(product=>product.name!==nombre)
    console.log("Se  ha eliminado el producto");
    console.log("------------------------------");
}

function actualizarCantidad (nombre,stockcambio){
    for(let productos of tienda){
    if (productos.name===nombre) {
    productos.stock=stockcambio;
    console.log(`La cantidad en stock de:"${nombre} ha sido a actualizada a : ${stockcambio}.`);
    console.log("------------------------------");
    }
}

};


agregarProducto("Producto1", "Descripción del producto 1", 10.99, 100, "Electrónica");
agregarProducto("Producto2", "Descripción del producto 2", 20.49, 50, "Hogar");
listarProductos();
buscarProducto("Producto1");
eliminarProducto("Producto1");
listarProductos();
actualizarCantidad("Producto2", 100);
listarProductos();
