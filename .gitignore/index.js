const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("Cp");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Cp help').catch(console.error)
});

bot.on('message', msg => {
    
    if(message.content === "Bonjour"){
        message.reply("Salut");
    }
	if(message.content === "Comment ça va ?"){
        message.reply("trql trql toi même tu sais et toi petit con ?");
    }
	if(message.content === "Creep_1"){
        message.reply("Il est beau lui fais gaffe");
    }
	if(message.content === "Suceur"){
        message.reply(":robot: moi jpeux pas mais toi oui :heart: ");
    }	

	if(message.content === "test"){
        message.reply("ptdr ta cru quoi toi");
    }	
	
	if(message.content === "tez"){
        message.reply("il est no.. blanc ta cru quoi c'est un vieux un cachet d'aspirine");
    }		
	
	if(message.content === "bite"){
        message.reply("Ici c'est moi qui a la plus grosse ok ");
    }

	if(message.content === "xD"){
        message.reply("pk tu rigoles sale batard");
    }

    if (msg.content === prefix + "site"){
        msg.channel.send("https://alexpgm.000webhostapp.com/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(token); //a garder en version heroku
