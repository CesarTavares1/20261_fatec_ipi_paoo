const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const eventos = []

app.post('/eventos', async (req, res) => {
  const evento = req.body
  eventos.push(evento)
  console.log(evento)
  try{
    await axios.post('http://localhost:18000/eventos', evento)
  }
  catch(erro){
    return res.status(403).json({
      erro: erro.response.data.erro
    })
  }
  try{
    await axios.post('http://localhost:4000/eventos', evento)
  }catch(e){}
  try{
    await axios.post('http://localhost:5000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post('http://localhost:6000/eventos', evento) 
  }
  catch(e){}
  try{
    await axios.post('http://localhost:7000/eventos', evento)
  }
  catch(e){}
  res.status(200).end()
})

app.get('/eventos', (req, res) => {
  res.json(eventos)
})

app.get('/saude', async (req, res) => {
    let json = {}
    const barramentoJson= {
      microsserviço: "barramento",
      status: "funcionando"
    }
    json["barramento"]= barramentoJson

    try{
      json["moderacao"] = (await axios.get('http://localhost:18000/saude')).data
    }
    catch(e){
      resposta= {
        microsserviço: "moderacao",
        status: "inativo"
      }
      json["moderacao"]= resposta
    }
    try{
      json["lembrete"]= (await axios.get('http://localhost:4000/saude')).data
    }catch(e){
      resposta= {
        microsserviço: "lembrete",
        status: "inativo"
      }
      json["lembrete"]= resposta
    }
    try{
      json["observacoes"]= (await axios.get('http://localhost:5000/saude')).data
    }
    catch(e){
      resposta= {
        microsserviço: "observacoes",
        status: "inativo"
      }
      json["observacoes"]= resposta
    }
    try{
      json["consulta"] = (await axios.get('http://localhost:6000/saude')).data
    }
    catch(e){
      resposta= {
        microsserviço: "consulta",
        status: "inativo"
      }
      json["consulta"]= resposta
    }
    try{
      json["classificacao"] = (await axios.get('http://localhost:7000/saude')).data
    }
    catch(e){
      resposta= {
        microsserviço: "classificacao",
        status: "inativo"
      }
      json["classificacao"]= resposta
    }

    res.status(200).json(json).end()
})

const port = 10000
app.listen(port, () => {console.log(`Barramento. Porta ${port}.`)})