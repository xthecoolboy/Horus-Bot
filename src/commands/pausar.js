module.exports = {
	name: 'pausar',
	description: 'Comando de pausar a música.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Música pausada!');
		}
		return message.channel.send('Não há nada tocando para se pausar!');
	}
};
