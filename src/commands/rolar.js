const Discord = require('discord.js');
const client = new Discord.Client();  // Inicialização do client (bot)

module.exports = {
    name: 'rolar',
    description: 'Jogue um dado aleatório de X lados!',
    cooldown: 5,
    execute(msg) {
        const messageWords = msg.content.split(' ');
        const rollFlavor = messageWords.slice(2).join(' ');
        if (messageWords[0] === `${prefix}rolar`) {
            if (messageWords.length === 1) {
                // !roll
                return msg.reply(
                    (Math.floor(Math.random() * 6) + 1) + ' ' + rollFlavor
                );
            }

            let sides = messageWords[1]; // !roll 20
            let rolls = 1;
            if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {
                // !roll 4d20
                rolls = messageWords[1].split('d')[0] / 1;
                sides = messageWords[1].split('d')[1];
            } else if (messageWords[1][0] == 'd') {
                // !roll d20
                sides = sides.slice(1);
            }
            sides = sides / 1; // convert to number
            if (isNaN(sides) || isNaN(rolls)) {
                return;
            }
            if (rolls > 1) {
                const rollResults = [];
                for (let i = 0; i < rolls; i++) {
                    rollResults.push(Math.floor(Math.random() * sides) + 1);
                }
                const sum = rollResults.reduce((a, b) => a + b);
                return msg.reply(`[${rollResults.toString()}] ${rollFlavor}`);
            } else {
                return msg.reply(
                    (Math.floor(Math.random() * sides) + 1) + ' ' + rollFlavor
                );
            }
        }
    }
}
