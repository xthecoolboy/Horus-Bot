const Discord = require('discord.js');
module.exports = {
	name: 'avatar',
	description: 'Comando para ver o seu ou o avatar do usuário!',
	cooldown: 5,
	execute(client, msg) {
		const usuario = msg.mentions.members.first();

		if (usuario) {
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#d95e40')
				.setImage(usuario.user.avatarURL());

			msg.reply(exampleEmbed);
		} else {
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#d95e40')
				.setImage(msg.author.avatarURL());

			msg.reply(exampleEmbed);
		}
	}
};
