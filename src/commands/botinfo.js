const Discord = require('discord.js');
module.exports = {
    name: 'botinfo',
    description: 'Veja informações minhas!',
    cooldown: 5,
    execute(client, msg) {
        const Whoami = new Discord.MessageEmbed()
            .setColor('#d95e40')
            .setURL('https://github.com/luizeduardomr/Horus-bot')
            .setThumbnail('https://i.imgur.com/FYqFZOA.png')
            .addFields(
                { name: `Meu nome Tag :bookmark: `, value: `\`${client.user.tag}\` `, inline: false },
                { name: `Fui criado em :date: `, value: `\`${client.user.createdAt.toUTCString().substr(0, 16)}\` `, inline: false },
                //{ name: `ㅤ`, value: `ㅤ`},
                { name: `Comandos `, value: `\`Digite ${client.config.prefix}comandos\``, inline: false },
                //{ name: 'Entrei nesse servidor em :date:', value: `${client.joinedAt.toUTCString().substr(0, 16)} `, inline: false },
                { name: `Servidor oficial`, value: '`Em construção 👨‍💻`', inline: false },
                { name: `ID `, value: `\`Nope! 🕵️‍♂️\``, inline: false },
            )
            .setTimestamp()
            .setFooter(`Desenvolvido por luiz#3996 <3`, 'https://avatars3.githubusercontent.com/u/49352785?s=460&u=fcced9885ced69cbe77d9a1503b987992192a766&v');

        msg.reply('**eu ainda estou em fase de desenvolvimento. Caso algum comando não funcione ou esteja funcionando de forma errada, avise ao meu desenvolvedor, por favor!**');
        msg.channel.send(Whoami);

    }
}