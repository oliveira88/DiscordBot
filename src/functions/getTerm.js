module.exports = msg => {
    return msg.content.split(' ').slice(1).join(' ');
}