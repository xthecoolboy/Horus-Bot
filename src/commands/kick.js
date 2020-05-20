const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Remova membros do servidor!',
    cooldown: 5,
    execute(client, msg) {
        if (!msg.guild) return;

        const userkick = msg.mentions.members.first();

        var motivo = msg.content.split(" ");
        motivo.splice(0, 1);
        motivo.splice(0, 1);
        motivo = motivo.join(" ");

        //client.members.kick(userkick);

        if (userkick) {
            if (userkick) {
                if (motivo) {
                    userkick.kick(motivo)
                        .then(() => {
                            let kickEmbed = new Discord.MessageEmbed()
                                .setTitle('Removido com sucesso')
                                .setColor('#d95e40')
                                .addFields(
                                    { name: 'Usuário removido', value: `\`${userkick}\` com ID \`${userkick.id}\``, inline: true },
                                    { name: 'Removido por', value: `<@\`${msg.author.id}\`> com ID  \`${msg.author.id}\``, inline: true },
                                    { name: 'Removido em', value: `\`${msg.channel}\``, inline: false },
                                    { name: 'Data', value: `\`${msg.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                                    { name: 'Motivo', value: `\`${motivo}\``, inline: true }
                                )
                            msg.reply(kickEmbed);
                        })
                        .catch(err => {
                            // Erro ocorreu
                            // Isso geralmente ocorre porque o bot não tem condições suficientes de remover
                            // devido a falta de permissões ou hierarquia no cargo.
                            msg.reply('não consigo remover este membro.');
                            // Log pro erro
                            console.error(err);
                        })
                }
                else {
                    userkick.kick()
                        .then(() => {
                            let kickEmbed = new Discord.MessageEmbed()
                                .setTitle('Removido com sucesso')
                                .setColor('#d95e40')
                                .addFields(
                                    { name: 'Usuário removido', value: `\`${userkick}\` com ID \`${userkick.id}\``, inline: true },
                                    { name: 'Removido por', value: `<@\`${msg.author.id}\`> com ID  \`${msg.author.id}\``, inline: true },
                                    { name: 'Removido em', value: `\`${msg.channel}\``, inline: false },
                                    { name: 'Data', value: `\`${msg.createdAt.toUTCString().substr(0, 16)}\``, inline: true },
                                    { name: 'Motivo', value: 'O motivo não foi declarado', inline: true }
                                )
                            msg.reply(kickEmbed);
                        })
                        .catch(err => {
                            // Erro ocorreu
                            // Isso geralmente ocorre porque o bot não tem condições suficientes de remover
                            // devido a falta de permissões ou hierarquia no cargo.
                            msg.reply('não tenho permissões para remover este membro.');
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
            msg.reply("quase removi... só que... faltou você me dizer quem é pra remover! Use " + `${prefix}` + "kick @jogador motivo (opcional) para remover alguém.");
        }
    }
}