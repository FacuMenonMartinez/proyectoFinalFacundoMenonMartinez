// // INICIAR SESION
// Capturo el formulario
let formularioSesion = document.getElementById("formIniciarSesion");
let botonSesion =  document.getElementById("submitIniciarSesion");

formularioSesion.addEventListener("submit",(e) => { 
    e.preventDefault();
    // Capturo los inputs
    let usuarioSesion = document.getElementById("usuarioIniciarSesion").value;
    let contraseñaSesion = document.getElementById("contraseñaIniciarSesion").value;
    let usuarioSesionValido = usuarioSesion.toUpperCase();

    // Contraseña puesta asi para que funcione en el ejemplo
    let contraseñaSesionValida = contraseñaSesion.toUpperCase();



    // Busco nombre que coincida en el arreglo
    const usuarioSesionIniciada = usuarios.find(usuarioSesionIniciada=> usuarioSesionIniciada.usuario === usuarioSesionValido);
// Me fijo que coincida la contraseña
    if (usuarioSesionIniciada){
        if(contraseñaSesionValida=== usuarioSesionIniciada.contraseña){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sesion Iniciada',
                text:'Serás redireccionado al inicio',
                showConfirmButton: false,
                timer: 1500
              })
            setTimeout(()=>{ location.href="../index.html"}, "2000");
        }else{
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Contraseña Incorrecta',
                showConfirmButton: false,
                timer: 1500
              })        }
    }else{
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Usuario Incorrecto',
            showConfirmButton: false,
            timer: 1500
          })    }

});


