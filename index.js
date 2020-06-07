const Discord = require("discord.js");

const client = new Discord.Client();

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

client.on('ready', async () => {

var server = client.guilds.get("712773337864077382");
var channel = server.channels.get("719307658271916085")

        console.log(`Logged in as ${client.user.username}, ready to auto bump.`);
        for (var i = 0; i < 1000000; i++) {
       channel.send('!d bump')
        await sleep(7200000)
}
 
    
    });

client.login(process.env.token)
