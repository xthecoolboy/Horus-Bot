const Discord = require('discord.js');
module.exports = {
    name: 'teste',
    description: 'Faça testes no servidor!',
    cooldown: 5,
    execute(client, msg, args) {
        var conteudo = msg.content.split(' ');
        conteudo.splice(0,1);
        conteudo = conteudo.join(' ');
    }

}