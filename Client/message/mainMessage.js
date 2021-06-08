const wrongMusic = require('./wrongMusic')
function mainMessage(client, prefix, att) {
    client.on("message", async message => {
        if (message.content == "<@!845045095703117824>") message.channel.send("Leon hpta")
        commands(message, prefix,att);
        chatLog(message, client);
        wrongMusic.wrongMusic(message)
    })
}

function commands (message, prefix, att){
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    //console.log(args)
    if (command == "follar") {
        const attach = new att.MessageAttachment("https://wetgif.com/wp-content/uploads/hentai-1.gif")
        if(args.length === 0 ){
            message.channel.send(attach)
        }else{
            let user = message.mentions.users.first()
            message.channel.send(message.author.username + " se ha follado a: <@" + user.id + ">")
            message.channel.send(attach)
        }


    }
    if (command == "borrar") {
        message.channel.bulkDelete(args[0]).catch(err => {
            message.channel.send("Error: Revisa si hay suficientes mensajes para borrar o si excediste el maximo de 100 mensajes")
        })
    }
}

function chatLog(message, client){
    if (message.channel.id == "845571109923717161") {
        client.channels.cache.get("845573401073680394").send(message.author.username + ": " + message.content)
        if (message.attachments.array()[0]) {
            client.channels.cache.get("845573401073680394").send(message.author.username + ": " + message.attachments.array()[0].url)
        }
    }
}

module.exports = {mainMessage}

//    if (command == "123") {
//      let job = new CronJob(cronExpr, function () {
//
//         console.log(Canal)
//        console.log('Mensaje mandado cada día a las 2am');
//        Canal("dsadas")

//   console.log(message.channel.id)
///  }, 'Europe/Madrid');
//job.start();
