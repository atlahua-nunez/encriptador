const caracteresEspeciales = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?´@]/);
const acentos = new RegExp(/[ÁÉÍÓÚáéíóúÄËÏÖÜäëïöü]/);

function limpiarCaja(){
    document.getElementById('input_text').value = "";
    document.getElementById('output_text').value = "";
    document.getElementById('input_text').focus();
}


function cifrar(){
    //Tomar valor del inputbox y convertirlo en minusculas.
    let input = document.getElementById('input_text').value.toLowerCase(); 
    if(input == ""){
        alert("Campo vacío, por favor escribe texto a codificar!");
        return
    }
    //Este bucle revisa cada caracter del input box y actúa acorde a las siguientes condiciones.
    for (var i=0; i < input.length; i++){
        //Agregar una excepción para que arroje errores
        try {
            if((isNaN(input[i]) == false) && (input[i] != " ")) throw "números."; //Revisa si cada carácter del input es un numero o si el campo esta vacío
            if(caracteresEspeciales.test(input)) throw "carácteres especiales.";    //Revisa si el input contiene caracteres especiales.
            if(acentos.test(input)) throw "acentos."; //Revisa si las letras tiene acentos.
        } catch (error) {
            alert( "No se permiten " + error);
            document.getElementById("btn-copiar").style.display = "none";
            return
        }
    }
    
    let textoCodificado = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    
    document.getElementById('output_text').value = textoCodificado;
    document.getElementById('mono').style.display = "none";
    document.getElementById('mensaje').style.display = "none";
    document.getElementById('btn-copiar').removeAttribute('hidden');
    document.getElementById('input_text').value = "";
    document.getElementById('input_text').focus();
}

function descifrar(){
    let input = document.getElementById('input_text').value.toLowerCase();

    let textoDescifrado = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    if(input == ""){
        alert("Campo vacío, por favor escribe texto a decodificar!");
        return
    }
    document.getElementById('output_text').value = textoDescifrado;
    document.getElementById('input_text').value = "";
    document.getElementById('input_text').focus();
}



function copyToClipBoard() {
    navigator.clipboard.writeText(document.getElementById("output_text").value);
    document.getElementById('output_text').value = "";
    alert("Texto copiado");
    document.getElementById('input_text').focus();    
}

limpiarCaja();