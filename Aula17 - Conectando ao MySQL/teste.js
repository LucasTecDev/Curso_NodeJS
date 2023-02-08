const Sequelize = require('sequelize') //aqui nos declaramos que a variavel sequelize irá receber o 
//modulo sequelize
const sequelize = new Sequelize('sistemadecadastro','root','a.1.', {
    host: "localhost", //esse host é onde vamos dizer em qual máquina está instalado o mysql
    dialect: 'mysql' //aqui é o tipo de banco de dados que irá se conectar

}) //é aqui que vamos nos conectar ao banco de dados
//o primeira parâmetro que ele pede é o nome do banco de dados
//o segundo parâmetro é o usuario da instalacao do mysql
//o terceiro parâmetro é a senha do mysql


//essa funcao verifica se conseguimos nos conectar ao banco de dados.
sequelize.authenticate().then(function(){//a funcao then é executado quando algum evento acontece
    console.log("Conectado com sucesso!")
}).catch(function(erro){ //a funcao catch 
    console.log('Falha ao se conectar: '+erro)
}) 

