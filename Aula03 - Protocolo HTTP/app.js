var http = require('http');

http.createServer(function(req , res){  //essa function é chamada de funcao de callback
    res.end("Welcome") //res.end é para enviar resposta
}).listen(8088);

console.log('O Servidor está rodando!')

//as teclas Ctrl + C fecha o servidor.
//mais tarde vamos aprender um módulo chamado no dimon que serve para detectar alteracoes no código e reexecuta las automaticamente