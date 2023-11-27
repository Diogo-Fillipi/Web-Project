function verificarEmail() {
    const emailInput = document.getElementById("email");
    const mensagemErro = document.getElementById("mensagemErro");

    // Verifique se o campo de email foi preenchido
    if (emailInput.value.trim() === "") {
        mensagemErro.textContent = "Por favor, insira um email válido.";
    } else {
        // Realize uma verificação de formato de email usando uma expressão regular
        const emailFormatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

        if (!emailFormatoValido) {
            mensagemErro.textContent = "Por favor, insira um email válido.";
        } else {
            mensagemErro.textContent = ""; // Limpe a mensagem de erro se o formato for válido
        }
    }
};
    document.addEventListener("DOMContentLoaded", function () {
        const senhaInput = document.getElementById("senha");
        const confirmacaoSenhaInput = document.getElementById("confirmacaoSenha");
        const mensagemErro = document.getElementById("mensagemErro");

        function verificarSenhas() {
            if (senhaInput.value !== confirmacaoSenhaInput.value) {
                mensagemErro.textContent = "As senhas não coincidem.";
                confirmacaoSenhaInput.setCustomValidity("As senhas não coincidem.");
            } else {
                mensagemErro.textContent = "";
                confirmacaoSenhaInput.setCustomValidity("");
            }
        }

        senhaInput.addEventListener("input", verificarSenhas);
        confirmacaoSenhaInput.addEventListener("input", verificarSenhas);
    });


