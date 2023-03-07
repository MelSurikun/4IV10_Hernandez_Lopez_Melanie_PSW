function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function numMayor(){

    var uno1 = document.getElementById("primero").value;
    var dos1 = document.getElementById("segundo").value;
    var tres1 = document.getElementById("tercero").value;

    var letras=/\D\./;

    if(letras.test(uno1) || letras.test(dos1) || letras.test(tres1)){
        alert("Ingresa solo números en los campos");
        return false;
    }else{
        var uno = parseFloat(uno1);
        var dos = parseFloat(dos1);
        var tres = parseFloat(tres1);
        var mayor = 0;

        if((uno >= -999999999) && (uno <= 999999999) && (dos >= -999999999) && (dos <= 999999999)
        && (tres >= -999999999) && (tres <= 999999999)){
            //Realizamos las operaciones
        if(uno > dos){
            if(uno > tres){
                mayor = uno;
            }
            else{
                mayor = tres;
            }
        }
        else if (dos > tres){
            mayor = dos;
        }
        else{
            mayor = tres;
        }

            document.getElementById("numerom").value = mayor;
        }
        else{
            alert("Ingrese valores válidos entre -999999999 y 999999999, sin dejar campos vacíos");
            return false;
        }
    }
}

function borrard(){
    //Borramos los elementos
    document.getElementById("primero").value="";
    document.getElementById("segundo").value="";
    document.getElementById("tercero").value="";
    document.getElementById("numerom").value="";
}