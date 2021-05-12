var inversion = document.getElementById('Inver');

function Validar(){
    console.log('Validando...');
    
    if(inversion.value === null || inversion.value === ''){
        alert('Ingresa tu inversion');
    }else if(isNaN(inversion.value)) {
        alert('Utilice caracteres numericos en el campo');
    }else if(inversion.value.length > 10){
        alert('Por el momento solo se acptan inversiones de maximo 10 cifras');
    }else if(inversion.value < 0){
        alert('Solo se admiten valores positivos');
    }else{
        var inversio = parseInt(document.formul.inversi.value);
        var ganancia = (inversio*2)/100;
        var total = ganancia + inversio;
        alert('Su inversión es de: ' + inversio + ' Con una ganancia de: ' + ganancia + ' Dando un total de: ' + total + '');
    }
    
    
    return false;
}