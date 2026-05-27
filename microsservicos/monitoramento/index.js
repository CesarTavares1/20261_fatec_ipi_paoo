const axios = require('axios')
const express = require('express')
const app= express()
app.use(express.json())

app.get('/saude', async (req, res) => {
    
    let json={}
    try{
    json= (await axios.get("http://localhost:10000/saude")).data
    } catch (e){
      resposta= {
        microsserviço: "barramento",
        status: "inativo"
      }
      json["barramento"]= resposta
    }
    const monitoramentoJson= {
      microsserviço: 'monitoramento',
      status: 'funcionando'
    }
    json["monitoramento"]=monitoramentoJson
    res.status(200).json(json).end()

})

const port= 22000
app.listen(port, () => {
  console.log(`Monitoramento. Porta ${port}.`)
})