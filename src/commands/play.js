const { Util } = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'Comando para tocar músicas.',
	usage: '[command name]',
	args: true,
	cooldown: 5,
	async execute(client, msg, args) {
		const { channel } = msg.member.voice;
		if (!channel) return msg.channel.send('Você precisa estar em um canal de música para ouvir música!');
		const permissions = channel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) return msg.channel.send('Não posso me conectar ao seu canal de música pois não possuo permissões suficientes!');
		if (!permissions.has('SPEAK')) return msg.channel.send('Não posso falar e ouvir neste canal de música. Como vou cantar pra você? Faltam-me permissões!');

		const serverQueue = msg.client.queue.get(msg.guild.id);
		const songInfo = await ytdl.getInfo(args[0].replace(/<(.+)>/g, '$1'));
		const song = {
			id: songInfo.video_id,
			title: Util.escapeMarkdown(songInfo.title),
			url: songInfo.video_url
		};

		if (serverQueue) {
			serverQueue.songs.push(song);
			console.log(serverQueue.songs);
			return msg.channel.send(`✅ **${song.title}** foi adicionado à fila!`);
		}

		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: channel,
			connection: null,
			songs: [],
			volume: 2,
			playing: true
		};
		msg.client.queue.set(msg.guild.id, queueConstruct);
		queueConstruct.songs.push(song);

		const play = async song => {
			const queue = msg.client.queue.get(msg.guild.id);
			if (!song) {
				queue.voiceChannel.leave();
				msg.client.queue.delete(msg.guild.id);
				return;
			}

			const dispatcher = queue.connection.play(ytdl(song.url))
				.on('finish', () => {
					queue.songs.shift();
					play(queue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(queue.volume / 5);
			queue.textChannel.send(`🎶 Comecei a cantar: **${song.title}**`);
		};

		try {
			const connection = await channel.join();
			queueConstruct.connection = connection;
			play(queueConstruct.songs[0]);
		} catch (error) {
			console.error(`Não entrei no canal de música: ${error}`);
			msg.client.queue.delete(msg.guild.id);
			await channel.leave();
			return msg.channel.send(`Não entrei no canal de música ${error}`);
		}
	}
};
