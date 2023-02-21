/* JavaScript es un Lenguaje
que posee un paradigma orientado a objetos y a funciones y eventos
por tal motivo presenta una particularidad que es:

No tipado
No existe int, float, string, ni char, ni nada

Todo es var -> variable

de acuerdo al estandar ES6 se manejan 3 tipos de 
variables

VAR
LET es una variable de tipo "Protected"
CONST es un valor constante
*/


function validar(formulario){

    if(formulario.nombre.value.lenght <= 3){
        alert("Favor de ingresar mas de 3 caracteres en campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm"
    + "QWERTYUIOPASDFGHJKLÑZXCVBNM";

    var cadenaNombre = formulario.nombre.value;

    alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.lenght; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(todoesvalido){
        alert("Ingrese solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var edad = parseInt(formulario.edad.value);

    if((edad < 0) || (edad >= 99)){
        alert("Favor de ingresar una edad valida de entre 01 y 99 años");
        formulario.edad.focus();
        return false;
    }

    var checarABC = "12345687890";

    var cadenaNombre = formulario.edad.value;

  //  alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.lenght; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(todoesvalido){
        alert("Ingrese solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }
}