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

function cobrofinal(){
    var paguito = document.getElementById("sueldob").value;
    var numventas = document.getElementById("ventas").value;
    var paga = document.getElementById("cobro").value;
    var comision = 0;
    var total = 0;

    var letras=/\D\./;
    
    if(letras.test(paguito) ||letras.test(numventas)){
        alert("Ingrese solo números en los campos");
        formulario.sueldob.focus();
        }
    else{
        var paguito1 = parseInt(paguito);
        var numventas1 = parseInt(numventas);
        var paga1 = parseInt(paga);  
        
        if((paguito1 > 0) && (paguito1 <= 99999999999)){
            if(numventas1 >= 5){
                comision = numventas1 * 0.35;

                total = (paguito + comision) * 0.88;

                document.getElementById("comi").value = "$ " + comision;
                document.getElementById("cobro").value = "$ " + total;
            }
            else{
            total = (paguito + comision) * 0.88;

            document.getElementById("comi").value = "$ " + comision;
            document.getElementById("cobro").value = "$ " + total;
            }
        }
        else{
            alert("Llena los campos con una cantidad valida entre 1 y 99999999999");
            formulario.cantidad.focus();
        }
        }
}

function borrard(){

    document.getElementById("sueldob").value="";
    document.getElementById("ventas").value="";
    document.getElementById("comi").value="";
    document.getElementById("cobro").value="";
}