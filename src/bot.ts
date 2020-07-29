const { token, owners } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

const ping = require('./commands/ping.js');

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async (message) => {
  await ping(message);
})

client.login(token);
