// CARRITO Y BOTONES DE TARJETA
let carrito=[];



// Funcion de agregar al carrito
const agregarCarrito = (producto, seleccionador) =>{

    let libroSeleccionado = producto.find(item=>item.id===seleccionador);
    carrito.push(libroSeleccionado);

    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    alertaToastify();
    // Refrescar la pagina para que se actualice el contenedor que muestra el carrito
    setTimeout(()=>{location.reload()},"1000");

    console.log("Producto agregado al carrito");
};

// Mostrar Carrito
// 1 Llamo al boton del carrito y al contenedor
let botonMostrarCarrito = document.getElementById("botonCarrito");
let carritoContenedor=document.getElementById("carritoDiv");


botonMostrarCarrito.addEventListener("click", mostrarCarrito);


// 2 Genero el contenedor con el carrito(por fuera de la funcion de mostrar carrito para que no se genere
// cada vez que hago el evento)
let carritoSessionStorage = sessionStorage.getItem("carrito");
let carritoMostrar = JSON.parse(carritoSessionStorage);

carritoMostrar.forEach(item=>{
    let divCarrito = document.createElement("div");
    divCarrito.innerHTML="";
    divCarrito.innerHTML=`
    <div class="librosCarrito">
    <p>${item.nombre}</p>
    <p>$${item.precio}</p>
    <svg id="botonEliminar${item.nombre}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
    </div>
    <hr class="lineaMostrarCarrito">
    `
    carritoContenedor.append(divCarrito);


// BOTON ELIMINAR
    let botonEliminar = document.getElementById(`botonEliminar${item.nombre}`);
    botonEliminar.addEventListener("click", ()=>{
        divCarrito.remove();
        carrito = carrito.filter(itemEliminar=> itemEliminar.nombre!== item.nombre);
        sessionStorage.setItem("carrito",JSON.stringify(carrito));
    })

})


// 3 Funcion del carrito
// Si hay carrito muestro, sino mostrar "carrito vacio"

function mostrarCarrito (){

if(carritoSessionStorage){
    mostrarCarritoConProductos(carritoContenedor);

    }else {
    mostrarCarritoVacio();
}
}

// Genero el alert donde se va a mostrar el carrito
function mostrarCarritoConProductos (datos){
    Swal.fire({
        title: 'Carrito',
        html: datos,
        showCloseButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Finalizar compra',
        // Estilo
        confirmButtonColor:"#252323",
        color: '#252323',
        background: 'F5F1ED'
    })
}


function mostrarCarritoVacio (){
    Swal.fire({
        html: '<h4>Carrito Vacio</h4>',
        showConfirmButton:true,
        confirmButtonText:'Finalizar Compra',

        // Estilo
        confirmButtonColor:"#252323",
        color: '#252323',
        background: 'F5F1ED'

    })
}






//----------------- Mantener el carrito en el Session Storage
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

//---------------- Alerta Toastify
function alertaToastify (){
    Toastify({

        text: "Producto agregado al carrito",        
        duration: 3000,
        stopOnFocus: true,
        style:{
        background:"#DAD2BC",
        color:"#252323"
        }
        
        }).showToast();

}


//---------------- VER MAS
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