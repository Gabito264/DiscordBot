const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('ooga booga'),

	async execute(interaction) {

		await interaction.reply('no hace nada por ahora, lo siento!');

	},
};