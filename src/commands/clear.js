import { MessageEmbed } from 'discord.js';

const Validate = require('../functions/checkCommand');

module.exports = async msg => {
    if(Validate(msg, 'clearchat')){
        const messages = msg.channel.messages.fetch()
        .then(messages => {
            msg.channel.bulkDelete(messages);
            const embed = new MessageEmbed()
            .setTitle('Virei faxineiro agora')
            .setColor(0xff0000)
            .setDescription(`Tive que limpar essa merda de chat`)
            msg.channel.send(embed);
        });
    }
}