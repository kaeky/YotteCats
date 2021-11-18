const cumplewhite = require('./cumpleWhite')
function inicia(client, discord){
    client.on("ready", function () {
        cumplewhite.cumpleWhite(client, discord)
        //console.log(discord.role.id("795750669729923102"))
    })
}

//let job = new CronJob(cronExpr, function () {

  //  client.channels.cache.get("817554755835920421").send("Prueba kaekyyyyyyyyyyyyyyyyyyy")
    //765764692786151426 YotteCats

//});
module.exports ={ inicia }
