function messageUpdate (client)
{
    client.on("messageUpdate",(oldmsg, newmsg)=>{
        logYotteEdits(oldmsg,newmsg, client);
    })
}

function logYotteEdits(oldmsg, newmsg, client ){
    if(oldmsg.channel.id == "845571109923717161"){
        if(client.user.id) client.channels.cache.get("845573401073680394").send(newmsg.author.username +": Mensaje Antiguo: " + oldmsg.content+ " Mensaje Nuevo: " + newmsg.content )
    }
}
module.exports = {messageUpdate}
