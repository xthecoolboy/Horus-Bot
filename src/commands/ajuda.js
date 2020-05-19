const Discord = require('discord.js');

module.exports = {
	name: 'ajuda',
	description: 'Comando de ajuda.',
	cooldown: 5,
	execute(client, msg) {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#d95e10')
			.setTitle('Ajuda do tio Horus')
			.setThumbnail('https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png')
			.setDescription('Olá ' + '<@' + `${msg.member.user.id}` + '>' + '! Eu sou o Horus Music! Eu sou um bot' +
				' construído para atender seus ouvidos! Isso mesmo, hehehe...\n \nEnfim, eu espero que você goste de mim, sinta-se livre para me usar...' +
				' digo, usar os comandos disponíveis atualmente, ok? \n \nCaso tenha sugestões de comandos novos, entre no meu servidor oficial!')
			.setURL('https://discord.gg/npSAC75')
			.addFields(
				{ name: 'Lista de comandos', value: `Digite ` + client.config.prefix + `comandos para ver a lista de comandos disponíveis` },
				{ name: 'Me ajuda a ficar online!', value: 'É... atualmente não estou online, ainda estou sendo desenvolvido.. mas um dia precisarei de ajuda!' },
				{ name: 'Siga o meu criador lindo e maravilhoso no Instagram!', value: 'https://www.instagram.com/luizdudu' }
			);
		msg.channel.send(helpEmbed);
		msg.reply('https://discord.gg/npSAC75')
	}
};
