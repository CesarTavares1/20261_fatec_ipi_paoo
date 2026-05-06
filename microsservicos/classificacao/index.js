const axios = require('axios')
const express = require('express')
const app = express()
//middleware
app.use(express.json())
const palavraChave = 'importante'
const funcoes = {
  ObservacaoCriada: (observacao) => {
    //se o texto contiver a palavra importante, trocar o status para importante
    //caso contrário, trocar o status para comum
    observacao.status = observacao.texto.includes(palavraChave) ? "importante" : "comum"
    //emitir evento de observação classificada
    axios.post('http://localhost:10000/eventos', {
      tipo: 'ObservacaoClassificada',
      dados: observacao
    })

  }
}
//criar endpoint post /eventos
app.post('/eventos', (req, res) => {
  //usar o mapa de funções para tratar o evento
  const evento = req.body
  console.log(evento)
  funcoes[evento.tipo](evento.dados)
  res.end()
})
//subir o serviço na porta 7000
const port = 7000
app.listen(port, () => console.log(`Classificação. Porta ${port}`))