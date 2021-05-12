var parcial1 = document.getElementById('Parcial1');
var parcial2 = document.getElementById('Parcial2');
var parcial3 = document.getElementById('Parcial3');
var efinal = document.getElementById('EFinal');
var tfinal = document.getElementById('TFinal');
var cont = 0;

function Validar(){
    console.log('Validando...');
    valid(parcial1);
    valid(parcial2);
    valid(parcial3);
    valid(efinal);
    valid(tfinal);
    
    
    return false;
}

function valid(valor){

    cont = cont+1;

    if(valor.value === null || valor.value === ''){
        alert('Faltan valores');
        cont=0;
    }else if(isNaN(valor.value)) {
        alert('Utilice caracteres numericos en el campo');
        cont=0;
    }else if(valor.value.length > 2){
        alert('Por el momento solo se acptan valores de maximo 2 cifras');
        cont=0;
    }else if(valor.value < 0){
        alert('Solo se admiten valores positivos');
        cont=0;
    }else if(valor.value > 10){
        alert('No se admiten calificaciones mayores a 10');
    }

    if(cont == 5){
        var parciales = ((parseInt(document.formul.parcia1.value)+parseInt(document.formul.parcia2.value)+parseInt(document.formul.parcia3.value))*55)/30;
        var efin = ((parseInt(document.formul.efina.value))*30)/10;
        var tfin = ((parseInt(document.formul.tfina.value))*15)/10;
        var total = (parciales + efin + tfin)/10;
        alert('Obtuviste: ' + total + '' );
        cont=0;
        
    }
}