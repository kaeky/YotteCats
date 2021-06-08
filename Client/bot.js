const Discord = require("discord.js");
const aws = require('aws-sdk');

let s3 = new aws.S3({
    secretAccessKey: process.env.TOKEN,

}, console.log("dsadad"+process.env.TOKEN));

const client = new Discord.Client();
const config = require('../config.json');
const prefix = config.PREFIX;
const messageUpdate = require('./messageUpdate/updateMessage.js')
const mainMessage = require('./message/mainMessage')
const ready = require('./ready/ready')


function start () {
    console.log(s3.config.secretAccessKey)
    client.login(s3.config.accessKeyId).then(() => {console.log("Funcionando... ")}).catch(err =>console.log(err))
    messageUpdate.messageUpdate(client)
    mainMessage.mainMessage(client, prefix, Discord)
    ready.inicia(client, Discord)
}

module.exports = {start}
