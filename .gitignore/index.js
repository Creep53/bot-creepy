const Discord = require('./discord.js/');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("Cp ");

bot.on('ready', function () {
   console.log(`Logged in as ${bot.user.tag}!`)
    bot.user.setActivity('Cp help |Je suis encore en dev normale que bcp de commande marche mal :sweat:').catch(console.error)
});

bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
   	
    if(message.content === prefix + "help") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Voici mes catégories d'aide !`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField(":tada: Fun", "Fais `Cp fun` pour voir mes commandes d'animation !")
      .setFooter("Menu d'aide - By Creep_1")
      .setTimestamp()
      console.log("Une personne a utilise")
      message.channel.send(aide_embed);

    }
       
    

});

bot.login(token); //a garder en version heroku
