module.exports = {
	name: 'np',
	description: 'Comando para ver o que está sendo tocado agora',
	cooldown: 5,
	execute(client, msg) {
		const serverQueue = msg.client.queue.get(msg.guild.id);
		if (!serverQueue) return msg.channel.send('Não há nada tocando.');
		return msg.channel.send(`🎶 Tocando agora: **${serverQueue.songs[0].title}**`);
	}
};
