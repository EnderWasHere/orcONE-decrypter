const intText = document.getElementById("intTxt"); // or however you want to get it
const outText = document.getElementById("outTxt"); //where is going to show the result of the encrypt/decrypt
const resultText = document.querySelector(".resultText");

workMode(true)
//this function make the text and image of the result area disappear when the encrypt/decrypt button are clicked
function workMode(param) {
    if (param){
        document.getElementById("Card").style.display = "none";
        document.getElementById("emptyAlert").style.display = 'none';
        document.getElementById("outForm").style.display = 'block'
    }
    else
    {
        document.getElementById("Card").style.display = "block";
        document.getElementById("emptyAlert").style.display = 'block';
        document.getElementById("outForm").style.display = 'none'
    }
}

function encrypt() {
    if (intText.value !="") {
        workMode(true);
        textEncrypted = intText.value.replace(/e/g, "enter");
        textEncrypted = textEncrypted.replace(/i/g, "imes");
        textEncrypted = textEncrypted.replace(/a/g, "ai");
        textEncrypted = textEncrypted.replace(/o/g, "ober");
        textEncrypted = textEncrypted.replace(/u/g, "ufat");

        outText.textContent = textEncrypted;
        intText.value = "";
        outText.lupa="none";

}}

function decrypt() {
    if(intText.value !="") {
        workMode(true);
        textDecrypted = intText.value.replace(/enter/g, "e");
        textDecrypted = textDecrypted.replace(/imes/g, "i");
        textDecrypted = textDecrypted.replace(/ai/g, "a");
        textDecrypted = textDecrypted.replace(/ober/g, "o");
        textDecrypted = textDecrypted.replace(/ufat/g, "u");

        outText.textContent = textDecrypted;
        intText.value = "";
        outText.lupa="none";
}}

function intClear () {
    workMode(false);
    intText.value = ""
    document.getElementById("validationAlert").style.display = 'none';
}

function intValidation() {
    intText.value = intText.value.toLowerCase(); // covert to lower case
    if (intText.value.match(/([^\w\s+*:;,.'"()/\\]+)/)) {
        console.log ("ERRO DE VALIDAÇÃO")
        document.getElementById("validationAlert").style.display = 'block';
        intText.value = intText.value.replace(/([^\w\s+*:;,.'"()/\\]+)/gi, "");
    }
    else {
        // hide validation error
        document.getElementById("validationAlert").style.display = 'none';
        console.log ("VALIDAÇÃO OKAY")
}}
    