var obj={
    "nombre":"nombre1",
    "id":1
}
var cadena=JSON.stringify(obj);
console.log(cadena);
//document.getElementById("Tienda").innerHTML=obj.nombre;
//document.getElementById("Tienda").innerHTML=obj["nombre"];
var objJSON=JSON.parse(cadena);
console.log(objJSON);
console.log(obj);

