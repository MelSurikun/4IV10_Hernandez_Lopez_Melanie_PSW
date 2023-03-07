function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function cobrofinal(){
	var anti1 = document.getElementById("anti").value;
    var salario1 = document.getElementById("salario").value;

	var letras=/\D\./;

	if(letras.test(anti1) || letras.test(salario1)){
        alert("Ingresa solo números en los campos");
        return false;
    }
	else{
		var anti = parseFloat(anti1);
		var salario = parseFloat(salario1);
		var porciento = 0;
		var util = 0;

		if((anti >= 1) && (anti <= 100) && (salario >= 1) && (salario <= 9999999)){
			switch(anti) {
				case 0: porciento = 5;
				break;
				case 1: porciento = 7;
				break;
				case 2: porciento = 10;
				break;
				case 3: porciento = 15;
				break;
				default: porciento = 20;
			}
			var util = salario * (porciento/100);
			
			document.getElementById("util").value = "$ "+ util;
		}
		else{
			alert("Ingrese valores válidos entre 1 y 100 en antiguedad, 1 y 9999999 en salario, sin dejar campos vacíos");
            return false;
		}
	}
	
    var anti = parseInt(document.getElementById("anti").value);
    var salario = parseInt(document.getElementById("salario").value);
	var porciento = 0;
    var util = 0;


}

function borrard(){

    document.getElementById("anti").value="";
    document.getElementById("salario").value="";
    document.getElementById("util").value="";
}