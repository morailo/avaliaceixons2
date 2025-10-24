const enunciado = document.querySelector("#enunciado")
const alternativa1 = document.querySelector("#alternativa1")
const alternativa2 = document.querySelector("#alternativa2")
const alternativa3 = document.querySelector("#alternativa3")
const alternativa4 = document.querySelector("#alternativa4")
const btnHome = document.querySelector("#voltarhome")

const perguntas = [{pergunta:"numero 0", alternativas:[1,2,3,4], resposta: 2},
                    {pergunta:"numero 1", alternativas:[1,2,3,4], resposta: 2},
                    {pergunta:"numero 2", alternativas:[1,2,3,4], resposta: 2}, ]
  let perguntaAtual = 0
function carregarPergunta(){
  enunciado.textContent = perguntas[perguntasAtual].pergunta}

let pergunta atual = 0

btnHome.addEventListener("click", function(){
     window.location.href = "home.html";
})

function carregarPergunta(){
     enunciado.textContent = perguntas[perguntaAtual]. pergunta
     alternativa1.textContent = perguntas[perguntaAtual]. alternativas[0]
     alternativa2.textContent = perguntas[perguntaAtual]. alternativas[1]
     alternativa3.textContent = perguntas[perguntaAtual]. alternativas[2]
     alternativa4.textContent = perguntas[perguntaAtual]. alternativas[3]

}

    alternativa1. addEventListener ("click", function(){verificarResposta(0)})
    alternativa2. addEventListener ("click", function(){verificarResposta(1)})
    alternativa3. addEventListener ("click", function(){verificarResposta(2)})
    alternativa4. addEventListener ("click", function(){verificarResposta(3)})

   function verificarResposta(alternativaSelecionada) {
       if(alternativaSelecionada == perguntas[perguntaAtual]. resposta){
         alert("resposta correta")
       }else{
         alert("resposta errada")
       }

     if(perguntaAtual < perguntas.lenght - 1){

     }

     perguntaAtual++;
     carregarPergunta()
   }else{
     alert("acabou o quiz")
   }

}
     
carregarPergunta()


