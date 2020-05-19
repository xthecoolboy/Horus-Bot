const Discord = require('discord.js');

module.exports = {
	name: 'comandos',
	description: 'Comando de ajuda.',
	cooldown: 5,
	execute(message) {
		var dono = message.guild.owner.displayName;
		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#d95e10')
			.setTitle('Comandos do tio Horus')
			.setThumbnail('https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png')
			.setDescription(
				'`ajuda:`    Peça uma ajuda!\n' +
				'`avatar`:    Veja o seu avatar ou o de outro usuário! \n' +
				'`aviso`:    Dê um aviso @everyone em um canal especificado! \n' +
				'`ban`:    Dê banimentos a infratores \n' +
				'`botinfo`:    Veja mais sobre mim e meu criador! \n' +
				'`clear`:    Remova as mensagens de acordo com a quantidade. \n' +
				'`comandos:`    É este comando aqui, hehe!\n' +
				'`fila:`    Veja quais são as próximas músicas a serem tocadas na fila!\n' +
				'`kick:`   Remova jogadores indesejados do servidor\n' +
				'`parar:`    Pare a música imediatamente!\n' +
				'`pausar:`    Pause a música!\n' +
				'`ping:`    pong!\n' +
				'`pular:`    Pule para a próxima música!\n' +
				'`reiniciar:`    Reinicie a música para ouvi-la novamente!\n' +
				'`rolar:`    Jogue um dado de lados especificados.\n' +
				'`serverinfo:`    Confira informações sobre este servidor, como por exemplo quem é dono desse palácio! (Spoiler: é o ' + dono + ')!\n' +
				'`tocando:`    Veja qual música está sendo tocada agora\n' +
				'`tocar:`    Famoso "play" abrasileirado, hihi\n' +
				'`userinfo:`    Veja suas informações ou de um determinado membro\n' +
				'`volume:`    Altere o volume ou veja o volume atual!\n'
			);
		return message.channel.send(helpEmbed);
	}
};
