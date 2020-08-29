module.exports = (bot) => {
    const channelId = '749148224908165130'
    const channelId2 = '749256267452776488'
    const channelId3 = '749258366563647498'

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId)
        const channel2 = guild.channels.cache.get(channelId2)
        const channel3 = guild.channels.cache.get(channelId3)
        const booster = guild.members.cache.filter(m => m.roles.cache.has('735856052251263069')).size;
        const botuser = guild.members.cache.filter(m => m.user.bot).size;
        channel.setName(`📊︱Member : ${guild.memberCount.toLocaleString()}`)
        channel2.setName(`🌟︱Booster : ${booster}`)
        channel3.setName(`🤖︱Bot : ${botuser}`)
    }
    
    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))
    
    const guild = bot.guilds.cache.get('515117013564260353')
    updateMembers(guild)
}