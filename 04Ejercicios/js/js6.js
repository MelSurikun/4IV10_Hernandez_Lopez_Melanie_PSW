function fechavali(){
    var fecha = new Date(formulario.fecha.value);

    var hoy = new Date();
    var mes = fecha.getMonth()+1;
    var dia = fecha.getDate();

    if(fecha > hoy){
        alert("No se puede poner una fecha que no ha pasado");
        formulario.fecha.focus();
        return false;
    }

    if((dia<1) || (dia>31)){
        alert("El día ingresado no existe, prueba en un rango de 1-31");
        formulario.fecha.focus();
        return false;
    }

    if((mes == 2) && (dia > 29)){
        alert("Febrero solo cuenta con 29 dias, prueba en un rango de 1-29");
        formulario.fecha.focus();
        return false;
    }

    var fechaInicio = hoy.getTime();
    var fechaFin = fecha.getTime();
    let dife = fechaInicio - fechaFin;
    var difeanios = dife / (1000*60*60*24*365);
    difeanios= Math.trunc(difeanios);

    document.getElementById("mientof").value = (difeanios);
}
