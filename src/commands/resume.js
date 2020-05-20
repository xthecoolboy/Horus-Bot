const Discord = require('discord.js');
module.exports = {
	name: 'resume',
	description: 'Continue a música para ouvi-la novamente!',
	cooldown: 5,
	execute(client, msg) {
		const serverQueue = msg.client.queue.get(msg.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Música reiniciada!');
		}
		return msg.channel.send('Não há nada tocando!');
	}
};
