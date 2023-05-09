function validar() {
    var email = document.getElementById("email").value;
    var pss1 = document.getElementById("password1").value;
    var pss2 = document.getElementById("password2").value;
    var acepta = document.querySelector("#acepta");
    if (email.lenght==0) {
        alert("El campo email no puede quedar vacios");
        return false
    }

    if (pss1.length == 0 || pss2.length == 0) {
        alert("Los campos de las contraseñas no pueden quedar vacios");
        return false;
    }
    if (pss1 != pss2) {
        alert("Las contraseñas deben de coincidir");
        return false;
    }
 
    
    if (acepta.checked) {
        alert("submitted")
        return true;
    }else{
        alert("Debes aceptar las politicas de privacidad");
        return false;
    }
}