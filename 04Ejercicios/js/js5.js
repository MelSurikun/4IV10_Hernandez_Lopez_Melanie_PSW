function validarn(e){

    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function porcentajes(){

    var letras=/\D\./;
    var mujer = document.getElementById("mujeres").value;
    var hombre = document.getElementById("hombres").value;

    if(letras.test(mujer) || letras.test(hombre)){
        alert("Ingresa solo numeros de tipo enteros, sin dejar campos vacíos");
        return false;
    }
    else{
        var mujeres = parseInt(mujer);
        var hombres = parseInt(hombre);

        if((mujeres >= 0) && (mujeres <= 70) && (hombres >= 0) && (hombres <= 70)){
            var totalnum = mujeres + hombres;

            var porcenm = (mujeres * 100) / totalnum;
            var porcenh = (hombres * 100) / totalnum;
        
            document.getElementById("pormuj").value = porcenm + " %";
            document.getElementById("porhom").value = porcenh + " %"; 
        }
        else{
            alert("Ingresa valores validos entre 0 y 70, sin dejar campos vacíos");
            return false;
        }
    }




    /*
    var mujer = parseInt(document.getElementById("mujeres").value);
    var hombre = parseInt(document.getElementById("hombres").value);

    var totalnum = mujeres + hombres;

    var porcenm = (mujer * 100) / totalnum;
    var porcenh = (hombre * 100) / totalnum;

    document.getElementById("pormuj").value = porcenm + " %";
    document.getElementById("porhom").value = porcenh + " %";    
    */

}

function borrard(){
    //Borramos los elementos
    document.getElementById("mujeres").value="";
    document.getElementById("hombres").value="";
    document.getElementById("pormuj").value="";
    document.getElementById("porhom").value="";
}