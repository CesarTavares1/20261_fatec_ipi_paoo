const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())
const lembretes = {}
let id = 1
app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

app.post('/lembretes', async (req, res) => {
  const texto = req.body.texto
  try {
    await axios.post('http://localhost:10000/eventos', {
      tipo: 'LembreteCriado',
      dados: { id, texto }
    })
    id++
    lembretes[id] = { id, texto }
    return res.json(lembretes[id])
  } catch (erro) {
      console.log("O lembrete não pôde ser criado.")
      return res.status(403).json(erro.response.data)
  }
})

app.post('/eventos', async (req, res) => {
  try{
    const evento = req.body
    console.log(evento)
  }
  catch(e){}
  res.end()
})

const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`)
})