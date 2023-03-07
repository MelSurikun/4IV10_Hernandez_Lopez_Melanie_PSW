function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function final(){

    var horasfin1 = document.getElementById("horas").value;
    var costofin1 = document.getElementById("costo").value;

    var letras=/\D\./;

    if(letras.test(horasfin1) || letras.test(costofin1)){
        alert("Ingresa solo números en los campos");
        return false;
    }
    else{
        var horasfin = parseInt(horasfin1);
        var costofin = parseInt(costofin1);
        var horas4148 = 0;
        var horasmas49 = 0;
        var extra = 0;
    
        if((horasfin >= 1) && (horasfin <= 9999999) && (costofin >= 1) && (costofin <= 9999999)){
            if (horasfin > 40 ) { 
                horas4148 = horasfin -40;
                
                if (horas4148 > 8) {
                    horasmas49 = horas4148 - 8;
                    horas4148 = 8;
                }
            }
            
            extra = (horas4148 * 2 * costofin) + (horasmas49 * 3 * costofin) ;
            
            document.getElementById("pago").value = extra;
        
        }
        else{
            alert("Ingrese valores válidos entre 1 y 9999999, sin dejar campos vacíos");
            return false;
        }
    }
}

function borrard(){
    document.getElementById("horas").value="";
    document.getElementById("costo").value="";
    document.getElementById("pago").value="";
}