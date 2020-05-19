module.exports = {
	name: 'pause',
	description: 'Comando de pausar a música.',
	cooldown: 5,
	execute(client, msg) {
		const serverQueue = msg.client.queue.get(msg.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Música pausada!');
		}
		return msg.channel.send('Não há nada tocando para se pausar!');
	}
};
