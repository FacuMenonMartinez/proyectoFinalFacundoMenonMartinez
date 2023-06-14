
let divOfertas=document.getElementById("novedades");

// GENERAR FILTRO PARA QUE SE VEAN UNICAMENTE LOS QUE ESTAN EN OFERTA
fetch(`./js/productos.json`)
    .then((response) => response.json())
    .then((productos) => {
        // For of para recorrer el arreglo y luego se le aplica el filtro
        for (oferta of productos.filter(clasicos=>clasicos.genero==="Clasico")){
            let tarjeta = document.createElement("div");
            tarjeta.className ="tarjeta"
            tarjeta.innerHTML = `
                    <img class="imgLibro" src="${oferta.img}"
                        alt="">
                    <h4>${oferta.nombre}</h4>
                    <b>$${oferta.precio}</b>
                    <div class="botonesTarjeta">
                        <button>Ver más</button>
                        <button>Agregar al carrito</button>
                    </div>`
            divOfertas.append(tarjeta);
        }    
    });