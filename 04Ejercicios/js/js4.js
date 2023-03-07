function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function califinal(){

    var uno = document.getElementById("primero").value;
    var dos = document.getElementById("segundo").value;
    var tres = document.getElementById("tercero").value;
    var examen = document.getElementById("examen").value;
    var trabajo = document.getElementById("trabajo").value;

    var letras=/\D\./;

    if(letras.test(uno) || letras.test(dos) || letras.test(tres) ||
    letras.test(examen) || letras.test(trabajo)){
        alert("Ingresa solo números en los campos");
        return false;
    }else{
        var uno1 = parseFloat(uno);
        var dos1 = parseFloat(dos);
        var tres1 = parseFloat(tres);
        var examen1 = parseFloat(examen);
        var trabajo1 = parseFloat(trabajo);

        if((uno1 >= 0) && (uno1 <= 10) && (dos1 >= 0) && (dos1 <= 10) &&
        (tres1 >= 0) && (tres1 <= 10) && (examen1 >= 0) && (examen1 <= 10) &&
        (trabajo1 >= 0) && (trabajo1 <= 10)){

            var final = ((uno1 + dos1 + tres1) / 3.0) * 0.55;
            final = final + (examen1 * 0.3);
            final = final + (trabajo1 * 0.15);
        
            document.getElementById("calificacion").value = final;
            }
        else{
            alert("Ingresa calificaciones entre 0 y 10");
            return false;
        }

        }
    }

function borrard(){
    //Borramos los elementos
    document.getElementById("primero").value="";
    document.getElementById("segundo").value="";
    document.getElementById("tercero").value="";
    document.getElementById("examen").value="";
    document.getElementById("trabajo").value="";
    document.getElementById("calificacion").value="";
}