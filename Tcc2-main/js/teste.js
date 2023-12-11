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
    }),
  });

  const data = await response.json();
  return data;
}

const tecnicoES = 'Tcc para ensino superior';
const materias = 'logica de programacao';
const assunto = 'inteligencia artificial ';
const pesquisaRecente = 'inteligencia artificial no mundo da agricultura';
const teoPra = 'teorico';
const trabalhoSociedade = 'nao';

const prompt = `"para contextualizar este é um prompt que vem de um formulário para um projeto de gerar temas de tcc, então responda de forma bem detalhada e objetiva, sem conversar com o usuario, sem usar palavras como 'claro, deixe me te ajudar. me reponda apenas com a resposta final, sem citar o que foi relevante. a resposta final precisa conter os dados relevantes. respeite a risca o limite de 3391 caracteres. inicie o texto com um titulo entre parenteses'

Me de um tema para um tcc de "${tecnicoES}" levando em consideração as seguintes matérias que foram relevantes para mim no curso: "${materias}", também levando em consideração os assuntos que mais teve destaque dentro do curso "${assunto}". (caso tenha um não sem contexto, apenas ignore.) Leve em consideração a pesquisa recente de meu usuario "${pesquisaRecente}", leve em consideração o tema sendo mais "${teoPra}" e por ultimo pense que como o tema poderia contribuir para ajudar na sociedade, caso o campo trabalhoSociedade esteja respondido, leve em consideração também "${trabalhoSociedade}", também dê um texto falando sobre como esse assunto que foi gerado é diferencial dos demais, se for algum site, o porque desse site ser diferencial dos outros"`;

const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
  console.log(prompt);

  if (!prompt) {
    window.alert("Please enter a prompt");
    return;
  }

  try {
    const response = await getCompletion(prompt);
    console.log("API Response:", response);

    if (response && response.choices) {
      const firstChoice = response.choices[0];
      if (firstChoice && 'text' in firstChoice) {
        const contentElement = document.createElement('div');
        contentElement.textContent = firstChoice.content; // Use 'content' se for essa a propriedade correta
        output.appendChild(contentElement);
      } else {
        console.error("Unexpected response format. Missing 'text' property:", response);
      }
    } else {
      console.error("Unexpected response format. Missing 'choices' property:", response);
    }
  } catch (error) {
    console.error("Error fetching completion:", error);
  }
});

