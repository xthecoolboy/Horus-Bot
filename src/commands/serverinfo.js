const Discord = require('discord.js');
const client = new Discord.Client();  // Inicialização do client (bot)

module.exports = {
    name: 'rolar',
    description: 'Jogue um dado aleatório de X lados!',
    cooldown: 5,
    execute(msg) {
        const serverEmbed = new Discord.MessageEmbed()
            .setColor('#d95e40')
            .setTitle('Informações do servidor')
            .setThumbnail(msg.guild.iconURL())
            .addFields(
                { name: 'Nome do servidor', value: msg.guild.name },
                { name: 'Dono do servidor', value: msg.guild.owner },
                { name: 'Criado em', value: msg.guild.createdAt.toUTCString().substr(0, 16), inline: true },
                { name: 'Você entrou em', value: msg.member.joinedAt.toUTCString().substr(0, 16), inline: true },
                { name: 'Membros', value: msg.guild.memberCount, inline: true },
            )
        msg.reply(serverEmbed)
    }
}