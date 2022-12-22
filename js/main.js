let frase =  document.querySelector(".texto");
let texto = document.querySelector(".container-texto");
let containerRetangulo = document.querySelector(".container-retangulo");
let botaoCriptografar = document.querySelector(".criptografar");
let botaoDescriptografar = document.querySelector(".descriptografar");
let mensagem =  document.querySelector(".container-mensagem-validacao");
mensagem.style.visibility = "hidden";

botaoCriptografar.addEventListener("click", function mensagemDeValidacao() {
    if (/^[a-z][^(áàâãéèêíïóôõöúç)]+$/.test(frase.value)) {
        mensagem.style.visibility = "hidden";
    }
    else if (!/^[A-Z(áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ) ]+$/.test(frase.value)) {
        mensagem.style.visibility = "visible";
     };
});

botaoDescriptografar.addEventListener("click", function mensagemDeValidacao() {
    mensagem.style.visibility = "hidden";
});

function criptografar (frase) {
    let texto = frase ? frase.value.split(""): "";

    texto.forEach((element, i) => {
        if (element == "a") {
            texto[i] = "ai";
         } else if ( element == "e") {
           texto[i] = "enter";
         } else if (element == "i") {
            texto[i] =  "imes";
         } else if (element == "o") {
            texto[i] = "ober";
         } else if (element == "u") {
            texto[i] =  "ufat";
        }

    });
    
    return texto.join("");
};

function exibirCriptografia() {
   texto.innerHTML = criptografar(frase);
   mostraMensagemDeErro(true);
   containerRetangulo.innerHTML = criptografar(frase);
};

function descriptografar (frase) {
    let caracteres = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let texto = frase ? frase.value : "";

    for (let i = 0; i < caracteres.length; i++) {
        if (texto.includes(caracteres[i][1])) {
            texto = texto.replace(caracteres[i][1], caracteres[i][0]);
        }
    }
    return texto;
};

function exibirTextoDescriptografado () {
    texto.innerHTML = descriptografar(frase); 
    mostraMensagemDeErro(true);
    containerRetangulo.innerHTML = descriptografar(frase);
};

function mostraMensagemDeErro (bool) {
   let mensagem =  document.getElementById("container-mensagem-erro");
   mensagem ? mensagem.style.display = "none" : "";
};