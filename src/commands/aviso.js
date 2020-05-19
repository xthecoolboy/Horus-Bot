const Discord = require('discord.js');
module.exports = {
    name: 'aviso',
    description: 'Faça avisos no servidor!',
    cooldown: 5,
    execute(client, msg, args) {
        var canalnome = msg.content.split(' ')[1];
        var message = msg.content.split(' ');

        // ;aviso @reports socorro me ajuda

        message.splice(0, 1);
        message.splice(0, 1);
        message = message.join(' ');

        // gambiarra para pegar o ID do canal certinho (eu que fiz, to orgulhoso pela gambiarra)
        var canal = canalnome.split('#');
        canal.splice(0, 1);
        canal = canal.join('');
        canal = canal.split('>').join('');
        const channel = client.channels.cache.get(canal);

        if (!channel) {
            return msg.reply('Canal ' + canalnome + ' não encontrado no servidor\n' +
                'Isso pode ter acontecido porque você criou o canal agora ou porque o canal não existe.');
        }

        channel.send('@everyone ' + `${message}`);
        msg.reply('aviso dado no canal ' + canalnome + '! :)');
    }
};  
