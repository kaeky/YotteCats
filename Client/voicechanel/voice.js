const config = require('../../config.json');
function joinVoice(message) {

    message.channel.send(message.author.username+ " Este no es el canal de musica idiota, Borrando...").then(message => {
        setTimeout(function () {
            message.channel.send("512 borrar 5")
        }, 5000)
    }).catch(err => console.log(err))
}


module.exports = {joinVoice};

