//validamos entrada de numeros para prestamo
function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function calcular(){
    var prestamo1 = document.getElementById("prestamo").value;
    var porciento1 = document.getElementById("porciento").value;
    var años1 = document.getElementById("anios").value;
    var letras=/\D\./;

    if(letras.test(prestamo1) || letras.test(porciento1) || letras.test(años1)){
        alert("Ingresa solo números en los campos");
        return false;
    }
    else{
        var prestamo = parseFloat(prestamo1);
        var tasanual = parseFloat(porciento1);
        var años = parseInt(años1);
        
        var meses = años * 12;
        var operacion = prestamo / meses;
        var cuenta = prestamo;

        var final = 0;
        var tinter = 0;
        var tpresta = 0;
        var tcuota = 0;
        
        var yinter = "";
        var cuentapagos ="";
        var imprimesa = "";
        var imprime = "";
        var ipresta = "";
        var icouta = "";
        var saldof = '';
        
        var ccuota;
        var iinteres;
        var salir;


        if((prestamo >= 1) && (prestamo <= 9999999999999) && (tasanual >= 0) && (tasanual <= 100) && (años >= 1) && (años <= 20)){
            //parte de los calculos
            tasanual = tasanual / 100;
            var mtasita = tasanual / 12;

            for(var j = 0; j < meses; j++){
                iinteres = cuenta * mtasita;
                ccuota = iinteres + operacion;

                imprime += cuenta.toFixed(2) + "\n";
                cuentapagos += j + 1 + "\n";
                ipresta += operacion.toFixed(2) + "\n";
                icouta += ccuota.toFixed(2) + "\n";
                yinter += iinteres.toFixed(2) + "\n";

                cuenta = prestamo - operacion;
                prestamo = cuenta;
                salir = cuenta;
                imprimesa += salir.toFixed(2) + "\n";

                tinter += iinteres;
                tpresta = operacion * meses;
                tcuota += ccuota;
                saldof += Math.abs(cuenta.toFixed(2)) + "\n";
            }
            
            document.querySelector("#numpago").textContent = cuentapagos;
            document.querySelector("#capital").textContent = imprime;
            document.querySelector("#intereses").textContent = yinter;
            document.querySelector("#cuota").textContent = icouta;
            document.querySelector("#pagoabono").textContent = ipresta;
            document.querySelector("#saldof").textContent = saldof;

            document.querySelector("#totalinter").textContent = "$" + tinter.toFixed(2);
            document.querySelector("#totalcouta").textContent = "$" + tpresta.toFixed(2);
            document.querySelector("#totalabono").textContent = "$" + tcuota.toFixed(2);

        }
        else{
            alert("Ingrese valores válidos entre 1 y 9999999999999 en préstamo, 1 y 100 en % y años entre 1 y 20, sin dejar campos vacíos");
            return false;
        }
    
    }
}

function borrard(){
    document.getElementById("prestamo").value="";
    document.getElementById("porciento").value="";
    document.getElementById("anios").value="";

    document.querySelector("#numpago").textContent = "";
    document.querySelector("#capital").textContent = "";
    document.querySelector("#intereses").textContent = "";
    document.querySelector("#cuota").textContent = "";
    document.querySelector("#pagoabono").textContent ="";
    document.querySelector("#saldof").textContent = "";
    
    document.querySelector("#totalinter").textContent = "";
    document.querySelector("#totalcouta").textContent = "";
    document.querySelector("#totalabono").textContent = "";
}
