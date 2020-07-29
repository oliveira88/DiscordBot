const { prefix } = require('../config.json');
const ytdl = require('ytdl-core');
module.exports = async msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const voiceChannel = msg.member.voice.channel;

  if (msg.content.startsWith(`${prefix}play`)) {
    if (msg.channel.type !== 'text') return;

    if (!voiceChannel) {
      return msg.reply('please join a voice channel first!');
    }
    // const streamOpt = { volume: 1 };
    let musicSearchada = `${msg.content.split(' ').slice(1)[0]}`;
    voiceChannel.join().then(connection => {
      const stream = ytdl(musicSearchada, { filter: 'audioonly' });
      const dispatcher = connection.play(stream);

      dispatcher.on('finish', () => voiceChannel.leave());
    });
  }
  if (msg.content === `${prefix}stop`) {
    voiceChannel.leave();
  }
};
