const { SlashCommandBuider, ChatInputerCommandInteraction, MessageFlags, EmbedBuilder } = require('discord.js');
const Twisteds = require('../../../db/models/twisteds.js');
const { manageToon } = require('../../../db/connect.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('twisted')
        .setDescription('A command for managing and viewing twisted information')
        .addSubCommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Add a twisted to the database')
                .addStringOption(option =>
                    option
                        .setName('name')
                        .setDescription('The name of the twisted')
                        .setRequired(true)
                ),
        )
        .addSubCommand(subcommand =>
            subcommand
                .setName('view')
                .setDescription('Add a twisted to the database')
                .addStringOption(option =>
                    option
                        .setName('name')
                        .setDescription('The name of the twisted')
                        .setRequired(true)
                ),
        )
        .addSubCommand(subcommand =>
            subcommand
                .setName('update')
                .setDescription('Add a twisted to the database')
                .addStringOption(option =>
                    option
                        .setName('twisted')
                        .setDescription('The name of the twisted to update')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('name')
                        .setDescription('The name of the twisted')
                        .setRequired(true)
                ),
        )
        .addSubCommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Add a twisted to the database')
                .addStringOption(option =>
                    option
                        .setName('name')
                        .setDescription('The name of the twisted')
                        .setRequired(true)
                ),
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        const twisted = interaction.options.getString('twisted');
        const filter = {
            name: interaction.options.getString('name')
        }

        if (subcommand === 'add') {
            const data = new Twisteds();
            data.name = filter.name;

            await manageToon("id", "toons", filter, "")
            .then(async response => { data.toon_id = response })
            .catch(e => console.error(e));

            await manageToon("add", "twisteds", data, "")
            .then(async response => await interaction.reply(response))
            .catch(e => console.error(e));
        }
        else if (subcommand === 'view') {
            await manageToon("view", "twisteds", filter, "")
            .then(async response => await interaction.reply(response))
            .catch(e => console.log(e))
        }
        else if (subcommand === 'update') {
            const updateFilter = {
                name: twisted
            };

            const changes = {
                $set: {
                    name: filter.name
                }
            };

            await manageToon("update", "twisteds", updateFilter, changes)
            .then(async response => await interaction.reply("Updates cutely"))
            .catch(e => console.log(e));
        }
        else if (subcommand === 'delete') {
            await manageToon("delete", "twisteds", filter, "")
            .then(async response => await interaction.reply("Deletes cutely."))
            .catch(e => console.log(e));
        }
        else {
            return await interaction.reply('This command may not have full support yet.')
        }
    }
}