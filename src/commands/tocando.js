module.exports = {
	name: 'tocando',
	description: 'Comando para ver o que está sendo tocado agora',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Não há nada tocando.');
		return message.channel.send(`🎶 Tocando agora: **${serverQueue.songs[0].title}**`);
	}
};
