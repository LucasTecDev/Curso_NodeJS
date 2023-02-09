const express = require('express')
const app = express()
const handlebars = required('express-handlebars')
const Sequelize = require('sequelize')


// Config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))//dizendo que o layout é o arquivo .main
    app.set('view engine', 'handlebars')
  
  // Conexao com o banco de dados MySQL
  const sequelize = new Sequelize('sistemadecadastro','root','a.1.', {
    host: "localhost", 
    dialect: 'mysql' 
  })


app.listen(8088, function(){console.log('Servidor rodando!')})