module.exports = {
	name: 'pular',
	description: 'Comando para pular de música',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Você precisa estar em um canal de música para ouvir música!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Não há nada tocando para eu pular de música!');
		serverQueue.connection.dispatcher.end('Epa, parece que alguém não gostou da música atual... pulandoo!!');
	}
};
