console.log("Script carregado!");


const perguntas = [
  { pergunta: "Qual franquia é mais superestimada?", opcoes: ["Call of Duty", "FIFA", "Fortnite"], correta: "Fortnite" },
  { pergunta: "Qual jogo teve o lançamento mais decepcionante?", opcoes: ["Cyberpunk 2077", "No Man's Sky", "Battlefield 2042"], correta: "Cyberpunk 2077" },
  { pergunta: "Qual gênero está saturado no mercado?", opcoes: ["Battle Royale", "FPS", "MMORPG"], correta: "Battle Royale" },
  { pergunta: "Qual empresa mais decepcionou os fãs nos últimos anos?", opcoes: ["EA", "Blizzard", "Ubisoft"], correta: "Blizzard" },
  { pergunta: "Qual jogo não merecia o prêmio de Jogo do Ano?", opcoes: ["The Last of Us Part II", "It Takes Two", "Overwatch"], correta: "The Last of Us Part II" },
  { pergunta: "Qual console tem os exclusivos mais fracos?", opcoes: ["Xbox", "PlayStation", "Nintendo"], correta: "Xbox" },
  { pergunta: "Qual prática é mais prejudicial nos jogos?", opcoes: ["Microtransações", "Loot boxes", "Pay-to-win"], correta: "Pay-to-win" },
  { pergunta: "Qual jogo é injustamente odiado?", opcoes: ["Death Stranding", "Metal Gear Survive", "Diablo Immortal"], correta: "Death Stranding" },
  { pergunta: "Qual franquia deveria acabar?", opcoes: ["Assassin's Creed", "Just Dance", "Pokémon"], correta: "Just Dance" },
  { pergunta: "Qual jogo é mais viciante de forma negativa?", opcoes: ["League of Legends", "Genshin Impact", "Clash of Clans"], correta: "League of Legends" },
  { pergunta: "Qual plataforma tem a comunidade mais tóxica?", opcoes: ["PC", "Console", "Mobile"], correta: "PC" },
  { pergunta: "Qual jogo é mais injusto em matchmaking?", opcoes: ["Valorant", "CS:GO", "Overwatch"], correta: "CS:GO" },
  { pergunta: "Qual jogo tem a pior economia interna?", opcoes: ["GTA Online", "Diablo IV", "FIFA Ultimate Team"], correta: "FIFA Ultimate Team" },
  { pergunta: "Qual jogo é mais inflado por nostalgia?", opcoes: ["Pokémon Red", "Ocarina of Time", "Final Fantasy VII"], correta: "Ocarina of Time" },
  { pergunta: "Qual jogo indie é superestimado?", opcoes: ["Undertale", "Hollow Knight", "Stardew Valley"], correta: "Undertale" }
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
