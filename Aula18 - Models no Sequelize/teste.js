const Sequelize = require('sequelize') //aqui nos declaramos que a variavel sequelize irá receber o 
//modulo sequelize
const sequelize = new Sequelize('sistemadecadastro','root','a.1.', {
    host: "localhost", //esse host é onde vamos dizer em qual máquina está instalado o mysql
    dialect: 'mysql' //aqui é o tipo de banco de dados que irá se conectar

}) //é aqui que vamos nos conectar ao banco de dados
//o primeira parâmetro que ele pede é o nome do banco de dados
//o segundo parâmetro é o usuario da instalacao do mysql
//o terceiro parâmetro é a senha do mysql


const Postagem = sequelize.define('postagens', { //aqui é criado um modelo para postagem
    //aqui dentro vamos criar os campos: titulo, conteudo.
  titulo: {
     type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
}) //sequelize.define() está definindo o nome da tabela

// Postagem.create({ aqui é onde inserios dados a postagem
//     titulo: "Um titulo qualquer",
//     conteudo: "jfsbsbfbsfsbfbsf"
// }) 


const Usuario = sequelize.define('Usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
})

// Usuario.create({ aqui é onde inserios dados a postagem
//     nome: "Lucas",
//     sobrenome: "Henrique",
//     idade: 18,
//     email: "Aprendiz2508mororais@gmail.com"
// })

// Usuario.sync({force: true}) //essa funcao sync irá sincronizar o model com o mysql
// e foi colocar force para ele ter a certeza que irá sincronizar


