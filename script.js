const scriptURL = 'https://api.sheetmonkey.io/form/7wx8BeiFcDt93cTxQSQR8t'; // Use a URL gerada pela Google Sheets API
const form = document.getElementById('campaignForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Dados enviados com sucesso!'))
    .catch(error => console.error('Erro!', error.message));
});
