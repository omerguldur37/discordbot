/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */	
        
const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;
const Discord = require('discord.js');
const client = new Discord.Client();

if(!process.send) {


Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}
client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_CLIENT);
