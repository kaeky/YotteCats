const cumplewhite = require('./cumpleWhite')
function inicia(client, att){
    client.on("ready", function () {
        cumplewhite.cumpleWhite(client, att)
        //job.start();

    })
}
//let job = new CronJob(cronExpr, function () {

  //  client.channels.cache.get("817554755835920421").send("Prueba kaekyyyyyyyyyyyyyyyyyyy")
    //765764692786151426 YotteCats

//});
module.exports ={ inicia }
