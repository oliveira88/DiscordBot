const ytdl = require('ytdl-core');
const search = require('youtube-search');
const { prefix } = require('../config.json');

module.exports = async msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const voiceChannel = msg.member.voice.channel;

  if (msg.content.startsWith(`${prefix}play`)) {
    if (msg.channel.type !== 'text') return;

    if (!voiceChannel) {
      return msg.reply('please join a voice channel first!');
    }
    // const streamOpt = { volume: 1 };
    let musicSearchada = `${msg.content.split(' ').slice(1).join(' ')}`;
    let opts = {
      maxResults: 10,
      key: 'AIzaSyB3W8lkGpC-06X0aFdD_OQohBPILlD6jjs'
    };

    const musicToPlay = await search(musicSearchada, opts);
    voiceChannel.join().then(connection => {
      console.log(musicToPlay);
      const stream = ytdl(musicToPlay.results.find(i => i.kind == 'youtube#video').link, {
        filter: 'audioonly'
      });
      const dispatcher = connection.play(stream);

      dispatcher.on('finish', () => voiceChannel.leave());
      if (msg.content == `${prefix}list`) {
        console.log(dispatcher);
      }
    });
  }
  if (msg.content === `${prefix}stop`) {
    voiceChannel.leave();
  }
};
