const Discord = require('discord.js');
const MusicClient = require('../struct/Client');
const client = new MusicClient({ token: process.env.DISCORD_TOKEN, prefix: process.env.DISCORD_PREFIX, debug: process.env.DEBUG });

module.exports = {
    name: 'prefix',
    description: 'Comando para alterar de prefixo.',
    cooldown: 5,
    execute(msg) {
        //;prefixo !
        const newPrefixo = msg.content.split(" ")[1];
        if(!newPrefixo){
            return msg.reply(`prefixo atual ~>    + \`${client.config.prefix}\``);

        }
        //const newClient = new MusicClient({ token: process.env.DISCORD_TOKEN, prefix: newPrefixo, debug: process.env.DEBUG });
        msg.reply(`prefixo alterado para ~>    + \`${VARIAVEL_AQUI}\``);


    }
}