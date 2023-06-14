let divOfertas = document.getElementById("ofertas");


let objetoPrueba = {
    id: 1,
    nombre: "La isla del tesoro",
    autor: "Robert Stevenson",
    genero: "Clásico",
    precio: 2500,
    img: "../recursos/libros/islaTesoro.jpg"
};
let objetoPrueba2 = {
    id: 1,
    nombre: "La isla del tesoro",
    autor: "Robert Stevenson",
    genero: "asdas",
    precio: 2500,
    img: "../recursos/libros/islaTesoro.jpg"
};
let objetoPrueba3 = {
    id: 1,
    nombre: "Misery",
    autor: "Robert Stevenson",
    genero: "Clásico",
    precio: 2500,
    img: "../recursos/libros/islaTesoro.jpg"
};

const arreglo =[];
arreglo.push(objetoPrueba);
arreglo.push(objetoPrueba2);
arreglo.push(objetoPrueba3);

// console.log(arreglo);

// for (const oferta of arreglo.filter(item=> item.genero==="Clásico")){
//     let tarjeta = document.createElement("div");
//     tarjeta.innerHTML = `
//         <img class="imgLibro" src="${oferta.img}" alt="">
//             <h4>${oferta.nombre}</h4>
//             <b>$${oferta.precio}</b>
//             <div class="botonesTarjeta">
//               <button>Ver más</button>
//               <button>Agregar al carrito</button>
//             </div>`
//     divPrueba.append(tarjeta)
// }
// const encontrado = arreglo.filter(item=> item.genero==="Clásico");
// console.log(encontrado[0].nombre);

// let tarjeta = document.createElement("div");
// tarjeta.innerHTML = `
//                 <img class="imgLibro" src="${encontrado.img}"
//                         alt="">
//                     <h4>${encontrado.nombre}</h4>
//                     <b>$${encontrado.precio}</b>
//                     <div class="botonesTarjeta">
//                         <button>Ver más</button>
//                         <button>Agregar al carrito</button>
//                     </div>`
//             divPrueba.append(tarjeta)

// console.log(objetoPrueba);


// GENERAR FILTRO PARA QUE SE VEAN UNICAMENTE LOS QUE ESTAN EN OFERTA
fetch(`./productos.json`)
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


