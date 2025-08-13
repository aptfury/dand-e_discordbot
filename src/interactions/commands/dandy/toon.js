const { SlashCommandBuilder, ChatInputCommandInteraction, MessageFlags, EmbedBuilder } = require('discord.js');
const Toons = require('../../../db/models/toons.js');
const { create, view, find } = require('../../../db/services/toons.js');
const { Active, Passive, Extraction, Health, Skillchecks, Speed, Stamina, Stealth, Light, Rank, Images, Mastery, Requirements, Builds, ToonStats } = require('../../../db/models/stats.js');

const { manageToon } = require('../../../db/connect.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toon')
        .setDescription('A command for managing and viewing toon information')
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Add a toon to the database')
                .addStringOption(option =>
                    option
                        .setName('name')
                        .setDescription('The name of the toon')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('gender')
                        .setDescription('The gender of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('pronouns')
                        .setDescription('The pronouns of the toon')
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('view')
                .setDescription('View a toon from the database')
                .addStringOption(option =>
                    option
                        .setName('toon')
                        .setDescription('The toon to view')
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('update')
                .setDescription('Update a toon in the database')
                .addStringOption(option =>
                    option
                        .setName('toon')
                        .setDescription('The name of the toon to update')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('name')
                        .setDescription('The name of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('gender')
                        .setDescription('The gender of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('pronouns')
                        .setDescription('The pronouns of the toon')
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Delete a toon from the database')
                .addStringOption(option =>
                    option
                        .setName('toon')
                        .setDescription('The toon to delete')
                        .setRequired(true)
                )
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        const toon = interaction.options.getString('toon');

        const fields = {
            name: interaction.options.getString('name') || null,
            gender: interaction.options.getString('gender') || null,
            pronouns: interaction.options.getString('pronouns') || null
        }

        const data = new Toons({...fields});

        if (subcommand === 'add') {

            await manageToon("add", "toons", data, "")
            .then(async response => await interaction.reply(response))
            .catch(e => console.error(e));
        
        }
        else if (subcommand === 'view') {
            const viewFilter = {
                name: toon
            };

            await manageToon("view", "toons", viewFilter, "")
            .then(async response => await interaction.reply(response))
            .catch(e => console.log(e));
        }
        else if (subcommand === 'update') {
            const updateFilter = {
                name: toon
            };

            const changes = {
                $set: {}
            };

            for (const key in fields) {
                if (fields[key] !== null) {
                    changes.$set[key] = fields[key];
                }
            };

            await manageToon("update", "toons", updateFilter, changes)
            .then(async response => await interaction.reply("Updates cutely"))
            .catch(e => console.log(e));
        }
        else if (subcommand === 'delete') {
            const deleteFilter = {
                name: toon
            };

            await manageToon("delete", "toons", deleteFilter, "")
            .then(async response => await interaction.reply("Deleted."))
            .catch(e => console.log(e));
        }
        else {
            return await interaction.reply('This command may not have full support yet.');
        }
    }
}