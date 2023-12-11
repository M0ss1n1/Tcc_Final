// seu-script.js

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obtém os valores dos campos do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Cria um objeto para armazenar os dados
    var formData = {
      name: name,
      email: email,
      message: message
    };
    
    // Converte o objeto em uma string JSON
    var formDataJSON = JSON.stringify(formData);
    
    // Armazena a string JSON no local storage
    localStorage.setItem("formData", formDataJSON);
    
    // Redireciona o usuário para outra página ou faz o que for necessário
    // Neste exemplo, redirecionaremos o usuário de volta para a página inicial
    window.location.href = "contato.html";
  }
  
  // Adiciona um ouvinte de evento para o envio do formulário
  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
  