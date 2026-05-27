const axios = require('axios')
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())
const observacoesPorLembrete = {}

const funcoes = {
  ObservacaoClassificada: (observacao) => {
    const observacoes = observacoesPorLembrete[observacao.lembreteId]
    const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)
    obsParaAtualizar.status = observacao.status
    axios.post('http://localhost:10000/eventos', {
      tipo: 'ObservacaoAtualizada',
      dados: {
        id: observacao.id,
        texto: observacao.texto,
        lembreteId: observacao.lembreteId,
        status: observacao.status
      }
    })
  }
}

app.post('/lembretes/:id/observacoes', async (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoesDoLembrete = observacoesPorLembrete[req.params.id] || []
  const status = 'aguardando'
  try {
    await axios.post('http://localhost:10000/eventos', {
      tipo: 'ObservacaoCriada',
      dados: {
        id: idObs, texto, lembreteId: req.params.id, status
      }
    })
    observacoesDoLembrete.push({id: idObs, texto, status})
    observacoesPorLembrete[req.params.id] = observacoesDoLembrete
    res.status(201).json(observacoesDoLembrete)  
    } catch (erro) {
        console.log("A observação não pôde ser criada.")
        return res.status(403).json(erro.response.data)
    }
})

app.get('/lembretes/:id/observacoes', (req, res) => {
  res.json(observacoesPorLembrete[req.params.id] || [])
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
    microsserviço: "observacoes",
    status: "funcionando"
    }
    res.status(200).json(json)
})

const port = 5000
app.listen(port, () => {
  console.log(`Observações. Porta ${port}.`)
})
