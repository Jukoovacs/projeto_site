function verificaSenha() {
    let senha = document.getElementById("senha").value;
    if (senha.length > 6 || isNaN(senha) || senha == null) {
        alert("Senha inválida!");
    } else {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html";
    }
}