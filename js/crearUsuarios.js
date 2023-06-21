
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
    let idUsuarios = usuarios.length + 1 

    if(usuarioIngresado === "" || contraseñaIngresada === ""){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: ' Por favor, completá todos los datos',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        let usuarioNuevo = new GeneradoraUsuarios(usuarioMayuscula, contraseña, idUsuarios);
        usuarios.push(usuarioNuevo);
    
        console.log(usuarios);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Creado',
            text:'Serás redireccionado al inicio',
            showConfirmButton: false,
            timer: 1500
          })
          
        setTimeout(()=>{ location.href="../index.html"}, "2000");
    }


}
)


function recargarSessionUsuarios (){
    let usuarioStorage = JSON.parse(localStorage.getItem("usuarios"));

    if(usuarioStorage){
        usuarioStorage.forEach(item=>usuarios.push(item))
    }

}
