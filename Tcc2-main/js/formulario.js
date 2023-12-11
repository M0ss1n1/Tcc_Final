document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("tcc-form").addEventListener("submit", function (event) {
      // Evitar o comportamento padrão de envio do formulário
      event.preventDefault();
      const API_KEY = "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";

      async function getCompletion(prompt) {
          const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${API_KEY}`,
              },
              body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: [
                      { role: "system", content: "You are a helpful assistant." },
                      { role: "user", content: prompt },
                  ],
                  max_tokens: 1024,
                  temperature: 0.9,
              }),

          });

          const data = await response.json();
          return data;
      }

      const tecnicoES = document.getElementById('area').value;
      const materias = document.getElementById('materias').value;
      const assunto = document.getElementById('assunto').value;
      const pesquisaRecente = document.getElementById('pesquisaRecente').value;
      const teoPra = document.getElementById('teoPra').value;
      const trabalhoSociedade = document.getElementById('trabalhoSociedade').value;

      const loadingMessage = document.getElementById('loading-message'); // Novo elemento para a mensagem de carregamento
      const successMessage = document.getElementById('success-message');
      const back = document.getElementById('back');

      const dummy = {
        "id": "chatcmpl-8LIPnUNl7bfwol4IKKPxXT1VIwZ3G",
        "object": "chat.completion",
        "created": 1700086367,
        "model": "gpt-3.5-turbo-0613",
        "choices": [
            {
                "index": 0,
                "message": {
                    "role": "assistant",
                    "content": "(Tema: O Impacto da Inteligência Artificial na Agricultura: Um Estudo Teórico)\n\nA inteligência artificial (IA) tem desempenhado um papel cada vez mais importante em diversas áreas, e a agricultura não é exceção. Ao considerar as matérias \"lógica de programação\" e \"inteligência artificial\", que foram relevantes para você durante o curso de ensino superior, e levando em conta sua pesquisa recente sobre \"inteligência artificial no mundo da agricultura\", um tema interessante para o seu TCC seria explorar o impacto da inteligência artificial na agricultura de forma teórica.\n\nA agricultura é um dos pilares da sociedade, responsável por fornecer alimentos e recursos naturais essenciais para a nossa sobrevivência. Com o avanço da tecnologia, a aplicação da inteligência artificial no setor agrícola tem ganhado destaque, oferecendo soluções inovadoras e eficientes para melhorar a produtividade, reduzir custos e impactos ambientais.\n\nNo seu trabalho de pesquisa, você poderá analisar as diversas aplicações da inteligência artificial na agricultura, tais como o uso de algoritmos de aprendizado de máquina para otimizar a produção de safras, a utilização de drones equipados com sensores e câmeras para monitorar as condições das plantações em tempo real, e a implementação de sistemas de irrigação inteligente baseados em dados meteorológicos e análise preditiva.\n\nAlém disso, você poderá explorar a possibilidade de utilizar técnicas de IA para detectar doenças em plantas, prever problemas de pragas e criar modelos de previsão para a demanda de alimentos. Essas aplicações podem contribuir significativamente para aumentar a eficiência e sustentabilidade da agricultura, promovendo melhorias na produção, redução de desperdícios e menor dependência de agrotóxicos.\n\nAo abordar o tema de forma teórica, você poderá analisar os fundamentos e os conceitos por trás da inteligência artificial aplicada à agricultura, investigando os principais algoritmos e modelos utilizados, bem como as vantagens e desafios dessa abordagem. Também será importante discutir as implicações éticas e sociais desse avanço tecnológico, como a questão da substituição de mão de obra humana e a desigualdade no acesso à tecnologia.\n\nQuanto ao diferencial do tema em relação aos demais, é importante destacar que a abordagem teórica permitirá um maior aprofundamento na compreensão dos conceitos e fundamentos da inteligência artificial aplicada à agricultura, proporcionando uma visão mais crítica e reflexiva sobre seu impacto na sociedade. Além disso, você poderá mencionar exemplos de sites e plataformas específicas que se destacam nesse contexto, como o uso de algoritmos avançados em grandes empresas agrícolas ou tecnologias específicas desenvolvidas por startups do segmento.\n\nDessa forma, ao escolher o tema \"O Impacto da Inteligência Artificial na Agricultura: Um Estudo Teórico\" para o seu TCC, você terá a oportunidade de explorar uma área em ascensão, com aplicabilidade direta na sociedade, e analisar em profundidade os benefícios, desafios e implicações éticas da utilização da inteligência artificial no setor agrícola."
                },
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "prompt_tokens": 332,
            "completion_tokens": 788,
            "total_tokens": 1120
        }
    }
      const prompt = `"para contextualizar este é um prompt que vem de um formulário para um projeto de gerar temas de tcc, então responda de forma bem detalhada e objetiva, sem conversar com o usuario, sem usar palavras como 'claro, deixe me te ajudar.' me reponda apenas com a resposta final, sem citar o que foi relevante. a resposta final precisa conter os dados relevantes. respeite a risca o limite de 3391 caracteres e a formataçao do texto. inicie o texto com um titulo entre aspas e quebre uma linha. se possivel separe o texto em paragrafos caso encontre uma palavra "não" fora de contexto, apenas ignore ela e faça com que o texto flua normalmente desconsiderando aquela parte. caso haja algum momento em que falte coesão, tente fazer com que haja sentido no produto final.
      1=Ensino tecnico ou curso profissionalizante
      2=Faculdade/ensino superior
          
      Me de um tema para um tcc de "${tecnicoES}" levando em consideração as seguintes matérias que foram relevantes para mim no curso: "${materias}", também levando em consideração os assuntos que mais teve destaque dentro do curso "${assunto}". (caso tenha um não sem contexto, apenas ignore.) Leve em consideração a pesquisa recente de meu usuario "${pesquisaRecente}"(se houver uma), leve em consideração o tema sendo mais "${teoPra}" e por ultimo pense que como o tema poderia contribuir para ajudar na sociedade, caso o campo trabalhoSociedade esteja respondido, leve em consideração também "${trabalhoSociedade}", também dê um texto falando sobre como esse assunto que foi gerado é diferencial dos demais, se for algum site, o porque desse site ser diferencial dos outros"`;

      const button = document.querySelector("#generate");
      const output = document.querySelector("#output");
      
      button.addEventListener("click", async () => {
          console.log(prompt);

          if (!prompt) {
              window.alert("Por favor, insira um prompt");
              return;
          }

          try {
              // Mostrar mensagem de carregamento
              loadingMessage.classList.remove('hidden');

              const response = await getCompletion(prompt);
              console.log("API Response:", response);

              if (response && response.choices) {
                  const firstChoice = response.choices[0];
                  if (firstChoice?.message?.content) {
                      const contentElement = document.createElement('div');
                      contentElement.textContent = firstChoice.message.content;
                      successMessage.classList.remove('hidden');
                      back.classList.remove('hidden');
                      output.appendChild(contentElement);
                      document.querySelector('#output').classList.remove('hidden');
                      document.querySelector('#form-container').style.display = 'none';
                      document.querySelector('#resposta').style.display = 'block';
                      document.querySelector('#generate').classList.add('hidden');
                  } else {
                      console.error("Unexpected response format. Missing 'text' property:", response);
                  }
              } else {
                  console.error("Unexpected response format. Missing 'choices' property:", response);
              }

              // Ocultar mensagem de carregamento após receber a resposta
              loadingMessage.classList.add('hidden');
          } catch (error) {
              console.error("Error fetching completion:", error);
              // Certifique-se de ocultar a mensagem de carregamento em caso de erro
              loadingMessage.classList.add('hidden');
              
          }
      });
           // Adicionando evento de clique ao botão Voltar
           back.addEventListener("click", function () {
            // Redirecionar para a página form.html
            window.location.href = "form.html";
        });
  });
});
