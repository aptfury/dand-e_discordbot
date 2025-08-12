const { SlashCommandBuilder, ChatInputCommandInteraction, MessageFlags, EmbedBuilder } = require('discord.js');
const Toons = require('../../../db/models/toons.js');
const { createToon, doesToonExist, viewToon, getToonId, updateToon, deleteToon } = require('../../../db/services/toons.js');
const { Active, Passive, Extraction, Health, Skillchecks, Speed, Stamina, Stealth, Light, Rank, Images, Mastery, Requirements, Builds, ToonStats } = require('../../../db/models/stats.js');
const { createActiveAbility, createPassiveAbility, createExtraction, createHealth, createSkillcheck, createSpeed, createStamina, createStealth, createLight, createRank, createImages, createMastery, createRequirements, createBuilds, createToonStats, readActive, readPassive, readExtraction, readHealth, readSkillcheck, readSpeed, readStamina, readStealth, readLight, readRank, readImages, readMastery, readRequirements, readBuilds, readToonStats, updateActive, updatePassive, updateExtraction, updateHealth, updateSkillcheck, updateSpeed, updateStamina, updateStealth, updateLight, updateRank, updateImages, updateMastery, updateRequirements, updateBuilds, updateToonStats, deleteActive, deletePassive, deleteExtraction, deleteHealth, deleteSkillcheck, deleteSpeed, deleteStamina, deleteStealth, deleteLight, deleteRank, deleteImages, deleteMastery, deleteRequirements, deleteBuilds, deleteToonStats } = require('../../../db/services/stats.js');

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
                .addStringOption(option =>
                    option
                        .setName('rank')
                        .setDescription('The rank of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('health')
                        .setDescription('The health of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('skillcheck')
                        .setDescription('The skillcheck of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('speed')
                        .setDescription('The speed of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('stamina')
                        .setDescription('The stamina of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('stealth')
                        .setDescription('The stealth of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('extraction')
                        .setDescription('The extraction of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('light')
                        .setDescription('The light of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('active')
                        .setDescription('The active ability of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('passive')
                        .setDescription('The passive ability of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('mastery')
                        .setDescription('The mastery tasks for the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('requirements')
                        .setDescription('The requirements to get the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('builds')
                        .setDescription('Common builds for the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('images')
                        .setDescription('The images of the toon')
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
                .addStringOption(option =>
                    option
                        .setName('rank')
                        .setDescription('The rank of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('health')
                        .setDescription('The health of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('skillcheck')
                        .setDescription('The skillcheck of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('speed')
                        .setDescription('The speed of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('stamina')
                        .setDescription('The stamina of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('stealth')
                        .setDescription('The stealth of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('extraction')
                        .setDescription('The extraction of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('light')
                        .setDescription('The light of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('active')
                        .setDescription('The active ability of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('passive')
                        .setDescription('The passive ability of the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('mastery')
                        .setDescription('The mastery tasks for the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('requirements')
                        .setDescription('The requirements to get the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('builds')
                        .setDescription('Common builds for the toon')
                )
                .addStringOption(option =>
                    option
                        .setName('images')
                        .setDescription('The images of the toon')
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
        const name = interaction.options.getString('name');
        const gender = interaction.options.getString('gender');
        const pronouns = interaction.options.getString('pronouns');
        const rank = interaction.options.getString('rank');
        const health = interaction.options.getString('health');
        const skillcheck = interaction.options.getString('skillcheck');
        const speed = interaction.options.getString('speed');
        const stamina = interaction.options.getString('stamina');
        const stealth = interaction.options.getString('stealth');
        const extraction = interaction.options.getString('extraction');
        const light = interaction.options.getString('light');
        const active = interaction.options.getString('active');
        const passive = interaction.options.getString('passive');
        const mastery = interaction.options.getString('mastery');
        const requirements = interaction.options.getString('requirements');
        const builds = interaction.options.getString('builds');
        const images = interaction.options.getString('images');
        const toon = interaction.options.getString('toon');

        if (subcommand === 'add') {
            if (await doesToonExist({ name: name })) {
                await interaction.reply('That toon already exists in the database, please try editing this toon instead.');
                return;
            }
            const newToon = new Toons({
                name: name,
                gender: gender || null,
                pronouns: pronouns || null,
                stats: new ToonStats({
                    toon: name,
                    rank: rank || null,
                    health: health || null,
                    skillcheck: skillcheck || null,
                    speed: speed || null,
                    stamina: stamina || null,
                    stealth: stealth || null,
                    extraction: extraction || null,
                    light: light || null,
                    active: active || null,
                    passive: passive || null,
                    mastery: mastery || null,
                    requirements: requirements || null,
                    builds: builds || null,
                    images: images || null
                }),
            });

            const addStats = createToonStats(newToon.stats);
            const addToon = createToon(newToon);

            if (addStats && addToon) {
                await interaction.reply('The toon and their stats have been sucessfully added.');
                return;
            }
            else if (addStats) {
                await interaction.reply('The stats for this toon have been added');
                return;
            }
            else if (addToon) {
                await interaction.reply('The toon has been added, please do not forget to add their stats');
                return;
            }
            else {
                await interaction.reply('An error occurred and the information could not be added into the database at this time. Please try again after verifying the information or reach out to bot admin.');
                return;
            }
        }
        else if (subcommand === 'view') {
            const search = viewToon({ name: toon })
            await interaction.reply(`\`\`\`${JSON.stringify(search, null, 4)}\`\`\``);
            return;
        }
        else if (subcommand === 'update') {}
        else if (subcommand === 'delete') {}
        else {
            await interaction.reply('That is not an applicable command at this time.');
            return;
        }
        
    }
}