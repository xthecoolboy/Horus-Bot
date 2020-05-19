module.exports = {
	name: 'parar',
	description: 'Comando para parar a música de vez!.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Você precisa estar em um canal de música para ouvir música!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Não há nada tocando para eu parar!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Aahh... acabou com o show! Buuhhh... Música encerrada com sucesso.');
	}
};
