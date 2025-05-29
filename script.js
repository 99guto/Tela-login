document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita envio real do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const lembrar = document.getElementById('lembrar').checked;

    // Simulação de validação (pode ser substituído por integração com backend)
    if (email === "usuario@teste.com" && senha === "123456") {
      alert(`Login bem-sucedido!${lembrar ? ' Você será lembrado por 30 dias.' : ''}`);
    } else {
      alert("Email ou senha inválidos.");
    }
  });
});
