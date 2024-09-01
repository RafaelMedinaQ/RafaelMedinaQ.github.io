<?php
$conexion = new mysqli("localhost","root","","negocio");
    if($conexion){
        echo "la conexion se realizo";

    }else{
        echo "algo anada mal";
    }
?>