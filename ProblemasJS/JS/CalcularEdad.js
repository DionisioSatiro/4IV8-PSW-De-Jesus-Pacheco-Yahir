var nacimiento = document.getElementById('Nacimiento');
var actual = document.getElementById('Actual');
var cumpleanios = document.getElementById('Cumpleanios');
var cont = 0;

function Validar(){

        console.log('Validando...');
        valid(nacimiento);
        valid(actual);
    
    return false;
}

function valid(valor){

    cont = cont+1;

    if(valor.value === null || valor.value === '' || cumpleanios.value === null || cumpleanios.value ===''){
        alert('Faltan valores');
        cont=0;
    }else if((isNaN(valor.value))||(isNaN(cumpleanios.value))) {
        alert('Utilice caracteres numericos en el campo');
        cont=0;
    }else if(valor.value.length != 4){
        alert('Por el momento solo se acptan valores de maximo 4 cifras');
        cont=0;
    }else if(valor.value < 0 || cumpleanios.value < 0){
        alert('Solo se admiten valores positivos');
        cont=0;
    }else if(nacimiento.value > actual.value){
        alert('Tu año de nacimiento no puede ser mayor al año actual');
        cont=0;
    }else if(cumpleanios.value !=1 & cumpleanios.value!=2){
        alert('Debes introducir 1 o 2 dependiendo de si ya cumpliste años');
        cont=0;
    }

    if(cont == 2){
        var edad= parseInt(document.formul.actua.value) - parseInt(document.formul.nacimient.value);
        if(cumpleanios.value == 2){
            edad = edad-1; 
        }
        alert('Su edad es de  : ' + edad + ' años');
        cont=0;
        
    }
}