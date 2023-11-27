const cadastroService = require('../services/cadastroService');

module.exports = {
    buscarTodos: async(req, res)=>{
        let json = {error: '', result:[]};

        let users = await cadastroService.buscarTodos();

        for(let i in users){
            json.result.push({
                nomes: users[i].nome,
                emails: users[i].email
            });
        }
        res.json(json);
    },


    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.params.nome;
        let user = await cadastroService.buscarUm(nome);

        if(user){
            json.result = user;
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        
        if(nome && email && senha){
            let userName = await cadastroService.inserir(nome, email, senha);
            json.result = {nome,
            email,
            senha};
        }
        else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.params.nome;
        let senha = req.body.senha;
        
        if(nome && senha){
            await cadastroService.alterar(nome, senha);
            json.result = {nome, senha};
        }
        else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },

    delete: async(req, res) => {
        let json = {error:'', result:{}};

        await cadastroService.delete(req.params.nome);
            
        res.json(json);
    }
}