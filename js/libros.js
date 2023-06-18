// Renderizacion de libros en su propio html
let contenedorLibros = document.getElementById("contenedorProductos");

// Traigo los productos del JSON y los muestro como en el main del inicio
fetch(`../js/productos.json`)
    .then((response) => response.json())
    .then((libros) => {
        libros.forEach(producto => {
            let tarjeta = document.createElement("div");
            tarjeta.className="tarjeta producto"
            tarjeta.innerHTML = `
                        <img class="imgLibro" src="${producto.img}"
                            alt="Imagen de portada de ${producto.nombre}">
                        <h4>${producto.nombre}</h4>
                        <b>$${producto.precio}</b>
                        <div class="botonesTarjeta">
                            <a href="./libro.html"><button id="verMas${producto.id}">Ver más</button></a>
                            <button id="agregarCarrito${producto.id}">Agregar al carrito</button>
                        </div>
            `
            contenedorLibros.append(tarjeta);
        })
    })