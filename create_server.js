const express = require('express')
const app = express()

app.get('/', function (req, res) {       //req->request  res->response  get->is used to request data from the server

  res.send('Hello World')
})
app.get('/chicken',(req,res)=>{
    res.send('sure sir I would love to serve chicken')
})

app.get('/idli',(req,res)=>{

    var customized_idli={
        name:'rava idli',
        size:'10 cm in diameter',
        is_sambhar:true,
        is_chutney:false

    }
    res.send(customized_idli)
})

app.listen(3000,()=>{
        console.log('server listening on port 3000')
})