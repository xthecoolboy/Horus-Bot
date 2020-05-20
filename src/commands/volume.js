module.exports = {
	name: "volume",
	description: "Comando de volume!.",
	cooldown: 5,
	execute(client, message, args) {
	  const { channel } = message.member.voice;
	  if (!channel)
		return message.channel.send(
		  "Você precisa estar em um canal de música para ouvir música!"
		);
	  const serverQueue = message.client.queue.get(message.guild.id);
	  if (!serverQueue) return message.channel.send("Não há nada tocando agora.");
	  if (!args[0])
		return message.channel.send(
		  `O volume atual é: **${serverQueue.volume}**`
		);
	  serverQueue.volume = args[0]; // eslint-disable-line
	  serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
	  return message.channel.send(`Alterei o volume para: **${args[0]}**`);
	}
  };
  