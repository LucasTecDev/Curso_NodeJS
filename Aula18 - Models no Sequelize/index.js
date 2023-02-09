const express = require('express')
const app = express()

app.get('/', function (req , res) {
    res.sendFile(__dirname+ "/html/index.html") 
})

app.get('/sobre', function (req , res) {
    res.sendFile(__dirname+ "/html/sobre.html")
})

app.get('/blog', function (req , res) {
    res.send('Bem-vindo ao meu blog')
})

app.get('/ola/:nome/:Cargo/:Cor',function(req ,res){  
    res.send('<h1>Olá '+req.params.nome+"</h1>"+'<h2>Seu cargo é: '+req.params.Cargo+"</h2>"+'<h3>Sua cor favorita é: '+req.params.Cor+"</h3>") 
}) 

app.listen(8088, function(){console.log('Servidor rodando!')})