import { MessageEmbed } from 'discord.js';

const Validate = require('../functions/checkCommand');
const Term = require('../functions/getTerm');

module.exports = async msg => {
    if (Validate(msg, 'reminder')) {
        let reminder = msg.content.split(' ').slice(1).join(' ');
        const embed = new MessageEmbed()
        .setTitle('Important Reminder')
        .setColor(0xff0000)
        .setDescription(reminder)
        .setAuthor(msg.author.username, msg.author.avatarURL);
        msg.channel.send(embed);
    }
}