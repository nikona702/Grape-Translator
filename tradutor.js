const apiKey = '9ddb4d85-7f16-41d8-a13b-869fbd651905:fx'; // Substitua com sua chave de API
const url = 'https://api-free.deepl.com/v2/translate';

const translateText = async (text, targetLang) => {
    const params = new URLSearchParams({
      auth_key: apiKey,
      text: text,
      target_lang: targetLang
    });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result.translations[0].text);  // Exibe o texto traduzido
        return result.translations[0].text;
      } else {
        console.error('Erro na tradução:', response.statusText);
      }   
    } catch (error) {
      console.error('Erro:', error);
    }
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    const butao = document.querySelector('.butao');
    butao.addEventListener('click', async function() { // Tornar a função assíncrona
      const text = document.getElementById('text_0');
      const trad = document.getElementById('text_1');
      let traduzido = await translateText(text.value, 'PT'); // Espera a tradução ser concluída
      trad.value = traduzido; // Atribui o texto traduzido
    });
  });
  