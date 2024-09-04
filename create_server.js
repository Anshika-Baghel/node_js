const express = require('express')
const app = express()

app.get('/', function (req, res) {       //req->request  res->response  get->is used to request data from the server

  res.send('Hello World')
})
app.get('/chicken',(req,res)=>{
    res.send('sure sir I would love to serve chicken')
})

app.listen(3000)