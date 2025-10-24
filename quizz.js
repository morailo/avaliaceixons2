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
