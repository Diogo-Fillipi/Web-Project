function verificarEmail() {
    const emailInput = document.getElementById("email");
    const mensagemErro = document.getElementById("mensagemErro");

    if (emailInput.value.trim() === "") {
        mensagemErro.textContent = "Por favor, insira um email válido.";
    } else {
        const emailFormatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

        if (!emailFormatoValido) {
            mensagemErro.textContent = "Por favor, insira um email válido.";
        } else {
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


