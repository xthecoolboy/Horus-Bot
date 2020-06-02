const Discord = require('discord.js');
module.exports = {
	name: 'comandos',
	description: 'Comando de ajuda.',
	cooldown: 5,
	execute(client, msg) {
		var dono = msg.guild.owner.displayName;
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
				'`imagem:`    Envie imagens para um determinado canal no servidor!\n' +
				'`kick:`   Remova jogadores indesejados do servidor\n' +
				'`ping:`    pong!\n' +
				'`prefix:`    Veja o prefixo atual ou altere-o.\n' +
				'`rolar:`    Jogue um dado de lados especificados.\n' +
				'`serverinfo:`    Confira informações sobre este servidor, como por exemplo quem é dono desse palácio! (Spoiler: é o ' + dono + ')!\n' +
				'`userinfo:`    Veja suas informações ou de um determinado membro\n\n\n' +
				'**Comandos de música:**\n'+
				'`next:`    Pule para a próxima música!\n' +
				'`np:`    Veja qual música está sendo tocada agora\n' +
				'`pause:`    Pause a música!\n' +
				'`play:`    Toque as músicas!\n' +
				'`queue:`    Veja quais são as próximas músicas a serem tocadas na fila!\n' +
				'`resume:`    Continue ~ou despause~ a música para ouvi-la novamente!\n' +
				'`stop:`    Pare a música imediatamente!\n' +
				'`volume:`    Altere o volume ou veja o volume atual!\n'		
			)
			.setFooter(`Discord do desenvolvedor: luiz#3996`, 'https://avatars3.githubusercontent.com/u/49352785?s=460&u=fcced9885ced69cbe77d9a1503b987992192a766&v');

		msg.reply(`**eu ainda estou em fase de desenvolvimento. Caso algum comando não funcione ou esteja funcionando de forma errada, avise ao meu desenvolvedor, por favor!**`);
		msg.channel.send(helpEmbed)
	}
};
