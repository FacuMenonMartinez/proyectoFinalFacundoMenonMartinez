// -----------------USUARIOS
let inputUsuario = document.getElementById("usuarioUsuario");
let inputContraseña = document.getElementById("usuarioContraseña");
let botonUsuario = document.getElementById("botonUsuario");
let formularioUsuario = document.getElementById("formularioUsuario");

// Generador de Usuarios
const usuariosActivos = [];

class GeneradoraUsuarios {
    constructor (usuario, contraseña){
        this.usuario = usuario,
        this.contraseña = contraseña
    }
}

// Funciones y eventos de los usuarios
formularioUsuario.addEventListener ("submit", (e) =>{
    e.preventDefault();
    console.log("Usuario creado");
    let inputs = e.target.children;
    let usuarioIngresado = inputs[0].value;
    let contraseñaIngresada = inputs[1].value;
    let usuarioNuevo = new GeneradoraUsuarios (usuarioIngresado,contraseñaIngresada);
    usuariosActivos.push(usuarioNuevo);

    // Recordar o no usuario en local storage y mensaje de bienvenida
    let checkUsuarios = document.getElementById("recordarUsuario");
    if(checkUsuarios.checked){
        localStorage.setItem("arregloUsuarios", usuariosActivos);

    }else{
        sessionStorage.setItem("arregloUsuarios", usuariosActivos);
    };
let mensajeBienvenida=document.createElement("span");
mensajeBienvenida.innerHTML=`Hola ${usuarioNuevo.usuario}`
formularioUsuario.append(mensajeBienvenida);
    
    // Eliminar los campos del input
formularioUsuario.reset();
}
)

//-------------------- PRODUCTOS
const libros = [];



class LibrosGenerador {
    constructor(id, titulo, genero, precio) {
        this.id = id,
            this.titulo = titulo,
            this.genero = genero,
            this.precio = precio
    }
}
const libro1 = new LibrosGenerador(1, "Harry Potter", "Fantasia", 3500);
const libro2 = new LibrosGenerador(2, "Misery", "Terror", 2000);
const libro3 = new LibrosGenerador(3, "Oliver Twist", "Clasico", 950);
const libro4 = new LibrosGenerador(4, "Cancion de Navidad", "Clasico", 950);

libros.push(libro1);
libros.push(libro2);
libros.push(libro3);
libros.push(libro4);

// Boton para ver productos//Ocultar productos//Agregar al carrito
let botonProductos = document.getElementById("botonProductos");
let contenedorLibros = document.getElementById("contenedorLibros");
let botones = document.getElementById("botones");

function mostrarProductos () {
    let divLibros = document.createElement("div");
    divLibros.innerHTML=`<h2> Listado de libros </h2>`;
    contenedorLibros.append(divLibros);
    divLibros.setAttribute("id", "divLibrosContenedor")

    //Para mostrar los libros en el contenedor 
    libros.forEach (libro=>{
        let div = document.createElement("div");
        div.innerHTML =`
        <h3 class ="tituloLibro">${libro.titulo}</h3>
        <span class="generoLibro">${libro.genero}</span>
        <span class="precioLibro">$${libro.precio}</span>
        <button class="botonLibro" id="agregarCarrito${libro.id}">Agregar al carrito</button>
        ` ;
        divLibros.append(div);
        div.setAttribute("id", "divLista");

    // Boton para agregar libros al carrito dentro del forEach para que funcione el libro.id
    // Carrito almacenado en un sessionStorage
    let botonAgregarLibro = document.getElementById(`agregarCarrito${libro.id}`);

    function agregarAlCarrito(){
       const libroSeleccionado = libros.find(idLibro=> idLibro.id ==`${libro.id}`);

        carrito.push(libroSeleccionado);

        localStorage.setItem("carrito", JSON.stringify(carrito));
    } 
        //Evento 
    botonAgregarLibro.addEventListener("click", agregarAlCarrito);
        
    }
    )

// Boton para ocultar libros, por fuera del forEach, pero en la misma funcion
    let botonOcultar = document.createElement("button");
    botonOcultar.innerHTML=`Ocultar Libros`

    botones.append(botonOcultar);
    function ocultarProductos () {
        divLibros.remove();
        botonOcultar.remove();
    }

    botonOcultar.addEventListener("click", ocultarProductos)
}


botonProductos.addEventListener("click", mostrarProductos);



// --------------CARRITO
const carrito = [];
// localStorage.setItem("carrito", JSON.stringify(carrito));

// Boton para ver el carrito
let verCarrito = document.getElementById("botonCarrito");

function mostrarCarrito (){
    let divCarrito = document.createElement("div");
    divCarrito.innerHTML=`<h3>Tu Carrito</h3>`
    contenedorLibros.append(divCarrito);

// Botones antes de condicion para que tambien esten en el else.

        // Boton para ocultar el carrito
        let botonOcultarCarrito = document.createElement("button");
        botonOcultarCarrito.innerHTML=`Ocultar Carrito`;
        botones.append(botonOcultarCarrito);
    
        function ocultarCarrito (){
            botonOcultarCarrito.remove();
            divCarrito.remove();
            botonEliminarCarrito.remove();
        }
    
        botonOcultarCarrito.addEventListener("click", ocultarCarrito);
    
        // Boton para eliminar el carrito
        let botonEliminarCarrito = document.createElement("button");
        botonEliminarCarrito.innerHTML=`Vaciar Carrito`;
        botones.append(botonEliminarCarrito);
    
        function eliminarCarrito(){
            localStorage.clear("carrito");
            divCarrito.remove();
            botonEliminarCarrito.remove();
            botonOcultarCarrito.remove();
        }
    
        botonEliminarCarrito.addEventListener("click", eliminarCarrito);
    

    // Llamo al carrito dentro de la funcion para que no haya que refrescar la pagina para que se vea
    let carritoStorage = localStorage.getItem("carrito");
    carritoDeProductos =JSON.parse(carritoStorage);

    if(carritoStorage){
        carritoDeProductos.forEach(productosCarrito=>{
            let productosEnCarrito = document.createElement("div");
            productosEnCarrito.innerHTML=`
            <h4>Libro: ${productosCarrito.titulo}</h4>
            <h5>Precio: $${productosCarrito.precio}</h5>`
            divCarrito.append(productosEnCarrito);
            }
        )

    }else{
        
        let divVacio= document.createElement("div");
        divVacio.innerHTML=`Tu carrito esta vacio`;
        divCarrito.append(divVacio);
    }


    // Total
    let total= carritoDeProductos.reduce((acum, precio) => acum + precio.precio, 0);
    let montoTotal = document.createElement("p");
    montoTotal.innerHTML=`Total $${total}`;
    divCarrito.append(montoTotal);



}

verCarrito.addEventListener("click", mostrarCarrito);




