const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "bf!";



client.on("message", message => {
    if(message.content.startsWith("*mnbcall")) {
            let i = client.users.size;
      if(message.author.id !== '555377330160140288') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
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



client.login(process.env.BOT_TOKEN);
