//usando o express, definir um endpoint POST /eventos
//nele, extrair o corpo da requisição
//e, usando a axios, enviar o corpo para os dois microsserviços, ou seja, nas portas 4000 e 5000
const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

app.post('/eventos', (req, res) => {
  //extrair o corpo da requisição
  const evento = req.body
  console.log(evento)
  //enviar para o mss na porta 4000
  axios.post('http://localhost:4000/eventos', evento)
  //enviar para o mss na porta 5000
  axios.post('http://localhost:5000/eventos', evento)
  //enviar para o mss na porta 6000
  axios.post('http://localhost:6000/eventos', evento) 
  //enviar para o mss na porta 7000
  axios.post('http://localhost:7000/eventos', evento)
  //encerrar com código 200
  res.status(200).end()
})

//colocar o barramento em execução na porta 10000
const port = 10000
app.listen(port, () => {console.log(`Barramento. Porta ${port}.`)})