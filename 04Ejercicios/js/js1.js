function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function validarL(e){
    var teclado2 = event.keyCode;

    if((teclado2 > 64 && teclado2 < 91) || (teclado2 > 96 && teclado2 < 123)
    || teclado2 == 8)
    return true;

    else return false;
}

function interes(){

    var letras = /\D\./;

    var valor = document.getElementById("cantidad").value;

    if (letras.test(valor))
    {
        alert("Ingresa solo números en el campo cantidad que desea invertir");
        return false;
    }
    else{
        var resul = parseFloat(valor);
        if((resul > 0) && (resul <= 99999999999)){
            var interes = resul * 0.082;

            var total = resul + interes;

            document.getElementById("maximom").value = "$ " + total;

            var dos = total * 36; 

            document.getElementById("cantidadi").value = "$ " + dos;
        }
        else{
            alert("Ingresa una cantidad valida entre 1 y 99999999999");
            formulario.cantidad.focus();
        }
    }
     
}

function borrard(){

    document.getElementById("cantidad").value="";
    document.getElementById("cantidadi").value="";
    document.getElementById("maximom").value="";
}