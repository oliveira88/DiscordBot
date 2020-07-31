// import { prefix } from '../config.json';
import { MessageEmbed } from 'discord.js';

const Validate = require('../functions/checkCommand');
const Term = require('../functions/getTerm');

const discordTTS = require('discord-tts');

module.exports = async msg => {
    if (Validate(msg, 'say')) {
        let txt = Term(msg);

        const voiceChannel = msg.member.voice.channel;
        if(!voiceChannel){
            const embed = new MessageEmbed()
            .setTitle('Seu animal')
            .setColor(0xff0000)
            .setDescription(`Entra num canal de voz aí, faz favor`)
            msg.reply(embed);
            return;
        }

        if(txt.length > 200){
            const embed = new MessageEmbed()
            .setTitle('Tá idiota?')
            .setColor(0xff0000)
            .setDescription(`Escreve bíblia não, arrombado`)
            msg.reply(embed);

            voiceChannel.join().then(connection => {
                const stream = discordTTS.getVoiceStream("Escreve bíblia nao, arrombado");
                const dispatcher = connection.play(stream);
                dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    voiceChannel.leave();
                })
            });
    
        } else {
            voiceChannel.join().then(connection => {
                const stream = discordTTS.getVoiceStream(txt);
                const dispatcher = connection.play(stream);
                dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    voiceChannel.leave();
                })
            });
    
            const embed = new MessageEmbed()
            .setTitle('Frase dita!')
            .setColor(0xff0000)
            .setDescription(`Acabei de falar "${txt}" lá no canal ${voiceChannel} kkk`)
            msg.channel.send(embed);
        }
    }

    // Not Working :c
    // if (msg.content.startsWith(`${prefix}stopTalking`)) {
    //     async connection => {
    //         dispatcher.destroy();
    //         let stream = discordTTS.getVoiceStream("Se não era pra eu falar, por quê me chamou? Filho da puta");
    //         let dispatcher = connection.play(stream);
    //         dispatcher.on("finish",()=>voiceChannel.leave())
    //     };

    //     const embed = new MessageEmbed()
    //     .setTitle('#Puto')
    //     .setColor(0xff0000)
    //     .setDescription(`Mandaram eu calar a boca`)
    //     msg.channel.send(embed);
    // }
}