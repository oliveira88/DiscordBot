const { token } = require('./config.json');
const Discord = require('discord.js');

const playMusic = require('./commands/playMusic.js');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async msg => {
  await playMusic(msg);
});
client.login(token);
