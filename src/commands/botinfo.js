const Discord = require('discord.js');
module.exports = {
    name: 'botinfo',
    description: 'Veja informações minhas!',
    cooldown: 5,
    execute(client, msg) {
        const Whoami = new Discord.MessageEmbed()
            .setColor('#d95e40')
            .setTitle('Informações minhas!')
            .setURL('https://github.com/luizeduardomr/Horus-bot')
            .setThumbnail('https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png')
            .addFields(
                { name: `Meu nome Tag :bookmark: `, value: `\`${client.user.tag}\` `, inline: true },
                { name: `Fui criado em :date: `, value: `\`${client.user.createdAt.toUTCString().substr(0, 16)}\` `, inline: true },
                { name: `Comandos `, value: `Digite ` + client.config.prefix + `comandos`, inline: true },
                //{ name: 'Entrei nesse servidor em :date:', value: `${client.joinedAt.toUTCString().substr(0, 16)} `, inline: true },
                { name: `Servidor Oficial`, value: '`https://discord.gg/npSAC75`', inline: false },
                { name: ` ㅤ`, value: 'Ok, chega de informações sobre mim, me fale sobre você! Ou melhor, deixa que eu vejo! :man_detective:', inline: false },
            )
            .setTimestamp()
            .setFooter(`Feito com amor e carinho por luiz#3996 <3`, 'https://avatars3.githubusercontent.com/u/49352785?s=460&u=fcced9885ced69cbe77d9a1503b987992192a766&v');

        msg.reply(Whoami);

    }
}