const express = require('express')
const app = express()
app.use(express.json()) //função middleware
const lembretes = {}
let id = 0
app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

/*
{
  1: {
    id: 1,
    texto: 'fazer café'
  },
  2: {
    id: 2,
    texto: 'natação'
  }
}
*/
app.post('/lembretes', (req, res) => {
  id++
  const texto = req.body.texto
  lembretes[id] = {id, texto}
  res.json(lembretes[id])
})

const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`)
})