function cambiarColor()
{
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor = "green";


}

function cambiarTamano(){
    var imagenes = document.getElementsByClassName("imagen");
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].style.height = "400px";
        imagenes[i].style.width = "400px";
       
    }
    console.log("Tamaño cambiado");

}

