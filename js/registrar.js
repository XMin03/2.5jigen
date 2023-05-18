
function validar() {
    var email = document.getElementById("email").value;
    var pss1 = document.getElementById("password1").value;
    var pss2 = document.getElementById("password2").value;
    var acepta = document.getElementById("acepta");
    if (email.length==0) {
        alert("El campo email no puede quedar vacios");
    }else if (pss1.length == 0 || pss2.length == 0) {
        alert("Los campos de las contraseñas no pueden quedar vacios");
    }else if (pss1 != pss2) {
        alert("Las contraseñas deben coincidir");
    }else if (acepta.checked) {
        var cuenta={
            correo:email,
            contraseña:pss1
        }
        var alerta=JSON.stringify(cuenta);
        alert(alerta)
        //return para que no vaya a preventDefault
        return true;
    }else{
        alert("Debes aceptar las politicas de privacidad");
    }
    //para que no haga nada, no limpie no cambie pagina.
    event.preventDefault();
}