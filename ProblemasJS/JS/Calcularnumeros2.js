var numero1 = document.getElementById('Numero1');
var numero2 = document.getElementById('Numero2');
var numero3 = document.getElementById('Numero3');
var cont = 0;

function Validar(){
    console.log('Validando...');
    valid(numero1);
    valid(numero2);
    valid(numero3);
    
    return false;
}

function valid(valor){

    cont = cont+1;
    alert(parseInt(document.formul.numer1.value)r0000000000000000000);
    var num1 = parseInt(document.formul.numer1.value);
    var num2 = parseInt(document.formul.numer2.value);
    var num3 = parseInt(document.formul.numer3.value);
    alert(num1 + num2 + num3);

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
    }else if (numero1.value == numero2.value || numero2.value == numero3.value || numero1.value == numero3.value){
        alert('Algunos números se repiten, por favor cambialos');
        cont=0;
    }

    if(cont == 3){
        
        //if(){
          //  alert('El número mayor es: ' + parseInt(document.formul.numer1.value) + '');
        //}else if(){
          //  alert('El número mayor es: ' + parseInt(document.formul.numer2.value) + '');
        //}else if(){
          //  alert('El número mayor es: ' + parseInt(document.formul.numer3.value) + '');
        //}
        //cont=0;
        
    }
}