const scriptURL = '286046217337-64aq73rcil85aq3shapku4rd8tptg53n.apps.googleusercontent.com'; // Use a URL gerada pela Google Sheets API
const form = document.getElementById('campaignForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Dados enviados com sucesso!'))
    .catch(error => console.error('Erro!', error.message));
});
