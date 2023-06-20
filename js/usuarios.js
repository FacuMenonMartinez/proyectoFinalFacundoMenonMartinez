let usuarios = [];


class GeneradoraUsuarios {
    constructor(usuario, contraseña) {
        this.usuario = usuario,
            this.contraseña = contraseña
    }
}

const usuario1 = new GeneradoraUsuarios("FACUNDO", 11111);
const usuario2 = new GeneradoraUsuarios("FLORENCIA", 22222);
const usuario3 = new GeneradoraUsuarios("CARLOS", 33333);
const usuario4 = new GeneradoraUsuarios("FERNANDA", 44444);

// usuarios.push(usuario1, usuario2, usuario3, usuario4);
sessionStorage.setItem("usuarios", JSON.stringify(usuarios));



// console.log(usuarios);


// Crear Usuarios

let botonFormulario = document.getElementById("formSubmit");
let formulario = document.getElementById("form")

// Creo el evento para crear usuarios
formulario.addEventListener("submit", (e) => {

    e.preventDefault();
// Genero los valores del objeto en un mismo orden para hacer coincidir mas simple al iniciar sesion(Mayusculas)
    let usuarioIngresado = document.getElementById("formUsuario").value;
    let = usuarioMayuscula = usuarioIngresado.toUpperCase();
    let contraseñaIngresada = document.getElementById("formContraseña").value;
    let contraseña = contraseñaIngresada.toUpperCase();

    let usuarioNuevo = new GeneradoraUsuarios(usuarioMayuscula, contraseña);
    usuarios.push(usuario1, usuario2, usuario3, usuario4,usuarioNuevo);
    console.log(usuarios);

    sessionStorage.setItem("usuarios", JSON.stringify(usuarios))

}
)

function recargarSessionUsuarios (){
    const usuariosStorage = JSON.parse(sessionStorage.getItem("usuarios"));
    if(usuariosStorage){
        usuarioStorage.forEach(item=>{
            usuarios.push(item);
        })
    }

}

recargarSessionUsuarios();
