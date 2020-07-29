const { prefix } = require('./config.json');

module.exports = async (client, msg) => {
    if (msg.content.startsWith(`${prefix}ping`)) {
    
        let ping = Date.now() - msg.createdTimestamp;
        msg.channel.sendMessage(`Seu ping é ${ping} ms`);
    
    }
}