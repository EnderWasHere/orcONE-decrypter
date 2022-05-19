const intText = document.getElementById("intTxt");
const outText = document.getElementById("outTxt");
const resultText = document.querySelector(".resultText");

// controlador de elementos visuais simples
function workMode(param) {
    if (param){
        document.getElementById("Card").style.display = "none";
        document.getElementById("emptyAlert").style.display = 'none';
        document.getElementById("btnAlert").style.display = 'none';
        document.getElementById("outForm").style.display = 'block'
    }
    else
    {
        document.getElementById("Card").style.display = "block";
        document.getElementById("emptyAlert").style.display = 'block';
        document.getElementById("btnAlert").style.display = 'block';
        document.getElementById("outForm").style.display = 'none'
    }
}

function encrypt() {
    if (intText.value !="") {
        workMode(true);
        encryptedTxt = intText.value.replace(/e/g, "enter");
        encryptedTxt = encryptedTxt.replace(/i/g, "imes");
        encryptedTxt = encryptedTxt.replace(/a/g, "ai");
        encryptedTxt = encryptedTxt.replace(/o/g, "ober");
        encryptedTxt = encryptedTxt.replace(/u/g, "ufat");

        outText.textContent = encryptedTxt;

}}

function decrypt() {
    if(intText.value !="") {
        workMode(true);
        decryptedTxt = intText.value.replace(/enter/g, "e");
        decryptedTxt = decryptedTxt.replace(/imes/g, "i");
        decryptedTxt = decryptedTxt.replace(/ai/g, "a");
        decryptedTxt = decryptedTxt.replace(/ober/g, "o");
        decryptedTxt = decryptedTxt.replace(/ufat/g, "u");

        outText.textContent = decryptedTxt;
}}

// limpar intput e resetar layout
function intClear() {
    workMode(false);
    intText.value = ""
    document.getElementById("validationAlert").style.display = 'none';
}

// validação intput
function intValidation() {
    intText.value = intText.value.toLowerCase();
    if (intText.value.match(/([^\w\s+*:;,.'"()/\\]+)/)) {
        // console.log ("ERRO DE VALIDAÇÃO")
        document.getElementById("validationAlert").style.display = 'block';
        intText.value = intText.value.replace(/([^\w\s+*:;,.'"()/\\]+)/gi, "");
    }
    else {
        document.getElementById("validationAlert").style.display = 'none';
        // console.log ("VALIDAÇÃO OKAY")
}}

// copiar texto output
function ctrolCtxt() {
    outText.select();
    outText.setSelectionRange(0, 99999); /* mobile friendly */
    navigator.clipboard.writeText(outText.value);
    alert("Copiado. 📋✔️ ");
}