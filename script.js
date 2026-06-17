/*
    Sumário do funcionamento:
    
    1. Eventos JavaScript;
    2. Formulário dinâmico;
    3. Validação de dados;
    4. Atualização de conteúdo sem recarregar a página;
    5. Manipulação do DOM.
*/

document.addEventListener("DOMContentLoaded", function () {

    /* 1. Alternar de modo visual (modo escuro) */

    const btnTema = document.getElementById("btnTema");

    btnTema.addEventListener("click", function () {
        document.body.classList.toggle("modo-claro");

        if (document.body.classList.contains("modo-claro")) {
            btnTema.textContent = "Voltar ao modo Matrix";
        } else {
            btnTema.textContent = "Alternar modo visual";
        }
    });


    /* 2. Filtro de interesses*/

    const botoesFiltro = document.querySelectorAll(".btn-filtro");
    const skills = document.querySelectorAll(".skill");

    botoesFiltro.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const filtroSelecionado = botao.getAttribute("data-filtro");

            botoesFiltro.forEach(function (item) {
                item.classList.remove("ativo");
            });

            botao.classList.add("ativo");

            skills.forEach(function (skill) {
                const categoriaSkill = skill.getAttribute("data-categoria");

                if (filtroSelecionado === "todos" || filtroSelecionado === categoriaSkill) {
                    skill.classList.remove("oculto");
                } else {
                    skill.classList.add("oculto");
                }
            });
        });
    });


    /*  3. Quiz interativo */

    const botoesQuiz = document.querySelectorAll(".btn-quiz");
    const resultadoQuiz = document.getElementById("resultadoQuiz");

    botoesQuiz.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const resposta = botao.getAttribute("data-resposta");
            resultadoQuiz.textContent = resposta;
        });
    });


    /*4. Formulário dinâmico */

    const tipoContato = document.getElementById("tipoContato");
    const campoDinamico = document.getElementById("campoDinamico");

    tipoContato.addEventListener("change", function () {
        campoDinamico.innerHTML = "";

        if (tipoContato.value === "projeto") {
            campoDinamico.innerHTML = `
                <label for="prazo">Prazo desejado</label>
                <input type="text" id="prazo" placeholder="Ex: 2 semanas, 1 mês, urgente">
            `;
        }

        else if (tipoContato.value === "academico") {
            campoDinamico.innerHTML = `
                <label for="disciplina">Disciplina relacionada</label>
                <input type="text" id="disciplina" placeholder="Ex: Programação Web, POO, Engenharia de Software">
            `;
        }

        else if (tipoContato.value === "parceria") {
            campoDinamico.innerHTML = `
                <label for="tipoParceria">Tipo de parceria</label>
                <input type="text" id="tipoParceria" placeholder="Ex: projeto, divulgação, estudo ou parceria acadêmica">
            `;
        }
    });


    /* 5. Validação do formulário*/

    const formContato = document.getElementById("formContato");

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const mensagem = document.getElementById("mensagem");

    const erroNome = document.getElementById("erroNome");
    const erroEmail = document.getElementById("erroEmail");
    const erroTelefone = document.getElementById("erroTelefone");
    const erroTipoContato = document.getElementById("erroTipoContato");
    const erroMensagem = document.getElementById("erroMensagem");

    const resumoSolicitacao = document.getElementById("resumoSolicitacao");

    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault();

        limparErros();

        let formularioValido = true;

        if (nome.value.trim().length < 3) {
            erroNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
            formularioValido = false;
        }

        if (!validarEmail(email.value)) {
            erroEmail.textContent = "Digite um e-mail válido.";
            formularioValido = false;
        }

        if (!validarTelefone(telefone.value)) {
            erroTelefone.textContent = "Digite um telefone válido com DDD.";
            formularioValido = false;
        }

        if (tipoContato.value === "") {
            erroTipoContato.textContent = "Selecione um tipo de solicitação.";
            formularioValido = false;
        }

        if (mensagem.value.trim().length < 10) {
            erroMensagem.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
            formularioValido = false;
        }

        if (formularioValido) {
            const textoTipoContato = tipoContato.options[tipoContato.selectedIndex].text;

            const campoExtra = campoDinamico.querySelector("input");
            let valorCampoExtra = "Não informada";

            if (campoExtra && campoExtra.value.trim() !== "") {
                valorCampoExtra = campoExtra.value.trim();
            }

            resumoSolicitacao.innerHTML = `
                <strong>Solicitação enviada com sucesso!</strong>
                <br><br>
                <strong>Nome:</strong> ${protegerTexto(nome.value)}
                <br>
                <strong>E-mail:</strong> ${protegerTexto(email.value)}
                <br>
                <strong>Telefone:</strong> ${protegerTexto(telefone.value)}
                <br>
                <strong>Tipo de solicitação:</strong> ${protegerTexto(textoTipoContato)}
                <br>
                <strong>Informação extra:</strong> ${protegerTexto(valorCampoExtra)}
                <br>
                <strong>Mensagem:</strong> ${protegerTexto(mensagem.value)}
            `;

            resumoSolicitacao.classList.add("sucesso");

            formContato.reset();
            campoDinamico.innerHTML = "";
        }
    });


    /*6. Funções auxiliares*/

    function validarEmail(emailDigitado) {
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return padraoEmail.test(emailDigitado.trim());
    }

    function validarTelefone(telefoneDigitado) {
        const apenasNumeros = telefoneDigitado.replace(/\D/g, "");
        return apenasNumeros.length >= 10;
    }

    function limparErros() {
        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroTelefone.textContent = "";
        erroTipoContato.textContent = "";
        erroMensagem.textContent = "";

        resumoSolicitacao.classList.remove("sucesso");
    }

    function protegerTexto(texto) {
        return String(texto)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }
});
