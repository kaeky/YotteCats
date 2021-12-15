const Discord = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');
//const client = new Discord.Client();
const config = require('../config.json');
const prefix = config.PREFIX;
const { generateDependencyReport } = require('@discordjs/voice');
const { Intents } = require('discord.js');
const { GCommandsClient } = require("gcommands"),
    RSSParser = require("rss-parser");
const { AudioPlayerStatus } = require("@discordjs/voice");
const { GVoice } = require("@gcommands/voice");

const { Client } = require("discord.js")


const client = new GCommandsClient({
    loader: {
        cmdDir: __dirname + "/commands/",
    },
    language: "english",
    commands: {
        slash: 'both',
        context: false,
        prefix: "*"
    },
    intents: [["GUILDS","GUILD_MESSAGES"],
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MEMBERS
    ]

})

client.request = new RSSParser();
client.config = config;

function start () {
    console.log(generateDependencyReport());
    client
        .on("log", console.log)
        .on("debug", console.log)
    client.login(config.TOKEN).then(() => {console.log("Funcionando... ")}).catch(err =>console.log(err))
//    //ready.inicia(client, Discord)

    
}

module.exports = {start}
