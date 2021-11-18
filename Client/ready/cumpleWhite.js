const cron = require ("node-cron")
const kio = cron.schedule("0 47 2 25 5 *", ()=>{
    mensaje(client, new att.MessageAttachment("https://wetgif.com/wp-content/uploads/hentai-1.gif"))
})
const SantaFe = cron.schedule("* * * * * *", ()=>{
    mensaje(client,"Puto snta")
})
const Leon = cron.schedule("*/200 * * * * *", ()=>{
    mensaje(client,"Puto leon");
})
const aliyeck = cron.schedule("*/300 * * * * *", ()=>{
    mensaje(client,new att.MessageAttachment("https://cdn.discordapp.com/attachments/846647242618437642/846661231435972638/Tarjeta_de_Feliz_cumpleanos_con_Globos_Aerostaticos.png"));
})
const kuchi = cron.schedule("*/400 * * * * *", ()=>{
    mensaje(client,new att.MessageAttachment("https://cdn.discordapp.com/attachments/846647242618437642/846649326419050496/Tarjeta_de_Cumpleanos_con_Lineas_Coloridas..png"))
})
const xlforge = cron.schedule("*/500 * * * * *", ()=>{
    mensaje(client,"Puto xlforge");
})
function cumpleWhite(client, att){
    cron.schedule("0 0 6 * * *", ()=>{
        mensaje(client, )
    })
}
function mensaje (client, cumple){
    client.channels.cache.get("817554755835920421").send(cumple)
}
module.exports ={cumpleWhite}
