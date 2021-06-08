const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('../config.json');
const prefix = config.PREFIX;
const messageUpdate = require('./messageUpdate/updateMessage.js')
const mainMessage = require('./message/mainMessage')
const ready = require('./ready/ready')


function start () {
    client.login(config.TOKEN).then(() => {console.log("Funcionando... ")}).catch(err =>console.log(err))
    messageUpdate.messageUpdate(client)
    mainMessage.mainMessage(client, prefix, Discord)
    ready.inicia(client, Discord)
}

module.exports = {start}
