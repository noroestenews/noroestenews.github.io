const scriptURL = 'https://api.sheetmonkey.io/form/7wx8BeiFcDt93cTxQSQR8t'; // URL da API
const form = document.getElementById('campaignForm');

form.addEventListener('submit', e => {
  e.preventDefault(); 
  
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form) 
  })
    .then(response => {
      if (response.ok) {
        alert('Dados enviados com sucesso!');
      } else {
        throw new Error('Falha ao enviar os dados.');
      }
    })
    .catch(error => console.error('Erro!', error.message));
});


