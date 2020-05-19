const Discord = require('discord.js');
module.exports = {
    name: 'falando',
    description: 'Eu sei falar!',
    cooldown: 5,
    execute(client, msg) {
        msg.channel.send(`/tts Hi, I am Horus bot, are you listening me?`)
    }
}