const db = require('../db');

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM users', (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (nome) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM users WHERE nome = ?', [nome], (error, results)=>{
                if(error){rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }
                    else{
                        aceito(false);
                }
            });
        });
    },

    inserir: (nome, email, senha) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO users (nome, email, senha) VALUES (?, ?, SHA2(?, 256))', [nome, email, senha], (error, results)=>{
                if(error){rejeitado(error); return;}
                    aceito(results.insertnome);
            });
        });
    },

    alterar: (nome, senha) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE users SET senha = ? WHERE nome = ?', [senha, nome], (error, results)=>{
                if(error){rejeitado(error); return;}
                    aceito(results);
            });
        });
    },
    
    delete: (nome) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM users WHERE nome = ?', [nome], (error, results)=>{
                if(error){rejeitado(error); return;}
                    aceito(results);
            });
        });
    },
}