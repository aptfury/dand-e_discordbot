/****************************
 *  IMPORTS
 ***************************/
require('@dotenvx/dotenvx').config();
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

/****************************
 *  .ENV VARIABLES
 ***************************/
const token = process.env.TOKEN;
const projChan = process.env.PROJ_DEV_CHAN_ID;

/****************************
 *  BOT CLIENT INIT
 ***************************/
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildExpressions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessagePolls,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.MessageContent
    ]
});

/****************************
 *  COMMAND HANDLER
 ***************************/
/* const commandsPath = path.join(__dirname, './interactions/commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
    const commandPath = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            bot.commands.set(command.data.name, command);
            console.info(`${command.data.name} has been added.`);
        }
        else {
            console.error(`The command at ${filePath} is missing the "data" and/or "execute" property. [APP.JS]`);
        }
    }
} */

/****************************
 *  CONTEXTS HANDLER
 ***************************/
/* const contextsPath = path.join(__dirname, './interactions/contexts');
const contextFolders = fs.readdirSync(contextsPath);

for (const folder of contextFolders) {
    const contextPath = path.join(contextsPath, folder);
    const contextFiles = fs.readdirSync(contextPath).filter(file => file.endsWith('.js'));

    for (const file of contextFiles) {
        const filePath = path.join(contextPath, file);
        const context = require(filePath);

        if ('data' in context && 'execute' in context) {
            bot.contexts.set(context.data.name, context);
            console.info(`${context.data.name} has been added.`);
        } else {
            console.error(`The context menu at ${filePath} is missing a required "data" or "execute" property. [APP.JS]`);
        }
    }
} */

/****************************
 *  BOT READY EVENT
 ***************************/
bot.once(Events.ClientReady, readyBot => {
    console.info(`Ready and logged in as ${readyBot.user.tag}.`);
});

/****************************
 *  CHAT COMMAND EVENT
 ***************************/
bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.warn(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    }
    catch (e) {
        console.error(e);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: `There was an error while executing this command!`,
                flags: MessageFlags.Ephemeral
            });
        }
        else {
            await interaction.reply({
                content: `There was an error while executing this command!`,
                flags: MessageFlags.Ephemeral
            });
        }
    }
});

/****************************
 *  MSG_CONTEXT EVENT
 ***************************/
bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isMessageContextMenuCommand()) return;

    const context = interaction.client.contexts.get(interaction.commandName);

    if (!context) {
        console.warn(`This message context menu could not be found.`);
        return;
    }

    try {
        await context.execute(interaction);
    }
    catch (e) {
        console.error(e);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: `There was an error while executing this message context menu command.`,
                flags: MessageFlags.Ephemeral
            });
        } else {
            await interaction.reply({
                content: `There was an error executing this message context menu command.`,
                flags: MessageFlags.Ephemeral
            });
        }
    }
});

/****************************
 *  USR_CONTEXT EVENT
 ***************************/
bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isUserContextMenuCommand()) return;

    const context = interaction.client.contexts.get(interaction.commandName);

    if (!context) {
        console.warn(`This user context menu could not be found.`);
        return;
    }

    try {
        await context.execute(interaction);
    }
    catch (e) {
        console.error(e);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: `There was an error while executing this user context menu command.`,
                flags: MessageFlags.Ephemeral
            });
        } else {
            await interaction.reply({
                content: `There was an error executing this user context meny command.`,
                flags: MessageFlags.Ephemeral
            });
        }
    }
});

/****************************
 *  UNHANDLED REJECTION
 ***************************/
process.on('unhandledRejection', error => console.error('Unhandled promise Rejection:', error));

/****************************
 *  BOT LOGIN
 ***************************/
/* bot.login(`${token}`); */
bot.login(token);

const express = require('express');
const app = express();
const port = 10000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});