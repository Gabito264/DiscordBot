const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('Hace nada'),

	async execute(interaction) {
        
		await interaction.reply('nada');

	},
};