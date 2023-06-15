let carrito = []

// Generador de tarjetas
let divOfertas=document.getElementById("novedades");
const productosOferta=[];
// PRODUCTOS
// Mostrar unicamente los de la oferta y funcion de botones tarjeta
// 1-Los capturo del JSON
fetch(`./js/productos.json`)
    .then((response) => response.json())
    .then((productos) => {
        productos.forEach(novedad=>{
            // Filtro para que use solo los clasicos
            // La opcion filter no funciona con los botones(marca siempre el mismo producto)
            // Si el JSON no esta ordenado, no muestra todos los productos del filtro en este caso
            if(novedad.genero==="Clasico"){
                let tarjeta = document.createElement("div");
                tarjeta.className ="tarjeta"
                tarjeta.innerHTML = `
                        <img class="imgLibro" src="${novedad.img}"
                            alt="">
                        <h4>${novedad.nombre}</h4>
                        <b>$${novedad.precio}</b>
                        <div class="botonesTarjeta">
                            <button id="verMas${novedad.id}">Ver más</button>
                            <button id="agregarCarrito${novedad.id}">Agregar al carrito</button>
                        </div>`
                divOfertas.append(tarjeta);

        // // Botones de la tarjeta
        let botonAgregarCarrito = document.getElementById(`agregarCarrito${novedad.id}`);
        botonAgregarCarrito.addEventListener("click",()=>{agregarCarrito (productos, novedad.id)});
            }else{
            };



        })
        
    });

// Funcion para evento del carrito
const agregarCarrito = (productos, seleccionador) =>{
    let libroSeleccionado = productos.find(item=>item.id===seleccionador);
    carrito.push(libroSeleccionado);

    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    console.log("Producto agregado al carrito");
};


const mantenerCarrito=()=>{
    let carritoStorage = JSON.parse(sessionStorage.getItem("carrito"));
// Recorro el storage en caso que haya y vuelvo a pushear los productos que ya estan al carrito
// para que no se sobreescriba en caso que siga agregando productos
 if(carritoStorage){
    carritoStorage.forEach(item=>carrito.push(item));
 }

}

mantenerCarrito();







