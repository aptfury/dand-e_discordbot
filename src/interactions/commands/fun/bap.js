const { SlashCommandBuilder, ChatInputCommandInteraction, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bap')
        .setDescription('Bap your friends!')
        .addUserOption(option =>
            option
                .setName("bappee")
                .setDescription("Who do you want to bap?")
                .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const bappee = interaction.options.getUser('bappee');
        const msg = `BAPS YOU <@${bappee.id}>! \(<@${interaction.user.id}>\)`;
        await interaction.reply(msg);
    },
}