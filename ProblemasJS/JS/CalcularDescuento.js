var compra = document.getElementById('Compra');

function Validar(){
    console.log('Validando...');
    
    if(compra.value === null || compra.value === ''){
        alert('Ingresa tu compra');
    }else if(isNaN(compra.value)) {
        alert('Utilice caracteres numericos en el campo');
    }else if(compra.value.length > 10){
        alert('Por el momento solo se acptan compras de maximo 10 cifras');
    }else if(compra.value < 0){
        alert('Solo se admiten valores positivos');
    }else{
        var comp = parseInt(document.formul.compr.value);
        var descuento = (comp*15)/100;
        var total = comp - descuento;
        alert('Su compra es de: ' + comp + ' Con un descuento de: ' + descuento + ' Dando un total de: ' + total + '');
    }
    
    
    return false;
}