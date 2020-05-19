const Discord = require('discord.js');
module.exports = {
    name: 'userinfo',
    description: 'Remova membros do servidor!',
    cooldown: 5,
    execute(client, msg) {
        const usuario = msg.mentions.members.first();
        if (!usuario) {
            const me = msg.member.joinedAt;
            if (msg.author.presence.status == 'online') {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d95e40')
                    .setTitle('Informações do(a) ' + msg.author.displayName + "  :heart_eyes_cat:")
                    .setAuthor("✔️ " + ' Você está online.')
                    .setThumbnail(msg.author.avatarURL())
                    .addFields(
                        { name: 'Nome Tag :bookmark: ', value: `\`${msg.author.tag}\``, inline: true },
                        { name: 'ID :man_detective: ', value: `\`${msg.author.id}\``, inline: true },
                        { name: 'Conta criada em :date:', value: `\`${msg.author.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                        { name: 'Entrou no servidor em :date:', value: `\`${me.toUTCString().substr(0, 16)}\``, inline: false });
                //{ name: 'Status:', value: `${msg.author.user.presence.status}`, inline: true });
                msg.reply(exampleEmbed);
            }

            else if (msg.author.presence.status == 'offline') {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d95e40')
                    .setTitle('Informações do(a) ' + msg.author.displayName + "  :heart_eyes_cat:")
                    .setAuthor("❌ " + ' Você está invisível!')
                    .setThumbnail(msg.author.avatarURL())
                    .addFields(
                        { name: 'Nome Tag :bookmark: ', value: `\`${msg.author.tag}\``, inline: true },
                        { name: 'ID :man_detective: ', value: `\`${msg.author.id}\``, inline: true },
                        { name: 'Conta criada em :date:', value: `\`${msg.author.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                        { name: 'Entrou no servidor em :date:', value: `\`${me.toUTCString().substr(0, 16)}\``, inline: false });
                //{ name: 'Status:', value: `${msg.author.user.presence.status}`, inline: true });
                msg.reply(exampleEmbed);
            }

            else {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d95e40')
                    .setTitle('Informações do(a) ' + msg.author.displayName + "  :heart_eyes_cat:")
                    .setAuthor("✔️ " + ' Você está ocupado/ausente, não quer que te perturbem, né? Danadinho!')
                    .setThumbnail(msg.author.avatarURL())
                    .addFields(
                        { name: 'Nome Tag :bookmark: ', value: `\`${msg.author.tag}\``, inline: true },
                        { name: 'ID :man_detective: ', value: `\`${msg.author.id}\``, inline: true },
                        { name: 'Conta criada em :date:', value: `\`${msg.author.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                        { name: 'Entrou no servidor em :date:', value: `\`${me.toUTCString().substr(0, 16)}\``, inline: false });
                //{ name: 'Status:', value: `${msg.author.user.presence.status}`, inline: true });
                msg.reply(exampleEmbed);
            }
        }
        else if (usuario.id == '708376252695707650') {
            return msg.reply('aaahhh, esse aí é meu filho. Deixa ele quieto!');
        }
        //console.log(usuario);        //Dá pra testar todas as informações que eu quero aqui :)
        else if (usuario.user.presence.status == 'online') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#d95e40')
                .setTitle('Informações do(a) ' + usuario.displayName + "  :heart_eyes_cat:")
                .setAuthor("✔️ " + ' Ele(a) está online!')
                .setThumbnail(usuario.user.avatarURL())
                .addFields(
                    { name: 'Nome Tag :bookmark: ', value: `\`${usuario.user.tag}\``, inline: true },
                    { name: 'ID :man_detective: ', value: `\`${usuario.id}\``, inline: true },
                    { name: 'Conta criada em :date:', value: `\`${usuario.user.createdAt.toUTCString().substr(0, 16)}\` `, inline: true },
                    { name: 'Entrou no servidor em :date:', value: `\`${usuario.joinedAt.toUTCString().substr(0, 16)}\` `, inline: false });
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
                    { name: 'Nome Tag :bookmark: ', value: `\`${usuario.user.tag}\``, inline: true },
                    { name: 'ID :man_detective: ', value: `\`${usuario.id}\``, inline: true },
                    { name: 'Conta criada em :date:', value: `\`${usuario.user.createdAt.toUTCString().substr(0, 16)}\` `, inline: true },
                    { name: 'Entrou no servidor em :date:', value: `\`${usuario.joinedAt.toUTCString().substr(0, 16)}\` `, inline: false });
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
                    { name: 'Nome Tag :bookmark: ', value: `\`${usuario.user.tag}\``, inline: true },
                    { name: 'ID :man_detective: ', value: `\`${usuario.id}\``, inline: true },
                    { name: 'Conta criada em :date:', value: `\`${usuario.user.createdAt.toUTCString().substr(0, 16)}\` `, inline: true },
                    { name: 'Entrou no servidor em :date:', value: `\`${usuario.joinedAt.toUTCString().substr(0, 16)}\` `, inline: false });
            //{ name: 'Status:', value: `${usuario.user.presence.status}`, inline: true });
            msg.reply(exampleEmbed);
        }
    }
}