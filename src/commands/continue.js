module.exports = {
	name: 'continue',
	description: 'Continue a música para ouvi-la novamente!',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Música reiniciada!');
		}
		return message.channel.send('Não há nada tocando!');
	}
};
