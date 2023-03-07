function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function calculando(){
    var uno = document.getElementById("uno").value;
    var dos = document.getElementById("dos").value;

    var letras=/\D\./;

    if(letras.test(uno) || letras.test(dos)){
        alert("Ingresa solo números en los campos");
        return false;
    }
    else{
        var uno1 = parseFloat(uno);
        var dos1 = parseFloat(dos);
        var final = 0;

        if((uno1 >= -999999999) && (uno1 <= 999999999) && (dos1 >= -999999999) && (dos1 <= 999999999)){

            if(uno1 == dos1){
                final = uno1 * dos1;
            }
        
            if(uno1 > dos1){
                final = uno1 ** dos1;
            }
        
            if((uno1 < dos1) && (dos1 != 0)){
                final = uno1 / dos1;
            }
        
            document.getElementById("operacion").value = final;
        }
        else{
            alert("Ingrese valores válidos entre -999999999 y 999999999, sin dejar campos vacíos");
            return false;
        }
    }
}

function borrard(){

    document.getElementById("uno").value="";
    document.getElementById("dos").value="";
    document.getElementById("operacion").value="";
}