var base = document.getElementById('Base');
var venta1 = document.getElementById('Venta1');
var venta2 = document.getElementById('Venta2');
var venta3 = document.getElementById('Venta3');
var cont = 0;

function Validar(){
    console.log('Validando...');
    valid(base);
    valid(venta1);
    valid(venta2);
    valid(venta3);
    
    
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
    }else if(valor.value.length > 10){
        alert('Por el momento solo se acptan valores de maximo 10 cifras');
        cont=0;
    }else if(valor.value < 0){
        alert('Solo se admiten valores positivos');
        cont=0;
    }

    if(cont == 4){
        var bas = parseInt(document.formul.bas.value);
        var comision = ((parseInt(document.formul.vent1.value)+parseInt(document.formul.vent2.value)+parseInt(document.formul.vent3.value))*10)/100;
        var total = comision + bas;
        alert('Su sueldo es de: ' + bas + ' Con una comisión de: ' + comision + ' Dando un total de: ' + total + '');
        cont=0;
        
    }
}