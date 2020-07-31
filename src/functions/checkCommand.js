import { prefix } from '../config.json';

module.exports = (msg, command) => {
    if (msg.content.startsWith(`${prefix}${command}`)) return true;
    else return false;
}