const textArea =document.querySelector(".text-area");
const mensagem =document.querySelector(".mensagem");
const btncriptografar=document.querySelector(".button");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    let textArea = document.getElementById("text-area").value;
    const textoEncriptado =Encriptar(textArea);
    mensagem.value= textoEncriptado;
    textArea.value=  " ";
}

function Encriptar(stringEncriptada) {

let matrizCodigo= [ ["e" , "enter"]  , ["i"  ,"imes"], ["a"  , "ai"], ["o"  ,"ober"],  ["u"  , "ufat"]];
stringEncriptada= stringEncriptada.toLowerCase();

for(let i=0; i<matrizCodigo.length;  i++) {
    if (stringEncriptada.includes(matrizCodigo [i] [0]))
        stringEncriptada= stringEncriptada.replace ( matrizCodigo [i] [0] ,matrizCodigo[i] [1]);
}
return stringEncriptada
}
function btnDesencriptar(){
    const textoDesencriptada =Desencriptar(textArea.value);
    mensagem.value= textoDesencriptada;
    textArea.value=  "";
}

function Desencriptar(stringDesencriptada) {

let matrizCodigo= [ ["e" , "enter"]  , ["i"  ,"imes"], ["a"  , "ai"], ["o"  ,"ober"],  ["u"  , "ufat"]];
stringDesencriptada= stringDesencriptada.toLowerCase();

for(let i=0; i<matrizCodigo.length;  i++) {
    if (stringDesencriptada.includes(matrizCodigo [i] [1]))
        stringDesencriptada= stringDesencriptada.replace ( matrizCodigo [i] [1] ,matrizCodigo[i] [0]);
}

return stringDesencriptada;

}


