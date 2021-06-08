const config = require('../../config.json');

function wrongMusic(message){
    const bot1 = config.MUSICA;
    const bot2 = config.MUSICA2;
    const mensaje = message.content;
    const music = message.content.slice(bot1.length).trim().split(/ +/g);
    const musiccommand = music.shift().toLowerCase();
    let canal = canales(message.channel.id)
    if ((mensaje.charAt(0)== bot1 || mensaje.charAt(0)== bot2)
        && (musiccommand == "play" || musiccommand == "p")
        &&  canal == true) {
        borrarChat(message)
    }


}
function canales(a){
    let canal1 = 795746561341784114;
    let canal2 = 849089239110516766;

    if (a == canal1 || a == canal2){
        return false;
    }
    else if (a != canal1 || a != canal2){
        return true;
    }

}
function borrarChat(message) {

    message.channel.send(message.author.username+ " Este no es el canal de musica idiota, Borrando...").then(message => {
        setTimeout(function () {
            message.channel.send("512 borrar 5")
        }, 5000)
    }).catch(err => console.log(err))
}

module.exports = {wrongMusic};
