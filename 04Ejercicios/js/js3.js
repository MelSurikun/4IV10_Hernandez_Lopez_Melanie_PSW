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

function cantifinal(){
   //Operaciones respecto a los descuentos y final
    var nombre = document.getElementById("nombre").value;
    var marca = document.getElementById("marca").value;
    var tipo = document.getElementById("tipo").value;
    var precio = document.getElementById("precio").value;

    var noletras = /\D\./;
    var nonum = /\d\./;

    if(nonum.test(nombre) || nonum.test(marca) || nonum.test(tipo)
    || noletras.test(precio)){
        alert("Llena los campos con su valor de respuesta correspondiente");
        formulario.nombre.focus();
        return false;
    } else{
        nombre = String(nombre);
        marca = String(marca);
        tipo = String(tipo);
        precio = parseInt(precio);

        if(precio > 0 && precio <= 99999)
        {
            if (nombre.length < 15 && marca.length < 15 && tipo.length < 15)
            {
                var papas = precio * 0.02;
                var pastel = precio * 0.1;
                var lacteo = precio* 0.075;

                if(tipo == "papas" || tipo == "PAPAS" || tipo == "Papas")
                {
                    document.getElementById("cantidad").value = "$ " + (precio - papas);
                } 
                else 
                {
                    if(tipo == "pastelito" || tipo == "PASTELITO" || tipo == "Pastelito")
                    {
                        document.getElementById("cantidad").value = "$ " + (precio - pastel);
                    }
                    else 
                    {
                        if(tipo == "lacteo" || tipo == "LACTEO" || tipo == "Lacteo"
                        || tipo == "lácteo" || tipo == "LÁCTEO" || tipo == "Lácteo")
                        {
                                document.getElementById("cantidad").value = "$ " + (precio - lacteo);
                        }
                    }   
                }
            }
            else{
                alert("Ingresa como máximo 14 caracteres en los nombres, sin dejar campos en blanco");
                return false;
            }
        }
        else
        {
            alert("Ingresa un precio válido entre 1 y 99999");
            return false;
        }
    }
}

function borrard(){
    //Borramos los elementos
    document.getElementById("nombre").value="";
    document.getElementById("marca").value="";
    document.getElementById("tipo").value="";
    document.getElementById("precio").value="";
    document.getElementById("cantidad").value="";
}