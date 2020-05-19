const Discord = require('discord.js');
const client = new Discord.Client();  // Inicialização do client (bot)

module.exports = {
    name: 'clear',
    description: 'Limpe mensagens do servidor!',
    cooldown: 5,
    execute(msg) {
        const valor = msg.content.split(" ");
        const channel = msg.channel;
        //const FetchMsg = channel.messages.fetch();
        channel.bulkDelete(valor[1], true);
        msg.reply(valor[1] + " mensagens limpas " + "<@" + `${msg.member.id}` + ">" + " do meu coração!");
    }
}