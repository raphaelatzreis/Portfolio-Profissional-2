# Portfolio Profissional 

Portfólio profissional desenvolvido como projeto para a disciplina de Desenvolvimento Web, com o objetivo de aplicar conceitos de **HTML**, **CSS** e **JavaScript** em uma página interativa, responsiva e visualmente organizada.

O projeto apresenta uma identidade visual inspirada em tecnologia, utilizando tons de verde e uma estética baseada no estilo Matrix, mas com uma proposta mais profissional e limpa.

## 🟢 Objetivo do Projeto

Este projeto foi desenvolvido para demonstrar o domínio de conceitos fundamentais de desenvolvimento web, incluindo estruturação semântica com HTML, estilização com CSS e interatividade com JavaScript.

A página funciona como um portfólio pessoal e acadêmico, apresentando informações profissionais, projetos desenvolvidos, áreas de interesse, vídeo de apresentação e um formulário de contato com validação de dados.

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* YouTube Embed

## Funcionalidades

O portfólio possui os seguintes recursos:

* Estrutura de página com HTML semântico;
* Estilização personalizada com CSS;
* Layout responsivo para diferentes tamanhos de tela;
* Imagem de perfil com efeito de transição;
* Player de áudio personalizado;
* Vídeo de apresentação incorporado do YouTube;
* Botão para alternar o modo visual da página;
* Filtro interativo de interesses;
* Quiz rápido com atualização dinâmica de conteúdo;
* Formulário de contato profissional;
* Campos dinâmicos no formulário;
* Validação de dados com JavaScript;
* Exibição de mensagens de erro e sucesso sem recarregar a página;
* Manipulação do DOM com eventos JavaScript.

## Requisitos Atendidos

Este projeto atende aos requisitos propostos para a atividade:

### 1. Qualidade Visual com HTML e CSS

A página foi desenvolvida com foco em organização visual, contraste, responsividade e identidade própria. Foram utilizados cards, seções bem definidas, botões estilizados e uma paleta de cores baseada em tons de verde.

### 2. Inserção de Vídeo

O projeto possui um vídeo de apresentação incorporado do YouTube, relacionado ao objetivo da página e aos recursos implementados.

### 3. Formulário / Quiz

A página contém um formulário de contato profissional com campos obrigatórios, validação de dados e mensagens exibidas diretamente na tela. Também há um quiz rápido interativo, que atualiza o conteúdo da página sem recarregamento.

### 4. Eventos JavaScript

Foram utilizados eventos como `click`, `change` e `submit` para controlar interações do usuário com botões, filtros, quiz, formulário e alteração visual da página.

### 5. Atualização de Conteúdo sem Recarregar a Página

O JavaScript atualiza respostas do quiz, mensagens de validação e resumo do formulário diretamente no DOM, sem necessidade de recarregar a página.

### 6. Manipulação do DOM

O projeto utiliza métodos como:

* `getElementById`
* `querySelectorAll`
* `classList.add`
* `classList.remove`
* `classList.toggle`
* `textContent`
* `innerHTML`

Esses métodos permitem alterar classes, textos, campos dinâmicos e mensagens exibidas ao usuário.

## Projetos Apresentados no Portfólio

O portfólio apresenta alguns projetos acadêmicos e práticos desenvolvidos durante a formação:

### Sistema Multiplataforma de Achados e Perdidos

Sistema web em andamento para gestão e devolução de itens perdidos em instituições fechadas, com proposta de controle de entrada e saída, sistema anti-trolls e documentação de transações por QR Code.

### Sistema de Gerenciamento para Clínicas Médicas

Sistema desenvolvido em Python com Programação Orientada a Objetos e princípios SOLID. O projeto utiliza a biblioteca Rich para criar uma interface interativa no terminal, permitindo gerenciar pacientes, médicos, consultas e receituários.

### Sistema de Notificações Multiplataforma

Projeto em Python desenvolvido em sala de aula, explorando conceitos de Programação Orientada a Objetos, interfaces com ABC e princípios como Dependency Inversion Principle e Single Responsibility Principle.

### Batalha no Terminal: RPG em Python

Mini jogo de batalha RPG desenvolvido em Python, com foco na aplicação prática dos pilares da Programação Orientada a Objetos, como herança, polimorfismo e encapsulamento.

### Simulador de Rotas EPT Maricá

Simulador de rotas desenvolvido em Python, utilizando grafos e o Algoritmo de Dijkstra para encontrar caminhos mais curtos. O projeto também utiliza Matplotlib e NetworkX para visualização gráfica dos trajetos.

## Estrutura do Projeto

```text
Portfolio-Profissional-2/
│
├── index.html
├── pag1.css
├── script.js
├── README.md
│
└── midias/
    ├── amazonia-gojira.mp3
    ├── fotoperfil.jpg
    ├── horror.jpg
    ├── matrix.jpg
    └── pretinha.png
```

## Como Executar o Projeto

Para rodar o projeto localmente, é recomendado utilizar um servidor local.

No terminal, dentro da pasta do projeto, execute:

```bash
python -m http.server 8080
```

Depois, acesse no navegador:

```text
http://localhost:8080
```

Caso o comando `python` não funcione, tente:

```bash
py -m http.server 8080
```

## Observação sobre o Vídeo

O vídeo de apresentação foi incorporado por meio do YouTube para evitar problemas com limite de tamanho de arquivos no GitHub. Dessa forma, o projeto fica mais leve e fácil de acessar.

## Status do Projeto

🟢 Projeto finalizado para entrega acadêmica, podendo receber melhorias futuras.

## Autoria

Desenvolvido por **Raphaela Reis**.

Estudante de Engenharia de Software, com interesse em desenvolvimento Full-Stack, gerenciamento de projetos, documentação, organização de sistemas e soluções web.
