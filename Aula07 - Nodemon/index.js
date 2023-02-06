const express = require('express')
const app = express()

app.get('/', function (req , res) {
    res.send('Hello!')
})

app.get('/sobre', function (req , res) {
    res.send('Bem-vindo a minha pagina sobre')
})

app.get('/blog', function (req , res) {
    res.send('Bem-vindo ao meu blog')
})


app.get('/ola/:nome/:Cargo/:Cor',function(req ,res){  //parâmetro é /:, é para criar caminhos nas rotas
    res.send('<h1>Olá '+req.params.nome+"</h1>"+'<h2>Seu cargo é: '+req.params.Cargo+"</h2>"+'<h3>Sua cor favorita é: '+req.params.Cor+"</h3>") 
    //req é responsável para receber dados de uma requisicao
}) //ou seja, o send está trazendo o conteudo do req.parametros
  //O send só se usa uma vez dentro de uma rota!

app.listen(8088, function(){console.log('Servidor rodando!')})