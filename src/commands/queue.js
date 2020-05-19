module.exports = {
	name: 'queue',
	description: 'Comando para ver a atual fila de músicas.',
	cooldown: 5,
	execute(client, msg) {
		const serverQueue = msg.client.queue.get(msg.guild.id);
		if (!serverQueue) return msg.channel.send('Não há nada tocando!');
		return msg.channel.send(`
__**Fila de músicas:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Tocando agora:** ${serverQueue.songs[0].title}
		`);
	}
};
