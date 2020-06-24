const User = require('../models/User');

//index, show, store, update, destroy
// show () // lista uma unica sessão
// update altera/
// store cria
// destroy apaga
// index () // lista
// let é uma variavel que pode ser alterada
module.exports = {
    // a funçao é async quando ela for assincrona
   async store(req, res){
        // body busca corpo da requisição
        const { email }  = req.body;

        
        let user = await User.findOne({ email })

        // findOne para buscar se já existe algum Usuário com esse e-mail
        
        if (!user){
            user = await User.create({ email })
        }
// await aguarda alguma instrução ser chamada
    //    const user = await User.create({ email })
       return res.json(user);
    //    {  email } busca o valor dentro da variável
    }
};