const Discord = require('discord.js');

const bot = new Discord.Client();

const token = process.env.token;

var prefix = "Cp ";

bot.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("Cp help");
});

bot.on('message', async message => { 

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
	if(message.content === "mamie"){
        message.reply("regarde t mp -ç-");
    }
	if(message.content === "xD"){
        message.reply("pk tu rigoles sale batard");
    }
	if(message.content === "Mamie"){
        message.reply("euh comment dire...");
    }
	if(message.content === "comment dire quoi ?"){
        message.reply(":innocent:");
    }
	if(message.content === "Chargeur"){
        message.reply("Mamie elle oublie son chargeur au boulot");
    }
	if(message.content.startsWith(prefix + "cat")){
        var cat = [
			"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
			"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
			"https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif"
		];
    var gif = cat[Math.floor(Math.random() * cat.length)]; 
	
	var cat_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle(':cat: Chat:')
	 .setImage(gif)
	.setFooter('CHAT CHAT CHAT CHAT')
	message.channel.send(cat_embed);
	}
	
	if(message.content.startsWith(prefix + "Yuki")){
        var Yuki = [
			"https://cdn.discordapp.com/attachments/417516189619585024/507993319767408660/Snapchat-66221107.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993515943264286/Snapchat-1883413935.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993646373535746/Snapchat-410157663.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993757182853130/Snapchat-1423020034.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507994773336883200/IMG_20180107_122344.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507995280990273549/IMG_20180416_194429.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507996560240541698/IMG_20180703_101443.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507996898221883404/IMG_20180714_192659_003.jpg"
		

		];
    var gif = Yuki[Math.floor(Math.random() * Yuki.length)]; 
	
	var Yuki_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle(':cat: Chat:')
	 .setImage(gif)
	.setFooter('CHAT CHAT CHAT CHAT')
	message.channel.send(Yuki_embed);
	}
	
	if(message.content.startsWith(prefix + "narnia")){
        var narnia = [
			"https://media.giphy.com/media/ytL3y83qPtic8/giphy.gif",
			"https://media.giphy.com/media/4PuHxplO8XuyA/giphy.gif",
			"https://media.giphy.com/media/mEuI7NjX90BNu/giphy.gif"
			
				];
    var gif = narnia[Math.floor(Math.random() * narnia.length)]; 
	
	var narnia_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('Narnia')
	 .setImage(gif)
	.setFooter("Narnia Narnia Narnia Narnia")
	message.channel.send(narnia_embed);
	}
		if(message.content.startsWith(prefix + "wtf")){
        var aleatoire = [
			"https://media.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.gif",
			"https://media.giphy.com/media/13BwjdpxACoBPO/giphy.gif",
			"https://media.giphy.com/media/ToMjGpPbMMFCWHrqk6Y/giphy.gif",
			"https://media.giphy.com/media/AIgTmKOesNSWA/giphy.gif",
			"https://media.giphy.com/media/QxZQ7dSV4j6GQ/giphy.gif",
			"https://media.giphy.com/media/IYqe9gVpujtWo/giphy.gif",
			"https://media.giphy.com/media/13nhYQqKEPQAyA/giphy.gif",
			"https://media.giphy.com/media/o8GQT5Ipi4spy/giphy.gif"
	
				];
    var gif = aleatoire[Math.floor(Math.random() * aleatoire.length)]; 
	
	var aleatoire_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('WTF')
	 .setImage(gif)
	.setFooter("WTF WTF WTF WTF WTF")
	message.channel.send(aleatoire_embed);
	}
		
    if(message.content === prefix + "help") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Voici mes catégories d'aide !`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField(":tools: Modération", "Fais `Cp mod` pour voir mes commandes de modération !")
      .addField(":tada: Fun", "Fais `Cp fun` pour voir mes commandes d'animation !")
      .setFooter("Menu d'aide - By Creep_1")
      .setTimestamp()
      message.channel.send(aide_embed);
    }

    if(message.content === prefix + "mod") {
      var mod_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes modérations !`)
      .setThumbnail(message.author.avatarURL)
      .addField("Cp kick <@user>", "Kick l'utilisateur !")
      .addField("Cp ban <@user>", "Ban l'utilisateur !")
      .addField("Cp clear nombre", "Supprime le nombre de messages indiqué")
      .addField("Cp mute <@user>", "Mute l'utilisateur mentionné")
      .addField("Cp unmute <@user>", "Unmute l'utilisateur mentionné")
      .setFooter("Commande modération - By Creep_1")
      .setTimestamp()
      message.channel.send(mod_embed);
    }

    if(message.content === prefix + "fun") {
      var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes amusantes !`)
      .setThumbnail(message.author.avatarURL)
      .addField("Bonjour","il y a plein de petit mot caché comme ça trouve les pour discuté")
      .addField("Cp stats", "Le bot vous envoie des informations sur votre profil !")
      .addField("Cp info", "Donne des indormations sur le bot et le serveur !")
	  .addField("Cp cat", "Affiche des gifs de chat")
	  .addField("Cp narnia", "Affiche des gifs de narnia")
	  .addField("Cp wtf", "Affiche des gifs wtf")
	  .addField("Cp Yuki", "Affiche des images de (attention c'est dure) Yuki")
      .setFooter("Commande Fun - By Creep_1")
      .setTimestamp()
      message.channel.send(fun_embed);
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) { 

        case "stats":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()
        .setColor("#6699FF")
        .setTitle(`Statistiques du joueurs : ${message.author.username}`)
        .addField(`ID du joueurs :id:`, msgauthor, true)
        .addField(`Date d'inscription du joueur :`, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés !")
        message.author.send(stats_embed);

        break;
        
    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici les informations sur moi et le serveur !")
        .addField(" :robot: Nom :", `${client.user.tag}`, true)
        .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
        .addField("ID :id: ", `${client.user.id}`)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salons", message.guild.channels.size)
        .setFooter("Info - Tuto")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué la commande d'info !")
    }

    if(message.content.startsWith(prefix + "kick")){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez metionner un utilisaeur")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }
    
        if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }
    
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick pas ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la perission");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour ban");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
        });
        
    }

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
        });
    }

    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        });
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute !`);
        });
    }

  bot.login(token);
 
});
