const Discord = require('discord.js');
const { token } =require('./config.json');
//const { Client, Intents } = require('discord.js');

//const client = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] });
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Suputamadre estoy vivo chavos');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.login(token);