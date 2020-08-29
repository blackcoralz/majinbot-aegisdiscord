module.exports = (bot) => {
    const channelId = '749148224908165130'

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Member : ${guild.memberCount.toLocaleString()}`)
    }
    
    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))
    
    const guild = bot.guilds.cache.get('515117013564260353')
    updateMembers(guild)
}