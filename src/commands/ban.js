const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'Dê banimentos em membros do servidor',
    cooldown: 5,
    execute(client, msg, args) {
        if (!msg.guild) return;

        const userban = msg.mentions.members.first();
        var motivo = msg.content.split(" ");
        motivo.splice(0, 1);
        motivo.splice(0, 1);
        motivo = motivo.join(" ");


        if (userban) {
            if (userban) {
                if (motivo) {
                    //msg.guild.members.ban(userban, motivo)
                    msg.guild.member(userban).ban(motivo)
                        .then(() => {
                            let kickEmbed = new Discord.MessageEmbed()
                                .setTitle('Banido com sucesso')
                                .setColor('#d95e40')
                                .addFields(
                                    { name: 'Usuário banido', value: `\`${userban}\` com ID \`${userban.id}\``, inline: true },
                                    { name: 'Banido por', value: `<@\`${msg.author.id}\`> com ID  \`${msg.author.id}\``, inline: true },
                                    { name: 'Banido em', value: `\`${msg.channel}\``, inline: false },
                                    { name: 'Data', value: `\`${msg.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                                    { name: 'Motivo', value: `\`${motivo}\``, inline: true }
                                )
                            msg.reply(kickEmbed);

                        })
                        .catch(err => {
                            // Erro ocorreu
                            // Isso geralmente ocorre porque o bot não tem condições suficientes de banir
                            // devido a falta de permissões ou hierarquia no cargo.
                            msg.reply('não consigo banir este membro.');
                            // Log pro erro
                            console.error(err);
                        })
                }
                else {
                    msg.guild.members.ban(userban)
                        .then(() => {
                            let kickEmbed = new Discord.MessageEmbed()
                                .setTitle('Banido com sucesso')
                                .setColor('#d95e40')
                                .addFields(
                                    { name: 'Usuário banido', value: `\`${userban}\` com ID \`${userban.id}\``, inline: true },
                                    { name: 'Banido por', value: `<@\`${msg.author.id}\`> com ID  \`${msg.author.id}\``, inline: true },
                                    { name: 'Banido em', value: `\`${msg.channel}\``, inline: false },
                                    { name: 'Data', value: `\`${msg.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                                    { name: 'Motivo', value: 'Motivo não declarado', inline: true }
                                )
                            msg.reply(kickEmbed);

                        })
                        .catch(err => {
                            // Erro ocorreu
                            // Isso geralmente ocorre porque o bot não tem condições suficientes de banir
                            // devido a falta de permissões ou hierarquia no cargo.
                            msg.reply('não consigo banir este membro.');
                            // Log pro erro
                            console.error(err);
                        })

                }
            } else {
                // O usuário mencionado não tá no servidor
                msg.reply("este infrator não está no servidor!");
            }
            // Usuário não mencionado
        } else {
            msg.reply("Quase bani... só que... faltou você me dizer quem é pra remover! Use " + `${prefix}` + "ban @jogador motivo (opcional) para remover alguém.");
        }
    }
}

/*
                                .addField('Usuário banido', `\`${userban}\` com ID \`${userban.id}\``)
                                .addField('Banido por', `<@\`${msg.author.id}\`> com ID  \`${msg.author.id}\``)
                                .addField('Banido em', `\`${msg.channel}\``)
                                .addField('Quando', `\`${msg.createdAt.toUTCString().substr(0, 16)}\``)
                                .addField('Motivo', '`Motivo não declarado`');

                                */