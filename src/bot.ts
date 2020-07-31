import { request } from "http";

const { token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

const Random = require('./commands/random.js');
const Say = require('./commands/say.js');
const Delete = require('./commands/clear');
const Help = require('./commands/help');
const playMusic = require('./commands/playMusic.js');
const ping = require('./commands/ping.js');

client.once('ready', () => {
  console.log('Ready!');
  // console.log(client);
});

client.on('message', async msg => {
  await ping(msg);
  await playMusic(msg);
  await Random(msg);
  await Say(msg);
  await Delete(msg);
  await Help(msg);
});
client.login(token);
