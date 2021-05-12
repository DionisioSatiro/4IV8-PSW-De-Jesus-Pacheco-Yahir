var numero1 = document.getElementById('Numero1');
var numero2 = document.getElementById('Numero2');
var cont = 0;
var total = 0;

function Validar(){
    console.log('Validando...');
    valid(numero1);
    valid(numero2);
    
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
    }else if(valor.value.length > 4){
        alert('Por el momento solo se acptan valores de maximo 4 cifras');
        cont=0;
    }else if(valor.value < 0){
        alert('Solo se admiten valores positivos');
        cont=0;
    }

    if(cont == 2){
        if(numero1.value == numero2.value){
            total = (parseInt(document.formul.numer1.value))*(parseInt(document.formul.numer2.value));
            alert('El producto de los números es: ' + total + '');
        }else if(numero1.value > numero2.value){
            total = parseInt(document.formul.numer1.value)-parseInt(document.formul.numer2.value);
            alert('La diferencia de los números es: ' + total + '');
        }else{
            total = (parseInt(document.formul.numer1.value)) + (parseInt(document.formul.numer2.value));
            alert('La suma de los números es: ' + total + '');
        }
        cont=0;
        
    }
}