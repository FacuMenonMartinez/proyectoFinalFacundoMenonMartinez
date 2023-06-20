let usuarios = [];


class GeneradoraUsuarios {
    constructor(usuario, contraseña, id) {
        this.usuario = usuario,
            this.contraseña = contraseña,
            this.id = id
    }
}


recargarSessionUsuarios();



function recargarSessionUsuarios (){
    let usuarioStorage = JSON.parse(localStorage.getItem("usuarios"));

    if(usuarioStorage){
        usuarioStorage.forEach(item=>usuarios.push(item))
    }

}

