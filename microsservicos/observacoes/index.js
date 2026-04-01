const express = require('express')
const app = express()

//post
// /lembretes/1233/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {

})

//fazer o endpoint get
app.get('/lembretes/:id/observacoes', (req, res) => {

})

//subir esse mss na porta 5000
const port = 5000
app.listen(port, () => {
  console.log(`Observações. Porta ${port}.`)
})
