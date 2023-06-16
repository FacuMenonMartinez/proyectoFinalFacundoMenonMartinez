// // let divOfertas = document.getElementById("ofertas");


// // let objetoPrueba = {
// //     id: 1,
// //     nombre: "La isla del tesoro",
// //     autor: "Robert Stevenson",
// //     genero: "Clásico",
// //     precio: 2500,
// //     img: "../recursos/libros/islaTesoro.jpg"
// // };
// // let objetoPrueba2 = {
// //     id: 1,
// //     nombre: "La isla del tesoro",
// //     autor: "Robert Stevenson",
// //     genero: "asdas",
// //     precio: 2500,
// //     img: "../recursos/libros/islaTesoro.jpg"
// // };
// // let objetoPrueba3 = {
// //     id: 1,
// //     nombre: "Misery",
// //     autor: "Robert Stevenson",
// //     genero: "Clásico",
// //     precio: 2500,
// //     img: "../recursos/libros/islaTesoro.jpg"
// // };

// // const arreglo =[];
// // arreglo.push(objetoPrueba);
// // arreglo.push(objetoPrueba2);
// // arreglo.push(objetoPrueba3);

// // console.log(arreglo);

// // for (const oferta of arreglo.filter(item=> item.genero==="Clásico")){
// //     let tarjeta = document.createElement("div");
// //     tarjeta.innerHTML = `
// //         <img class="imgLibro" src="${oferta.img}" alt="">
// //             <h4>${oferta.nombre}</h4>
// //             <b>$${oferta.precio}</b>
// //             <div class="botonesTarjeta">
// //               <button>Ver más</button>
// //               <button>Agregar al carrito</button>
// //             </div>`
// //     divPrueba.append(tarjeta)
// // }
// // const encontrado = arreglo.filter(item=> item.genero==="Clásico");
// // console.log(encontrado[0].nombre);

// // let tarjeta = document.createElement("div");
// // tarjeta.innerHTML = `
// //                 <img class="imgLibro" src="${encontrado.img}"
// //                         alt="">
// //                     <h4>${encontrado.nombre}</h4>
// //                     <b>$${encontrado.precio}</b>
// //                     <div class="botonesTarjeta">
// //                         <button>Ver más</button>
// //                         <button>Agregar al carrito</button>
// //                     </div>`
// //             divPrueba.append(tarjeta)

// // console.log(objetoPrueba);

// // GENERAR FILTRO PARA QUE SE VEAN UNICAMENTE LOS QUE ESTAN EN OFERTA
// // fetch(`./productos.json`)
// //     .then((response) => response.json())
// //     .then((productos) => {
// //         // For of para recorrer el arreglo y luego se le aplica el filtro
// //         for (oferta of productos.filter(clasicos=>clasicos.genero==="Clasico")){
// //             pruebaArray.push(oferta);
// //         }    
// //     });

// fetch (`./productos.json`)
// .then((response)=>response.json())
// .then((data)=>{
//     for(item of data.filter(clasicos => clasicos.genero==="Clasico")){

//         libros.push(item)
//     }
// })
// let libros=[];

// console.log(libros);

// let divOfertas=document.getElementById("ofertas");

// let saludo=document.createElement("h1");
// saludo.innerHTML=`HOLA`;
// divOfertas.append(saludo)

// libros.forEach(oferta=>{
//     let tarjeta1=document.createElement("div");
//     tarjeta1.className ="tarjeta";
//     tarjeta1.innerHTML=`
//     <h4>${oferta.nombre}</h4>
//     <div class="botonesTarjeta">
//     <button id="verMas${oferta.id}">Ver mas</button>
//     <button id="agregarCarrito${oferta.id}">Agregar Carrito</button>
//     </div>
//     `
//     divOfertas.append(tarjeta1);
//     console.log(oferta[1].nombre)
// })

// Prueba cambiar titulo a pestaña
let boton =document.getElementById("boton");

function cambiar() {
    let nuevoTitulo = "Titulo Nuevo"
    document.title = nuevoTitulo;
    console.log("titulo cambiado");
}

boton.addEventListener("click", cambiar);
