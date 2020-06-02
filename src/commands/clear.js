const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    description: 'Limpe mensagens do servidor!',
    cooldown: 5,
    execute(client, msg) {
        const valor = msg.content.split(" ");
        const channel = msg.channel;
        //const FetchMsg = channel.messages.fetch();
        channel.bulkDelete(valor[1], true);
        msg.reply(valor[1] + ' mensagens limpas ' + '<@' + client.users.cache.get(msg.author.id) + '> do meu coração!');
        //msg.reply(`\`${valor[1]} mensagens limpas ${client.users.cache.get(msg.author.id)} do meu coração \``);
        
    }

}