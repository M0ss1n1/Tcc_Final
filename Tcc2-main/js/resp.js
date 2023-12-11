document.addEventListener("DOMContentLoaded", function () {
    // Obter o texto gerado do parâmetro de consulta
    const urlParams = new URLSearchParams(window.location.search);
    const generatedText = urlParams.get('generatedText');
  
    // Esconder o loader
    document.querySelector(".loader-wrapper").style.display = "none";
  
    // Exibir o texto gerado na página
    const contentDiv = document.querySelector(".content");
    contentDiv.style.display = "block";

    // Adicione o texto gerado à div com id "resposta"
    const respostaDiv = document.querySelector("#resposta h1");
    respostaDiv.innerText = generatedText;
});
