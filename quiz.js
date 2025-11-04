console.log("Script carregado!");


const perguntas = [
  { pergunta: "Quem é o irmão do Mario?", opcoes: ["Luid", "Princesa Peach", "Rei dos Koopas"], correta: "Luid" },
  { pergunta: "Qual é o poder do Sub-zero?", opcoes: ["Fogo", "Ácido", "Gelo"], correta: "Gelo" },
  { pergunta: "Qual o objetivo do pac-man em seu jogo?", opcoes: ["Comer todas as bolinhas", "Sair do labirinto", "Derrotar os chefes"], correta: "Comer todas as bolinhas" },
  { pergunta: "Qual é o nome do filho de Kratos?", opcoes: ["Loki", "Atreus", "Thor"], correta: "Atreus" },
  { pergunta: "Qual jogo é conhecido por ser feito por blocos?", opcoes: ["Minecraft", "Roblox", "Cs go"], correta: "Minecraft" },
  { pergunta: "Qual o nome das esmeraldas de sonic?", opcoes: ["Esmeraldas Misticas", "Esmeraldas do Caos", "Esmeraldas Sagradas"], correta: "Esmeraldas do Caos" },
  { pergunta: "Qual é a empresa dona do Minecraft?", opcoes: ["Xbox", "King", "Mojang"], correta: "Mojang" },
  { pergunta: "Qual jogo que é conhecido por usar 'cartas'?", opcoes: ["Free Fire", "Clash royale", "Hearthstone"], correta: "Clash royale" },
  { pergunta: "Qual desses jogos não é Brasileiro?", opcoes: ["Enigma of Fear", "Deathbound", "Into the pit"], correta: "Into the pit" },
  { pergunta: "Qual jogo é conhecido por sua dificuldade extrema e a frase 'You Died'??", opcoes: ["Dark Souls", "Assassin's Creed", "Bloodborne"], correta: "Dark Souls" },
  { pergunta: "Qual jogo que é conhecido por 'rodar em tudo'?", opcoes: ["GTA", "Free fire", "Doom"], correta: "Doom" },
  { pergunta: "Qual jogo é conhecido por matar deuses?", opcoes: ["God of War", "Resident Evil", "Tomb Raider"], correta: "God of War" },
  { pergunta: "Qual jogo se passa em uma cidade chamada Night City", opcoes: ["GTA Online", "Diablo IV", "Cyberpunk 2077"], correta: "Cyberpunk 2077" },
  { pergunta: "Qual o nome do primeiro chefe em Shadow Fight 2?", opcoes: ["Eremita", "Vespa", "Lince"], correta: "Lince" },
  { pergunta: "Qual jogo apresenta uma flor falante chamada Flowey com intenções sombrias?", opcoes: ["Undertale", "Plants vs Zombies", "Stardew Valley"], correta: "Undertale" }
];

let acertos = 0;
let indiceAtual = 0;

function mostrarPergunta() {
  const quiz = document.getElementById('quiz');
  const certa = document.getElementById('certa');
  quiz.innerHTML = '';
  certa.textContent = '';

  const atual = perguntas[indiceAtual];
  const titulo = document.createElement('h2');
  titulo.textContent = atual.pergunta;
  quiz.appendChild(titulo);

  atual.opcoes.forEach(opcao => {
    const botao = document.createElement('button');
    botao.textContent = opcao;
    botao.onclick = () => verificarResposta(opcao, botao);
    quiz.appendChild(botao);
  });
}

function verificarResposta(resposta, botao) {
  const correta = perguntas[indiceAtual].correta;
  const certa = document.getElementById('certa');

  if (resposta === correta) {
    botao.style.backgroundColor = 'lightgreen';
    acertos++;
    document.getElementById('contador').textContent = 'Acertos: ' + acertos;
  } else {
    botao.style.backgroundColor = 'red';
    certa.textContent = `A resposta correta é: ${correta}`;
  }

  const botoes = document.querySelectorAll('#quiz button');
  botoes.forEach(btn => btn.disabled = true);

  setTimeout(() => {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }, 3000);
}

function mostrarResultado() {
  const quiz = document.getElementById('quiz');
  quiz.innerHTML = `<h2>Você acertou ${acertos} de ${perguntas.length} perguntas!</h2>`;

  let ranking = '';
  if (acertos === 15) ranking = '🥇 Ouro';
  else if (acertos >= 10) ranking = '🥈 Prata';
  else if (acertos >= 5) ranking = '🥉 Bronze';
  else ranking = '💤 Precisa estudar mais';

  quiz.innerHTML += `<p>Seu ranking: ${ranking}</p>`;
}

document.addEventListener('DOMContentLoaded', mostrarPergunta);
