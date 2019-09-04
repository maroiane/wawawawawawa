const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
client.on('messageCreate', async(message) => {
    let prefix = '*';
    let args = message.cleanContent.split(' ');
    if (args[0] == `${prefix}roles`) {
      let space = '                         ';
      let roles = message.guild.roles.map((r) => r).sort((a, b) => b.position - a.position);
      let rr = roles.map((r) => `${r.name + space.substring(r.name.length) + message.guild.members.filter((m) => m.roles.includes(r.id)).length} members`).join('\n');
      await message.channel.createMessage(`\`\`\`${rr}\`\`\``);
    }
  });
  client.on("message", message => {
    if(message.content.startsWith("*mnbcall")) {
            let i = client.users.size;
      if(message.author.id !== "555377330160140288") return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
      var args = message.content.split(' ').slice(1).join(' ');
      if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
      setTimeout(() => {
        message.channel.send(`تم الارسال لـ ${i} شخص`)
      }, client.users.size * 500);
      client.users.forEach(s => {
        s.send(args).catch(e => i--);
      });
    }
  });
  client.on('message', message => {
    if (message.content === ("*bot")) {
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
 .setColor("#8650a7")
 .addField("** ✅ Servers: **" , client.guilds.size)
 .addField("** ✅ Users: **" , client.users.size)
 .addField("** ✅ Channels: **" , client.channels.size)
   .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
   .setTimestamp()
 message.channel.sendEmbed(embed);
   }
});
client.on("message", message => {
    let men = message.mentions.users.first();
    if(message.content.startsWith( "*vkick")) {
      try {
      if(!men) {
        message.channel.send("**الرجاء اختيار شخص لطرده !**");
        return;
      }
      if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
      if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
      if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
         if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")
  
      message.guild.createChannel("AgentX VKick", "voice").then(c => {
        message.guild.member(men).setVoiceChannel(c.id)
      setTimeout(() => {
        c.delete()
      }, 100)
      });
      message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
  } catch (e) {
    message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
  }
    }
  });
  client.on('message', message => {

    if (message.content === "*count") {

    let embed = new Discord.RichEmbed()

.addField('**Count**: ' , message.guild.memberCount)
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});
client.on('message', message => {
    if(message.content.startsWith(`*support`)){
        if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
        var embed = new Discord.RichEmbed()
        .setTitle("click here")
        .setURL('https://discord.gg/MN5tHu')
        .setTimestamp()
        .setColor("RANDOM")
        message.channel.send({embed})
    }
});


client.on('ready', () => {


    console.log('bot is ready');
    client.user.setGame(` |*help|*invite`,"https://www.twitch.tv/mixo")
    
    
    
    
    
    
      console.log('-1--2--3---4--');
      console.log('-Bot Is Online-')
      console.log('-1--2---3---4--')
      console.log(`ON ${client.guilds.size} Servers `);
        console.log(`---------------`);
      console.log(`Logged in as ${client.user.tag}!`);
       console.log(`Logged in as * [ " ${client.user.username} " ]`);
      console.log(`Users! [ " ${client.users.size} " ]`);
      console.log(`channels! [ " ${client.channels.size} " ]`);
      console.log(`--بسم الله و الله اكبر--`);
    });

    client.on('message', message => {
        if (message.content.startsWith("*avatar")) {
      
            var mentionned = message.mentions.users.first();
        var king66s;
          if(mentionned){
              var king66s = mentionned;
          } else {
              var king66s = message.author;
              
          }
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
              .setAuthor(message.author.username, message.author.avatarURL)
            .setImage(`${king66s.avatarURL}`)
          message.channel.sendEmbed(embed);
      
        }
      });
      client.on("message", message => {    
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === "*ser-av"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`in ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor('RANDOM')
  .setImage(message.guild.iconURL)
  .setFooter(message.guild.name)

 message.channel.send({embed});
    }
});

client.on("message", message => {
    var prefix = "-";
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#f0000") 
      .setDescription(`
prefix = "*"

*
=>[Admin Commands]=>


=> *ban <mention > => ban member from server**

=> *clear => clear chat  

=> *vkick => كيك لعضو من روم صوتي 

 => *bc <message> => message all members in server
 
 => *hidechanel => to hidechannel
**---------------------------------------------------------------**
=>[General Commands]=>

=> *member => معلومات الاعضاء

=> *ser-av => صورة السيرفر 

=> *avatar => صورة حسابك

=> *credits => رصيدك و اعطاء رصيد 

=| *daily => جمع رصيد كل 24ساعة 

=> *ping =>البينق الخاص بك

=> *bot => معلوماة البوت 

      `)
      .setFooter('❤Bot devlopped By Mixo❤ ')
   message.channel.sendEmbed(embed)
    
   }
   }); 
   var moment = require('moment');

   let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
   client.on("message", message => {
    
     if (message.author.bot) return;
     if(!message.channel.guild)return;
     if (!profile[message.author.id]) profile[message.author.id] = {
       tite: `${message.author}`,
       rep: 1,
       reps: 'NOT YET',
       lastDaily:'Not Collected',
       level: 1,
       points: 1,
       credits: 150,
     };
    
    
   fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
   if (err) console.error(err);
   })
   }); //code By LMERYOUL
    
   client.on('message', message => {
    
       if(message.content.startsWith('*rep')) {
         if(!message.channel.guild) return;
                       moment.locale('en');
                     var getvalueof = message.mentions.users.first()
                       if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                          if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
       if(profile[message.author.id].reps != moment().format('L')) {
               profile[message.author.id].reps = moment().format('L');
               profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
            message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
           } else {
            message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
           }
          }
          fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
   if (err) console.error(err);
   })
   });
    //code By LMERYOUL
   client.on("message", (message) => {
     let men = message.mentions.users.first()
    
     if (message.author.bot) return;
       if (message.author.id === client.user.id) return;
       if(!message.channel.guild) return;
   if (message.content.startsWith('*credit')) {
     if(men) {
       if (!profile[men.id]) profile[men.id] = {
       lastDaily:'Not Collected',
       credits: 1,
     };//code By LMERYOUL
     }
     if(men) {
   message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
   } else {
     message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
   }
   }//code By LMERYOUL
    
   if(message.content.startsWith("*daily")) {
     if(profile[message.author.id].lastDaily != moment().format('day')) {
       profile[message.author.id].lastDaily = moment().format('day')
       profile[message.author.id].credits += 200
        message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
   } else {
       message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
   }
     }
   
    
    let cont = message.content.slice().split(" ");
   let args = cont.slice(1);
   let sender = message.author
   if(message.content.startsWith('*credits ')) {
             if (!args[0]) {
               message.channel.send(`**Usage: *trans amount @someone**`);
            return;
              }
           // We should also make sure that args[0] is a number
           if (isNaN(args[0])) {
               message.channel.send(`**Usage: *rans amount @someone**`);
               return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
                }
               let defineduser = '';
               let firstMentioned = message.mentions.users.first();
               defineduser = (firstMentioned)
               if (!defineduser) return message.channel.send(`**Usage: *trans amount @someone**`);
               var mentionned = message.mentions.users.first();
   if (!profile[sender.id]) profile[sender.id] = {}
   if (!profile[sender.id].credits) profile[sender.id].credits = 200;
   fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
   if (err) console.error(err);
   })
         var mando = message.mentions.users.id;
         if  (!profile[defineduser.id]) profile[defineduser.id] = {}
         if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
         profile[defineduser.id].credits += (+args[0]);
         profile[sender.id].credits += (-args[0]);
         let mariam = message.author.username
   message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
   }
    
         });//code By LMERYOUL
         client.on('message', message => {
            if(message.content.startsWith(`*invite`)){
                if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
                var embed = new Discord.RichEmbed()
                .setTitle("❤click here❤")
                .setURL(' https://discordapp.com/oauth2/authorize?client_id=618577845911814145&permissions=8&scope=bot')
                .setTimestamp()
                .setColor("RANDOM")
                message.channel.send({embed})
            }
        });
        client.on('message', message => {
          if(!message.channel.guild) return;
  if (message.content.startsWith('*ping')) {
      if(!message.channel.guild) return;
      var msg = `${Date.now() - message.createdTimestamp}`
      var api = `${Math.round(client.ping)}`
      if (message.author.bot) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .addField('**Time Taken:**',msg + " ms :signal_strength: ")
  .addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
  }
});
client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content ==="*member") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
💚 online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
❤  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
💛  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
💠   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:robot:  bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
      client.on("message", (message) => {
        if (message.content.startsWith("*ban")) {
          if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning:ليست لديك صلاحية ');
            var member= message.mentions.members.first();
             if (message.mentions.users.size < 1) return message.reply("**?المرجوا اختيار الشخص الذي تريد تبنيده **");
            member.ban().then((member) => {
                message.channel.send(member.displayName + " bye :wave: ");
            }).catch(() => {
                message.channel.send(":interrobang: Error 404 -_-");
                //يجب وضع رول البوت الفوق
            });
        }
    });
    
client.login(process.env.BOT_TOKEN);
