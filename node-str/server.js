'use strict'

//Require é usado para importar
/*Aspas simpes sem caminho busca no node_modules, 
para buscar na aplicação tem colocar o caminho com ./ */
//Criando servidor
const http = require('http');//Criar servidor Web
const debug = require('debug')('nodestr:server');
const express = require('express');//Usar o mvc models e etc

//Criando a Aplicação
const app = express();
const port = normalizePort(process.env.PORT || '3000');//Constante para a porta
app.set('port',port);//Setando a porta

const server = http.createServer(app);//Criando o servidor
const router = express.Router();//Arquivos de rota URL

//Configurando a rota
const route = router.get('/',(req, res, next)=>{// '/' URL
    res.status(200).send({//Status 200 é o que diz que está tudo certo
        title: "Node Store Api",    
        version: "0.0.1"
    });
});

app.use('/', route);

server.listen(port);//Dizendo para o servidor "ouvir" nessa porta
console.log('Api rodando na porta '+ port);


//Normalisa a porta para pegar uma porta a do servidor
function normalizePort(val){
    const port = parseInt(val,10);//Converte para um inteiro

    if(isNaN(port)){//Se o valor náo for um número coloca 10
         return val;
    }
    if(port >= 0){
        return port;
    }
     return false;
}