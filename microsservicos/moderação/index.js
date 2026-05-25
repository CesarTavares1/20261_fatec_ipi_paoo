const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const palavrasProibidas = ['avenida', 'gato', 'pastel', 'uva', 'fruta']
let contador= {}
let totalObservacoes=0
let totalLembretes=0
let totalPalavrasObservacoes=0
let totalPalavrasLembretes=0

const funcoes = {
  ObservacaoCriada: (observacao) => {
    const palavrasEncontradas = palavrasProibidas.filter(palavra => observacao.texto.includes(palavra))
    if (palavrasEncontradas.length > 0) {
      palavrasEncontradas.forEach(palavra => {
        if (!contador[palavra]) {
          contador[palavra] = 0
        }
        contador[palavra]++
      })
      totalObservacoes++
      totalPalavrasObservacoes += palavrasEncontradas.length
      console.log('A observação será bloqueada')
      console.log('Palavras detectadas:', palavrasEncontradas)
    } else {
      totalObservacoes++
      console.log('A observação foi aceita')
    }
    if (palavrasEncontradas.length > 0){
      return 0
    } else{
      return 1
    }
  },
  LembreteCriado: (lembrete) => {
    const palavrasEncontradas = palavrasProibidas.filter(palavra => lembrete.texto.includes(palavra))
    if (palavrasEncontradas.length > 0) {
      palavrasEncontradas.forEach(palavra => {
        if (!contador[palavra]) {
          contador[palavra] = 0
        }
        contador[palavra]++
      })
      totalLembretes++
      totalPalavrasLembretes += palavrasEncontradas.length
      console.log('O lembrete será bloqueado')
      console.log('Palavras detectadas:', palavrasEncontradas)
    } else {
      totalLembretes++
      console.log('O lembrete foi aceito')
    }
    if (palavrasEncontradas.length > 0){
      return 0
    } else{
      return 1
    }
  }
}

app.get('/palavras/:texto', async (req, res) => {
  const palavra = req.params.texto
  let mediaLembretes = 0
  let mediaObservacoes = 0
  if (totalLembretes > 0) {
    mediaLembretes =
      totalPalavrasLembretes / totalLembretes
  }
  if (totalObservacoes > 0) {
    mediaObservacoes =
      totalPalavrasObservacoes / totalObservacoes
  }
  const json = {
    aparicoes_da_palavra: contador[palavra] || 0,
    mediaObservacoes,
    mediaLembretes
  }
  return res.status(200).json(json)
})

app.post('/eventos', async (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    const retorno= funcoes[evento.tipo](evento.dados)
    if(retorno==0){
      res.status(403).json({
        erro: "ERRO 403: conteúdo bloqueado pela moderação."
      })
    }
  }
  catch(e){}
  res.end()
})

const port = 18000
app.listen(port, () => {
  console.log(`Moderação. Porta ${port}.`)
})
