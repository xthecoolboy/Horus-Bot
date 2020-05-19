const Discord = require('discord.js');
const client = new Discord.Client();  // Inicialização do client (bot)

module.exports = {
    name: 'kick',
    description: 'Remova membros do servidor!',
    cooldown: 5,
    execute(msg) {
        const usuario = msg.mentions.members.first();
        if (!usuario) {
            if (msg.author.user.presence.status == 'online') {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d95e40')
                    .setTitle('Informações do(a) ' + msg.author.displayName + "  :heart_eyes_cat:")
                    .setAuthor("✔️ " + ' Você está online.')
                    .setThumbnail(msg.author.user.avatarURL())
                    .addFields(
                        { name: 'Nome Tag do Discord :bookmark: ', value: `${msg.author.user.tag}`, inline: true },
                        { name: 'ID do Discord :man_detective: ', value: msg.author.id, inline: true },
                        { name: 'Conta criada em :date:', value: `${msg.author.user.createdAt.toUTCString().substr(0, 16)} `, inline: true },
                        { name: 'Entrou no servidor em :date:', value: `${msg.author.joinedAt.toUTCString().substr(0, 16)} `, inline: false });
                //{ name: 'Status:', value: `${msg.author.user.presence.status}`, inline: true });
                msg.reply(exampleEmbed);
            }

            else if (msg.author.user.presence.status == 'offline') {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d95e40')
                    .setTitle('Informações do(a) ' + msg.author.displayName + "  :heart_eyes_cat:")
                    .setAuthor("❌ " + ' Você está invisível!')
                    .setThumbnail(msg.author.user.avatarURL())
                    .addFields(
                        { name: 'Nome Tag do Discord :bookmark: ', value: msg.author.user.tag, inline: true },
                        { name: 'ID do Discord :man_detective: ', value: msg.author.id, inline: true },
                        { name: 'Conta criada em :date:', value: `${msg.author.user.createdAt.toUTCString().substr(0, 16)} `, inline: true },
                        { name: 'Entrou no servidor em :date:', value: `${msg.author.joinedAt.toUTCString().substr(0, 16)} `, inline: false });
                //{ name: 'Status:', value: `${msg.author.user.presence.status}`, inline: true });
                msg.reply(exampleEmbed);
            }

            else {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d95e40')
                    .setTitle('Informações do(a) ' + msg.author.displayName + "  :heart_eyes_cat:")
                    .setAuthor("✔️ " + ' Você está ocupado/ausente, não quer que te perturbem, né? Danadinho!')
                    .setThumbnail(msg.author.user.avatarURL())
                    .addFields(
                        { name: 'Nome Tag do Discord :bookmark: ', value: msg.author.user.tag, inline: true },
                        { name: 'ID do Discord :man_detective: ', value: msg.author.id, inline: true },
                        { name: 'Conta criada em :date:', value: `${msg.author.user.createdAt.toUTCString().substr(0, 16)} `, inline: true },
                        { name: 'Entrou no servidor em :date:', value: `${msg.author.joinedAt.toUTCString().substr(0, 16)} `, inline: false });
                //{ name: 'Status:', value: `${msg.author.user.presence.status}`, inline: true });
                msg.reply(exampleEmbed);
            }
        }
        //console.log(usuario);        //Dá pra testar todas as informações que eu quero aqui :)
        if (usuario.user.presence.status == 'online') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#d95e40')
                .setTitle('Informações do(a) ' + usuario.displayName + "  :heart_eyes_cat:")
                .setAuthor("✔️ " + ' Ele(a) está online!')
                .setThumbnail(usuario.user.avatarURL())
                .addFields(
                    { name: 'Nome Tag do Discord :bookmark: ', value: `${usuario.user.tag}`, inline: true },
                    { name: 'ID do Discord :man_detective: ', value: usuario.id, inline: true },
                    { name: 'Conta criada em :date:', value: `${usuario.user.createdAt.toUTCString().substr(0, 16)} `, inline: true },
                    { name: 'Entrou no servidor em :date:', value: `${usuario.joinedAt.toUTCString().substr(0, 16)} `, inline: false });
            //{ name: 'Status:', value: `${usuario.user.presence.status}`, inline: true });
            msg.reply(exampleEmbed);
        }

        else if (usuario.user.presence.status == 'offline') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#d95e40')
                .setTitle('Informações do(a) ' + usuario.displayName + "  :heart_eyes_cat:")
                .setAuthor("❌ " + ' Ele(a) está offline!')
                .setThumbnail(usuario.user.avatarURL())
                .addFields(
                    { name: 'Nome Tag do Discord :bookmark: ', value: usuario.user.tag, inline: true },
                    { name: 'ID do Discord :man_detective: ', value: usuario.id, inline: true },
                    { name: 'Conta criada em :date:', value: `${usuario.user.createdAt.toUTCString().substr(0, 16)} `, inline: true },
                    { name: 'Entrou no servidor em :date:', value: `${usuario.joinedAt.toUTCString().substr(0, 16)} `, inline: false });
            //{ name: 'Status:', value: `${usuario.user.presence.status}`, inline: true });
            msg.reply(exampleEmbed);
        }

        else {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#d95e40')
                .setTitle('Informações do(a) ' + usuario.displayName + "  :heart_eyes_cat:")
                .setAuthor("✔️ " + ' Ele(a) está online mas ocupado/ausente, não o perturbe!')
                .setThumbnail(usuario.user.avatarURL())
                .addFields(
                    { name: 'Nome Tag do Discord :bookmark: ', value: usuario.user.tag, inline: true },
                    { name: 'ID do Discord :man_detective: ', value: usuario.id, inline: true },
                    { name: 'Conta criada em :date:', value: `${usuario.user.createdAt.toUTCString().substr(0, 16)} `, inline: true },
                    { name: 'Entrou no servidor em :date:', value: `${usuario.joinedAt.toUTCString().substr(0, 16)} `, inline: false });
            //{ name: 'Status:', value: `${usuario.user.presence.status}`, inline: true });
            msg.reply(exampleEmbed);
        }
    }
}