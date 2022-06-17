const { 
  bot,
  intents } = require('discord.js-selfbot-v13');
const { inspect } = require('util');
  
const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES],
});

bot.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

bot.on('messageCreate', message => {
    let b;
    let h;
    let ow;
    
  if (message.content.toLowerCase().includes("^/!fullon")) {
    message.channel.send("ok!");
    
    setTimeout(function() {
      message.channel.send("owob");
      message.channel.send("owoh");
      message.channel.send("owo");
    }, 1000);
    
    b = setInterval(function() {
      message.channel.send("owob");
    }, 16000);
    
    h = setInterval(function() {
      message.channel.send("owoh");
    }, 16000);
    
    ow = setInterval(function() {
      message.channel.send("owo");
    }, 16000);
  };
  
  if (message.content.toLowerCase().includes("^/!fulloff")) {
    clearInterval(b);
    clearInterval(h);
    clearInterval(ow);
    
    message.channel.send("ok");
  };
  
  if (message.content.toLowerCase().includes("Beep Boop. Please DM me with only the following")) {
    clearInterval(b);
    clearInterval(h);
    clearInterval(ow);
    
    message.channel.send("<@503451211870240778> <@503451211870240778>");
    message.channel.send("stopping the interval because owo dajjal");
  };
});

bot.login('your account token'); 
