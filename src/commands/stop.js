module.exports = {
	name: 'stop',
	description: 'Comando para parar a música de vez!.',
	cooldown: 5,
	execute(client, msg) {
		const { channel } = msg.member.voice;
		if (!channel) return msg.channel.send('Você precisa estar em um canal de música para ouvir música!');
		const serverQueue = msg.client.queue.get(msg.guild.id);
		if (!serverQueue) return msg.channel.send('Não há nada tocando para eu parar!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Aahh... acabou com o show! Buuhhh... Música encerrada com sucesso.');
		return msg.channel.send('Aahh... acabou com o show! Buuhhh... Música encerrada com sucesso. Tô saindo :( ');
	}
};
