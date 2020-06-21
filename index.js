const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.setInterval(() => {

        try {
        const chann = client.channels.find("id", "722754196876558437");
        chann.send("!d bump");

      } catch (err) {
        return;
      }
    }, 7380000);
});

client.login(process.env.TOKEN);
