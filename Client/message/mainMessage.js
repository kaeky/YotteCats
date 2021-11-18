const { getVoiceConnection } = require('@discordjs/voice');
const googleTTS = require('google-tts-api'); // CommonJS

const ytdl = require('ytdl-core');

const wrongMusic = require('./wrongMusic')
function mainMessage(client, prefix, att, voice) {
    client.on("message", async message => {
        if (message.content == "<@!845045095703117824>") message.channel.send("Gaeel puto manco de mrd. Mono")
        commands(message, prefix,att,voice);
        //kiraly(message, "kd")
        //chatLog(message, client);
        wrongMusic.wrongMusic(message)
    })

}
// function kiraly(message, prefix){

//         // console.log(message.member.voice.channel)
//         // console.log(message.guild.id)
//         // console.log(message.guild.voiceAdapterCreator)
//         // console.log(att.VoiceConnection)
//         // Wait until writing is finished

//         let channel = message.member.voice.channel;
//         if (channel && channel.type === 'voice') {
//             channel.join().then((connection) => {
//                 var args = message.content.slice(prefix.length + 7).trim().split(/ +/g);
//                 var decir = args.toLowerCase();
//                 // get audio URL
//                 //console.log(connection)
//                 console.log(decir)
//                 const url = googleTTS.getAudioUrl(decir, {
//                     lang: 'es',
//                     slow: false,
//                     host: 'https://translate.google.com',
//                 });

//                 //const audio = ytdl("https://www.youtube.com/watch?v=7E9-c2Z6adU", { filter : 'audioonly' });
//                 connection.play(url);
//                 //console.log(url)
//                 //console.log(message.guild)
//             });
//         }

//         else {
//             error(`User isn't on a voice channel!`);
//         }
//     }
// }
function commands (message, prefix, att, voice){
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    //console.log(args)
    if (command == "follar") {
        const attach = new att.MessageAttachment("https://cdn.discordapp.com/attachments/879590011249520690/910462163192270888/unknown.png")
        if(args.length === 0 ){
                message.channel.send(attach)
        
        
        }else{
            let user = message.mentions.users.first()
            message.channel.send(message.author.username + " se ha follado a: <@" + user.id + ">")
            message.channel.send(attach)
        }


    }
    if(command == "hablar"){
        // console.log(message.member.voice.channel)
        // console.log(message.guild.id)
        // console.log(message.guild.voiceAdapterCreator)
        // console.log(att.VoiceConnection)
        // Wait until writing is finished

        let channel = message.member.voice.channel;
        if (channel && channel.type === 'voice') {
            channel.join().then((connection) => {
                var args = message.content.slice(prefix.length + 7).trim().split(/ +/g);
                var decir = args.toString();
                decir = decir.replace(/,/g, ' ');
                // get audio URL
                //console.log(connection)
                console.log(decir)
                const url = googleTTS.getAudioUrl(decir, {
                    lang: 'es',
                    slow: false,
                    host: 'https://translate.google.com',
                });

                const audio = ytdl("https://www.youtube.com/watch?v=7E9-c2Z6adU", { filter : 'audioonly' });
                connection.play(url);
                //console.log(url)
                //console.log(message.guild)
            });
        }

        else {
            error(`User isn't on a voice channel!`);
        }
    }
    if(command == "a"){
        // console.log(message.member.voice.channel)
        // console.log(message.guild.id)
        // console.log(message.guild.voiceAdapterCreator)
        // console.log(att.VoiceConnection)

        if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `-join` para unirme a un canal.').catch(error => message.channel.send(error));
        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/Desktop/musica/audio.mp3`);
    }        
    if (command == "borrar") {
        message.channel.bulkDelete(args[0]).catch(err => {
            //message.channel.send("Error: Revisa si hay suficientes mensajes para borrar o si excediste el maximo de 100 mensajes")
            console.log(err)
        })
    }
    if (command == "beso") {
        const attach = new att.MessageAttachment("https://cdn.discordapp.com/attachments/879590011249520690/910794897727045652/Tumblr_Photos.gif")
        if(args.length === 0 ){
                message.channel.send(attach)
        
        
        }else{
            let user = message.mentions.users.first()
            message.channel.send(message.author.username + " ha besado a: <@" + user.id + ">")
            message.channel.send(attach)
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
