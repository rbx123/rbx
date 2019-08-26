const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("615548351332745218")
setInterval(function() {
channel.send(`RBX RBX RBX RBX`);
}, 30)
})

client.login(process.env.BOT_TOKEN);