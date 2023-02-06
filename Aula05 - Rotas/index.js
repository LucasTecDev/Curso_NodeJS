var express = require("express"); //nem preciso por o caminho do express, pois o flutter detectar de onde ele é.
const res = require("express/lib/response");
const app = express(); //a variavel app está recebendo a funcao express, entao qualquer coisa que quero usar no express, uso apartir da variavel app.
//para que nao ocorra qualquer tipo de erro, poís a var app se torna principal do nosso sistema por receber o express, entao colocamos ela como constante para que 
//nao seja sobrescrevido

//rota principal
app.get("/", function(req, res){
 res.send("Seja bem-vindo ao meu app!") //O send é usado para enviar alguma mensagem
});

//rota sobre
app.get("/sobre", function(req , res){
    res.send("Minha pagina sobre")
})

//rota blog
app.get("/blog", function(req , res){
    res.send("bem-vindo ao meu blog!")
})

//olha que simples é criar um servidor com o express, e sempre essa funcao tem que ser a ultima no codigo
//funcao de callback só é executada sempre que algum evento acontece
app.listen(8088, function(){
    console.log("Servisdor Rodando na url http://localhost:8088")
})

                
