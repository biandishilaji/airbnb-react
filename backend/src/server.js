const express = require('express')
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
// const express é uma variável que nunca vai mudar
const app = express();
// origin pra definir apenas uma aplicação para conectar
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json()); // para usar json
// express.static retorna arquivos estaticos
// __dirname traz o caminho do server.js
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

// req = requisição, parametro que usario envia
// res = devolve resposta pra requisição

// ENVIANDO 

// req.query = acessar query params
// req params = acessar route params para put e delete 
// req.body = acessar corpo da requisição (para criação e edição)

// app.post('/users', (req, res) => {
//         return res.json({  message: "Hello Omnistack"
//         });
// })
// RECEBENDO
// app.get('/users', (req, res )=> {
//     return res.json({idade : req.query.idade
//     });
// })
// semana09 = nome da base de dados
mongoose.connect('mongodb+srv://gabriel:9142@omnistack-qvxiq.mongodb.net/semana09?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.listen(1234);
// cria a porta localhost 3333
