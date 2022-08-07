/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

const limpiarCopiado = () => {
    let bienCopiado = document.getElementById('texto-copiado');
    bienCopiado.innerText = "";
}

const encriptarTexto = () => {
    let textoInput = document.getElementById('texto').value;
    let textoResultado = document.getElementById('texto-output');
    let textoModificado = textoInput.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    console.log(textoModificado)
    textoResultado.value = textoModificado;
    limpiarCopiado();
}

const desencriptarTexto = () => {
    let textoInput = document.getElementById('texto').value;
    let textoResultado = document.getElementById('texto-output');
    let textoModificado = textoInput.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u')
    textoResultado.value = textoModificado;
    console.log(textoModificado)
    limpiarCopiado();
}

const copiarTexto = () => {
    let textoCopiado = document.getElementById('texto-output');
    textoCopiado.select();
    document.execCommand("copy");
    limpiarCopiado()
    let bienCopiado = document.getElementById('texto-copiado');
    bienCopiado.innerText = "Texto copiado";
}

const limpiarTexto = () => {
    let textoInput = document.getElementById('texto');
    let textoResultado = document.getElementById('texto-output');
    textoInput.value = "";
    textoResultado.value = "";
    limpiarCopiado();
}
