document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereco").value;
    let role = document.getElementById("role").value;
    let voto = document.getElementById("voto").value;

    // Cria o objeto com os dados
    let formData = {
        nome: nome,
        email: email,
        endereco: endereco,
        role: role,
        voto: voto
    };

    // Envia os dados para a API do SheetMonkey
    fetch('https://api.sheetmonkey.io/form/7wx8BeiFcDt93cTxQSQR8t', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Cadastro enviado com sucesso!");
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Falha ao enviar o cadastro.");
    });
});

