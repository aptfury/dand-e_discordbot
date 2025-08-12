require('@dotenvx/dotenvx').config();
const { EmbedBuilder, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, MessageFlags, ChatInputCommandInteraction } = require('discord.js');
const { data } = require('../utility/ping');

const quoteChannel = process.env.PROJ_DEV_CHAN_ID;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Post a quote to the quotes channel.')
        .addUserOption(option =>
            option.setName('member')
                .setDescription('The member to quote.')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('quote')
                .setDescription('The quote to post.')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
        .setContexts(InteractionContextType.Guild),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const member = interaction.options.getMember('user');
        const quote = interaction.options.getString('quote');
        const channel = interaction.guild.channels.cache.get(quoteChannel);
        const name = member.displayName;

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setDescription(`${quote}`)
            .setTimestamp()
            .setFooter({ text: `${name}` });

        try {
            await channel.send({ embeds: [embed] });
            await interaction.reply({ content: 'Success!', flags: MessageFlags.Ephemeral });
        } catch (e) {
            console.error(e);
        }
    }
}