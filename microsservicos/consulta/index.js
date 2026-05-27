const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const baseConsolidada = {}
const funcoes = {
  LembreteCriado: (lembrete) => {
    baseConsolidada[lembrete.id] = lembrete
  },
  ObservacaoCriada: (observacao) => {
    const observacoes = baseConsolidada[observacao.lembreteId]['observacoes'] || []
    observacoes.push(observacao)
    baseConsolidada[observacao.lembreteId]['observacoes'] = observacoes
  },
  ObservacaoAtualizada: (observacao) => {
    const observacoes = baseConsolidada[observacao.lembreteId]["observacoes"]
    const indice = observacoes.findIndex((o) => o.id === observacao.id)
    observacoes[indice] = observacao
  }
}


app.get('/lembretes', (req, res) => {
  res.json(baseConsolidada)
})


app.post('/eventos', async (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
    funcoes[evento.tipo](evento.dados)
  }
  catch(e){}
  res.end()
})

app.get('/saude', (req, res) => {
    const json = {
    microsserviço: "consulta",
    status: "funcionando"
    }
    res.status(200).json(json)
})

const port = 6000
app.listen(port, async () => {
  console.log(`Consulta. Porta ${port}.`)
  const resp = await axios.get('http://localhost:10000/eventos')
  resp.data.forEach((evento, indice, colecao) => {
    try{
      funcoes[evento.tipo](evento.dados)
    } 
    catch(e){} 
  })
})