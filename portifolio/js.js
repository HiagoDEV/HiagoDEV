document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato-form");
    const mensagemEnviado = document.getElementById("mensagem-enviado");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const mensagemTextarea = document.getElementById("mensagem");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        
        emailjs.init("l5ZvwjVExc9xiUI4t");

        
        const emailParams = {
            from_name: nomeInput.value,
            from_email: emailInput.value,
            message: mensagemTextarea.value,
        };

        
        emailjs.send("gmailMessage", "template_9or3zse", emailParams)
            .then(function () {
                form.reset();
                mensagemEnviado.style.display = "block";
            })
            .catch(function (error) {
                console.error("Erro ao enviar o e-mail:", error);
            });
    });

    function validarFormulario() {
        let isValid = true;

        
        if (nomeInput.value.length < 2) {
            isValid = false;
            alert("Por favor, insira um nome válido.");
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            alert("Por favor, insira um endereço de e-mail válido.");
        }

        
        if (mensagemTextarea.value.length < 10) {
            isValid = false;
            alert("Por favor, insira uma mensagem com pelo menos 10 caracteres.");
        }

        return isValid;
    }
});






const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');


dropdownBtn.addEventListener('click', () => {
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
});

