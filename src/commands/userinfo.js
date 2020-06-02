const Discord = require('discord.js');
module.exports = {
    name: 'userinfo',
    description: 'Confira informações de membros do servidor!',
    cooldown: 5,
    execute(client, msg) {
        const usuario = msg.mentions.members.first();
        if (!usuario) {
            const me = msg.member.joinedAt;
            if (msg.author.id == '657770685866967040') {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d95e40')
                    .setTitle('Informações do meu chefe lindíssimo')
                    .setThumbnail(msg.author.avatarURL())
                    .addFields(
                        { name: 'Nome Tag :bookmark: ', value: `\`${msg.author.tag}\``, inline: true },
                        { name: 'ID :man_detective: ', value: `\`Indisponível\``, inline: true },
                        { name: 'ㅤ', value: `ㅤㅤ`, inline: true },
                        { name: 'Conta criada em :date:', value: `\`${msg.author.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                        { name: 'Entrou no servidor em :date:', value: `\`${me.toUTCString().substr(0, 16)}\``, inline: true },
                        { name: 'ㅤ', value: `ㅤㅤ`, inline: false },
                        { name: 'Github', value: `\`https://github.com/luizeduardomr\``, inline: false },
                        { name: 'Instagram', value: `\`https://www.instagram.com/luizdudu\``, inline: false });
                msg.reply(exampleEmbed);
            }
            else if (msg.author.presence.status == 'online') {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d95e40')
                    .setTitle('Informações do(a) ' + msg.member.displayName + "  :heart_eyes_cat:")
                    .setAuthor("✔️ " + ' Online')
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
                    .setTitle('Informações do(a) ' + msg.member.displayName + "  :heart_eyes_cat:")
                    .setAuthor("❌ " + 'Invisível')
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
                    .setTitle('Informações do(a) ' + msg.member.displayName + "  :heart_eyes_cat:")
                    .setAuthor("✔️ " + ' Ocupado/ausente, não quer que te perturbem, né?')
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

        else if (usuario.id == '657770685866967040') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#d95e40')
                .setTitle('Informações do meu desenvolvedor' + "  🕵️‍♂️")
                .setThumbnail(usuario.user.avatarURL())
                .addFields(
                    { name: 'Nome Tag :bookmark: ', value: `\`${msg.author.tag}\``, inline: true },
                    { name: 'Nome', value: `\`luiz\``, inline: true },
                    { name: 'Apelido', value: `\`luiz\``, inline: true },
                    { name: 'ㅤㅤ', value: `Não posso dizer mais que isso.`, inline: true });
            msg.reply(exampleEmbed);
        }
        //console.log(usuario);        //Dá pra testar todas as informações que eu quero aqui :)
        else if (usuario.user.presence.status == 'online') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#d95e40')
                .setTitle('Informações do(a) ' + usuario.displayName + "  :heart_eyes_cat:")
                .setAuthor("✔️ " + ' Online!')
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
                .setAuthor("❌ " + ' Offline!')
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
                .setAuthor("✔️ " + ' Ocupado(a)/ausente, não o(a) perturbe!')
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