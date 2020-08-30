const request = require("request-promise")
const cheerio = require('cheerio');

module.exports = (bot) => {
    const channelId = '749148224908165130'
    const channelId2 = '749256267452776488'
    const channelId3 = '749258366563647498'
    const channelId4 = '749563226462617620'
    // const channelId5 = '749568508014362684'

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId)
        const channel2 = guild.channels.cache.get(channelId2)
        const channel3 = guild.channels.cache.get(channelId3)
        const channel4 = guild.channels.cache.get(channelId4)
        // const channel5 = guild.channels.cache.get(channelId5)
        const booster = guild.members.cache.filter(m => m.roles.cache.has('735856052251263069')).size;
        const botuser = guild.members.cache.filter(m => m.user.bot).size;
        const usercount = guild.memberCount - botuser;
        const rolecount = guild.roles.cache.size;
        // let youtubechannelurl = 'http://youtube.com/channel/UCrI85n5u6BDT5f1JemrIiaQ';
        // let response = request(youtubechannelurl);
        // let $ = cheerio.load(response);
        // let subscriberCount = $('[class="yt-subscription-button-subscriber-count-branded-horizontal subscribed yt-uix-tooltip"]').attr('title');
        // channel5.setName(`Subscriber : ${subscriberCount}`)
        // console.log(response)
        // console.log(subscriberCount)
        channel.setName(`👦︱User : ${usercount.toLocaleString()}`)
        channel2.setName(`🌟︱Booster : ${booster}`)
        channel3.setName(`🤖︱Bot : ${botuser}`)
        channel4.setName(`🏢︱Roles : ${rolecount}`)
    }
        
    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))
    
    const guild = bot.guilds.cache.get('515117013564260353')
    updateMembers(guild)
}