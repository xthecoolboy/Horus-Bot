const Discord = require('discord.js');
const client = new Discord.Client();  // Inicialização do client (bot)

module.exports = {
    name: 'botinfo',
    description: 'Veja informações minhas!',
    cooldown: 5,
    execute(msg) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#d95e40')
            .setTitle('Informações minhas!')
            .setURL('https://github.com/luizeduardomr/Horus-bot')
            .setThumbnail('https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png')
            .addFields(
                { name: 'Meu nome Tag :bookmark:', value: `${client.user.tag} `, inline: true },
                { name: 'Fui criado em :date: ', value: `${client.user.createdAt.toUTCString().substr(0, 16)} `, inline: true },
                //{ name: 'Entrei nesse servidor em :date:', value: `${client.joinedAt.toUTCString().substr(0, 16)} `, inline: true },
                { name: ' ', value: 'Ok, chega de informações sobre mim, me fale sobre você! :man_detective:', inline: false },
            )
            .setFooter('Feito com amor e carinho por luiz#3996 <3', 'https://github.com/luizeduardomr');

        msg.reply(exampleEmbed);
    }
}