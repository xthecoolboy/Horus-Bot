const Discord = require('discord.js');
module.exports = {
    name: 'imagem',
    description: 'Envie uma imagem para o canal especificado',
    cooldown: 5,
    execute(client, msg) {
        if (msg.author.id == client.user.id) {
            return;
        }
        var canalnome = msg.content.split(' ')[1];
        var canal = canalnome.split('#');
        canal.splice(0, 1);
        canal = canal.join('');
        canal = canal.split('>').join('');
        const channel = client.channels.cache.get(canal);

        if (!channel) {
            return msg.reply('Canal ' + canalnome + ' não encontrado no servidr\n' +
                'Isso pode ter acontecido porque você criou o canal agora ou porque o canal com este nome não existe.');
        }
        var Attachment = (msg.attachments).array();
        channel.send((Attachment[0]));
        msg.reply('imagem enviada ao canal ' + canalnome + '! :)');

    }
}