var hombres = document.getElementById('Hombres');
var mujeres = document.getElementById('Mujeres');
var cont = 0;

function Validar(){
    console.log('Validando...');
    valid(hombres);
    valid(mujeres);
    
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

    if(cont == 2){
        var total= parseInt(document.formul.hombre.value)+parseInt(document.formul.mujere.value);
        var phombr = ((parseInt(document.formul.hombre.value))*100)/total;
        var pmujer = ((parseInt(document.formul.mujere.value))*100)/total;
        alert('El porsentaje de mujeres es de : ' + pmujer + '% y el porcentaje de hombres es de : ' + phombr + '%');
        cont=0;
        
    }
}