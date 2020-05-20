const Discord = require('discord.js');
module.exports = {
    name: 'serverinfo',
    description: 'Veja informações do servidor',
    cooldown: 5,
    execute(client, msg) {
        const serverEmbed = new Discord.MessageEmbed()
            .setColor('#d95e40')
            .setTitle('Informações do servidor')
            .setThumbnail(msg.guild.iconURL())
            .addFields(
                { name: 'Nome do servidor', value: `\`${msg.guild.name}\`` },
                { name: 'Dono do servidor', value: `\`${msg.author.tag}\`` },     //ou msg.guild.owenr (mas com `` aparece só <@545645676575>)
                { name: 'Criado em', value: `\`${msg.guild.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                { name: 'Você entrou em', value: `\`${msg.member.joinedAt.toUTCString().substr(0, 16)}\``, inline: true },
                { name: 'Membros', value: `\`${msg.guild.memberCount}\``, inline: true },
            )
        msg.reply(serverEmbed)
    }
}