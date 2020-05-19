module.exports = {
	name: 'next',
	description: 'Comando para pular de música',
	cooldown: 5,
	execute(client, msg) {
		const { channel } = msg.member.voice;
		if (!channel) return msg.channel.send('Você precisa estar em um canal de música para ouvir música!');
		const serverQueue = msg.client.queue.get(msg.guild.id);
		if (!serverQueue) return msg.channel.send('Não há nada tocando para eu pular de música!');
		serverQueue.connection.dispatcher.end('Epa, parece que alguém não gostou da música atual... pulandoo!!');
	}
};
