// CARRITO Y BOTONES DE TARJETA
let carrito=[];



// Funcion de agregar al carrito
const agregarCarrito = (producto, seleccionador) =>{
    let libroSeleccionado = producto.find(item=>item.id===seleccionador);
    carrito.push(libroSeleccionado);

    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    console.log("Producto agregado al carrito");
};

// Mantener el carrito en el Session Storage
const mantenerCarrito=()=>{
    let carritoStorage = JSON.parse(sessionStorage.getItem("carrito"));
// Recorro el storage en caso que haya y vuelvo a pushear los productos que ya estan al carrito
// para que no se sobreescriba en caso que siga agregando productos
 if(carritoStorage){
    carritoStorage.forEach(item=>carrito.push(item));
 }

}
// Llamo a la funcion
mantenerCarrito();


// VER MAS
// Parametros para hacerlo personalizado del libro con la base de datos
function verMas(titulo, descripcion, precio, portada,) {
    Swal.fire({
    //Elementos de la alerta 
    title: titulo,
    html: descripcion + '<br><br>' + '$' + precio,
    imageUrl: portada,
    showCloseButton: true,
    showConfirmButton: false,
    imageWidth: 200,
    imageHeight: 300,
    imageAlt: 'Imagen de portada de' + titulo,

    // Estilo de la alerta
    color: '#252323',
    background: 'F5F1ED'
})
}