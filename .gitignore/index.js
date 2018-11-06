const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("Cp");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Cp help').catch(console.error)
});

bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
}
    }
	if(message.content === "Comment ça va ?"){
        message.reply("trql trql toi même tu sais et toi petit con ?")
    }

});

bot.login(token); //a garder en version heroku
