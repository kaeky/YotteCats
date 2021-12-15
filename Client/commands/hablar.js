const { Command } = require('gcommands');
const ytdl = require("ytdl-core");
const googleTTS = require('google-tts-api'); // CommonJS
const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource, getVoiceConnection  } = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');
class Talk extends Command {
    constructor(client) {
        super(client, {
            name: 'hablar',
            description: 'speech to talk'
        });
    }

    async run({ client, respond, args, guild, member, interaction, message }) {
        //let queue = client.queue.get(guild.id);
        //const channel = client.channels.cache.get(member.voice.channel.id);

        let connection = await joinVoiceChannel({
            guildId: guild.id,
            channelId: member.voice.channel.id,
            adapterCreator: client.guilds.cache.get(guild.id).voiceAdapterCreator,
            selfDeaf: true,
            selfMute: false,
        });

        let player = await createAudioPlayer({
            behaviors: { noSubscriber: NoSubscriberBehavior.Play },
        });
        const subscribes = connection.subscribe(player);
        connection.subscriber = subscribes;
        connection.player = player
        var args = message.content.slice(7).trim().split(/ +/g);
        var decir = args.toString();
        decir = decir.replace(/,/g, ' ');
        // audio URL
        //console.log(connection)
        //console.log(decir)
        const url = googleTTS.getAudioUrl(decir, {
            lang: 'es',
            slow: false,
            host: 'https://translate.google.com',
        });
        const stream = await ytdl("https://www.youtube.com/watch?v=7E9-c2Z6adU", { filter : 'audioonly' });
        //connection.play(audio)
        //const stream = await play.stream("https://www.youtube.com/watch?v=7E9-c2Z6adU");

        const resource = createAudioResource(url, { inputType: stream.type, inlineVolume: true });
        connection = getVoiceConnection(guild.id);
        // console.log(connection.state.subscription.player)
        const players = connection.state.subscription.player;
        console.log(players.state)
       if(players.state.status == "idle"){
           setTimeout(function (){
               players.play(resource)
           },1700)
       }


    }
}

module.exports = Talk;
