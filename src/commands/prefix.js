const Discord = require('discord.js');
module.exports = {
    name: 'prefix',
    description: 'Comando para alterar de prefixo.',
    cooldown: 5,
	execute(client, msg) {
        //;prefixo !
        const newPrefixo = msg.content.split(" ")[1];
        if(!newPrefixo){
            return msg.reply(`prefixo atual ~>    + \`${client.config.prefix}\`\n Digite \`${client.config.prefix}prefix [prefixo]\` para alterar de prefixo.` + ' \n**Esta função está em desenvolvimento ainda!**');

        }
        //const newClient = new MusicClient({ token: process.env.DISCORD_TOKEN, prefix: newPrefixo, debug: process.env.DEBUG });
        msg.reply(`prefixo alterado para ~>    + \`${VARIAVEL_AQUI}\``);


    }
}