const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Hace algo supongo'),

	async execute(interaction) {

		await interaction.reply('@everyone');

	},
};