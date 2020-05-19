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
                                .addField('Usuário removido', `${userkick} com ID ${userkick.id} `)
                                .addField('Removido por', `<@${msg.author.id}> com ID  ${msg.author.id}`)
                                .addField('Removido em', msg.channel)
                                .addField('Quando', msg.createdAt.toUTCString().substr(0, 16))
                                .addField('Motivo', motivo);
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
                                .addField('Usuário removido', `${userkick} com ID ${userkick.id} `)
                                .addField('Removido por', `<@${msg.author.id}> com ID  ${msg.author.id}`)
                                .addField('Removido em', msg.channel)
                                .addField('Quando', msg.createdAt.toUTCString().substr(0, 16))
                                .addField('Motivo', 'O motivo não foi declarado');
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
            msg.reply("Quase removi... só que... faltou você me dizer quem é pra remover! Use " + `${prefix}` + "kick @jogador motivo (opcional) para remover alguém.");
        }
    }
}