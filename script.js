const perguntas = [
    {
    enunciado: "Você acha mais importante um bom salário ou um bom ambiente de trabalho?",
    alternativas: [
    "Bom salário!",
    "Bom ambiente de trabalho!"
    ]
    },
    {
    enunciado: "Você prefere trabalhar em casa ou no escritório?",
    alternativas: [
    "Trabalhar em casa.",
    "Trabalhar no escritório."
    ]
    },
    {
    enunciado: "Qual o tipo de filme que você mais gosta?",
    alternativas: [
    "Ação.",
    "Comédia",
    "Terror",
    "Aventura",
    "Ficção",
    "Outro"    
    ]
    },
    {
    enunciado: "Você é a favor ou contra a introduçao das novas tecnologias nas escolas?",
    alternativas: [
    "Sou a favor.",
    "Sou contra."
    ]
    
    },
    {
    enunciado: "Quando vai escolher um livro para ler, prefere livros físicos ou e-books?",
    alternativas: [
    "Livros físicos.",
    "E-books."
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();