import { MessageEmbed } from 'discord.js';
import { prefix } from '../config.json';

const Validate = require('../functions/checkCommand');

module.exports = async msg => {
    if(Validate(msg, 'help')){
        const embed = new MessageEmbed()
        .setTitle('Commands Helper')
        .setColor(0xff0000)
        .setDescription(`**\`${prefix}clearchat\`** - Clear all the messages in \`#release-bot\` channel\n
                         **\`${prefix}say [sentence]\`** - Goes to your current voice channel and says the sentence _(MAX 200 CHARACTERS)_\n
                         **\`${prefix}play [term/link]\`** - Goes to your current voice channel and plays a song\n
                         **\`${prefix}stop\`** - Stops all the commands that streams some audio\n
                         **\`${prefix}reminder [sentence]\`** - Makes a reminder _(This isn't working based on db, so it just display your text)_\n
                         **\`${prefix}ping\`** - Displays your ping\n
                         **\`${prefix}help\`** - Sends this to your DM\n`)
        msg.author.send(embed);
    }
}