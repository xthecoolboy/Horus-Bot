const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'pong!',
    cooldown: 5,
    execute(client, msg) {
        if ((Date.now() - msg.createdTimestamp) < 40) {
            var ping = (client.createdAt - msg.createdAt);
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#d95e40')
                .setAuthor("✔️ " + ' Seu ping está bom')
                .addFields(
                    { name: 'Seu ping:', value: ping + " ms", inline: true },
                    { name: 'API:', value: parseInt(Math.round(client.ping)), inline: true },
                );
            msg.reply(`estou desenvolvendo essa função ainda, desculpe` + ' :pensive:');
            msg.channel.send(exampleEmbed);
        }
        else {
            var ping = Date.now() - msg.createdTimestamp + " ms";
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#d95e40')
                .setAuthor("✔️ " + ' Seu ping está bom')
                .addFields(
                    { name: 'Seu ping: ', value: `${ping}` + " ms", inline: true },
                    { name: 'API: ', value: Math.round(client.ping), inline: true },
                );
            msg.reply(`estou desenvolvendo essa função ainda, desculpe` + ' :pensive:');
            msg.channel.send(exampleEmbed);
        }

    }
} 