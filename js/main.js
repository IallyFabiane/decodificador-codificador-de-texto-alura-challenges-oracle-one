let frase =  document.querySelector(".texto");

function criptografar (frase) {
    let texto = frase.value.split("");
    //console.log(texto);

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
    
    //console.log(texto.join(""));
    return texto.join("");
}

function exibirCriptografia() {
   let frase =  document.querySelector(".texto");
   let texto = document.querySelector(".container-texto");
   let containerRetangulo = document.querySelector(".container-retangulo");
   texto.innerHTML = criptografar(frase);
   mostraMensagemDeErro(true);
   containerRetangulo.innerHTML = criptografar(frase);
}

function mostraMensagemDeErro (bool) {
    document.getElementById("container-mensagem-erro").style.display = "none";
};

