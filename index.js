const Discord = require('discord.js');
// const { Mongoose } = require('mongoose');
const aegispass = require('./aegispass.json');
const memberCount = require('./member-count');
const bot = new Discord.Client({partials : ['MESSAGE', 'REACTION', 'CHANNEL','GUILD_MEMBER','USER']});
const token = 'NzMwNzU0MjIxMTEyMDMzMjgw.Xwu8_Q.x3ghjDQP-QX42buu6uRDCQS6B9k';
// const mongo = require('./mongo')

const PREFIX = '~';

var version = '0.4.8-alpha';

bot.on('ready', async() =>{
    console.log('This bot is online!');
    bot.user.setActivity("~help", {type : "LISTENING"}).catch(console.error);
    memberCount(bot)
    // await mongo().then(Mongoose => {
    //     try{
    //         console.log('Connected to mongo!')
    //     } catch(e){

    //     }
    //     finally{
    //         Mongoose.connection.close()
    //     }
    // } )
})

// bot.on('guildMemberUpdate', async(oldMember, newMember) =>{
//     const guild = bot.guilds.cache.get('515117013564260353')
//     const updateMembers = (guild) => {
//         if(oldMember.roles!=newMember.roles){
//             if(newMember.roles.cache.has("730629660517335143")){
//                 const logchannel = "730355444379549746"
//                 const channel = guild.channels.cache.get(logchannel)
//                 channel.send("&addrole" + " " + "<@" + newMember.id + ">" + " " + "730629660517335143")
//                 channel.send("$natural in 25 days send your subs will end in 5 days! to" + " " + "<@" + newMember.id + ">")
//             }
//         }
//     }
//     updateMembers(guild)
// })

bot.on('messageReactionAdd', async(reaction, user) => {
    if(user.bot) return;
        var RoleName = reaction.emoji.name;
        var role = reaction.message.guild.roles.cache.find(role => role.name === RoleName);
        var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        member.roles.add(role.id)
        // .then(member => {
        //     console.log("Added " + member.user.username + " to the " + role.name + " role.");
        // })
        .catch(err => console.error);
})

bot.on('messageReactionRemove', async(reaction, user) => {
    if(user.bot) return;
        var RoleName = reaction.emoji.name;
        var role = reaction.message.guild.roles.cache.find(role => role.name === RoleName);
        var member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        member.roles.remove(role.id)
        // .then(member => {
        //     console.log("Removed " + member.user.username + " from the " + role.name + " role.");
        // })
        .catch(err => console.error);
})

bot.on('message', message =>{
    if(message.author.bot){
        if(message.embeds){
            const embedMsg = message.embeds.find(msg => msg.title === "Server Roles");
            if(embedMsg){
                message.react('732038141141057577')
                .then(reaction => reaction.message.react('730327372208930858'))
                .then(reaction => reaction.message.react('732037612138790913'))
                .then(reaction => reaction.message.react('732038633552347176'))
                .then(reaction => reaction.message.react('730328032786513941'))
                .then(reaction => reaction.message.react('732037973071233024'))
                .catch(err => console.error);
                
            }
            const embedMsg1 = message.embeds.find(msg => msg.title === "Description React to Get Roles!");
            if(embedMsg1){
                message.react('732552695734468668')
                .catch(err => console.error);
            }
            if(message.content === '**APEX LEGENDS**'){
                message.react('738104858305101976')
                .catch(err => console.error);
            }
        }
    }
    if(message.content.startsWith(PREFIX)){
        let args = message.content.substring(PREFIX.length).split(" ");

        switch(args[0]){
            case 'commands':
                const basecommands = new Discord.MessageEmbed()
                .setTitle('MajinBot All Basic Commands')
                .addField('Bantuan', '`~help`', true)
                .addField('Invite Link', '`~invite`', true)
                .addField('Youtube AEGIS', '`~youtube`', true)
                .addField('User Info', '`~user`', true)
                message.channel.send(basecommands);
            break;
            case 'help':
                if(args[1] === 'coaching'){
                    message.channel.send('jika kamu ingin booking sesi coaching, silahkan hubungi' + ' ' + "<@" + "158130261421195264" + ">" + ' ' + 'yaa kak!')
                }
                else if(args[1] === 'aegispass'){
                    message.channel.send('jika kamu ingin berlangganan AEGIS PASS, silahkan hubungi' + ' ' + "<@" + "158130261421195264" + ">" + ' ' + 'yaa kak!')
                }
                else if(args[1] === 'webinar'){
                    message.channel.send('jika kamu ingin mendaftar webinar , silahkan hubungi' + ' ' + "<@" + "158130261421195264" + ">" + ' ' + 'yaa kak!')
                }
                else if(args[1] === 'party'){
                    message.channel.send('jika kamu sedang mencari party silahkan buka channel' + ' ' + "<#" + "610422464496795669" + ">" + ' ' + 'yaa kak!')
                }
                else if(args[1] === 'scrim'){
                    message.channel.send('jika kamu sedang mencari scrim silahkan buka channel' + ' ' + "<#" + "563277189202575371" + ">" + ' ' + 'yaa kak!')
                }
                else if(args[1] === 'teams'){
                    message.channel.send('jika kamu sedang mencari team silahkan buka channel' + ' ' + "<#" + "563268391675232256" + ">" + ' ' + 'yaa kak!')
                }
                else{
                    const helpcommands = new Discord.MessageEmbed()
                    .setTitle('MajinBot Help Commands')
                    .addField('Coaching', '`~help coaching`', true)
                    .addField('AEGIS PASS', '`~help aegispass`', true)
                    .addField('Webinar', '`~help webinar`', true)
                    .addField('Look for Party', '`~help party`', true)
                    .addField('Look for Scrim', '`~help scrim`', true)
                    .addField('Look for Teams', '`~help teams`', true)
                    message.channel.send(helpcommands);
                }
            break;
            case 'invite':
                message.channel.send('https://discord.io/Aegisgg')
            break;
            case 'youtube':
                message.channel.send('https://www.youtube.com/channel/UCrI85n5u6BDT5f1JemrIiaQ')
            break;
            case 'user':
                var is_found = false;
                var aegispassuser;
                for(var i = 0; i < aegispass.length; i++){
                    var obj = aegispass[i];
                    var aegis_id = obj["user_id"];
                    if(message.author.id === aegis_id){
                        is_found = true;
                        aegispassuser = obj;
                        break;
                    }
                }
                if(is_found && message.member.roles.cache.find(r => r.name === "AEGIS PASS Subs")){
                    const embed = new Discord.MessageEmbed()
                    .setTitle('User Information')
                    .addField('Player Name', message.author.username, true)
                    .addField('AEGIS Pass Valid Until', aegispassuser["valid_until"], true)
                    .addField('Current Server', message.guild.name, true)
                    .setColor(0x0000ff)
                    .setThumbnail('https://media.discordapp.net/attachments/682109891275522071/732195156266057868/Artboard_1.jpg?width=671&height=671')
                    .setFooter('Subscribe to AEGIS.GG Youtube!')
                    message.channel.send(embed);
                break;
                }else{
                    const embed = new Discord.MessageEmbed()
                    .setTitle('User Information')
                    .addField('Player Name', message.author.username, true)
                    .addField('Current Server', message.guild.name, true)
                    .setColor(0xFFDF00)
                    .setThumbnail('https://cdn.discordapp.com/attachments/682109891275522071/732196318432329748/Logo_AEGIS.jpeg')
                    .setFooter('Subscribe to AEGIS.GG Youtube!')
                    message.channel.send(embed);
                break;
                }
            case 'info':
                if(message.member.roles.cache.find(r => r.name === "Discord Dev")) {
                    if(args[1] === 'version'){
                        message.channel.send('Version' + ' ' + version)
                    }else{
                        message.channel.send('Invalid Args')
                    }
                }
            break;
            case 'clear':
                if(message.member.roles.cache.find(r => r.name === "Discord Dev")) {
                    if(!args[1]) return message.reply('Error please define second arg!')
                    message.channel.bulkDelete(args[1]);
                break;
                }
            break;
            case 'reacttogetgameroles':
                if(message.member.roles.cache.find(r => r.name === "Discord Dev")) {
                    const roleembed = new Discord.MessageEmbed()
                    .setTitle('Server Roles')
                    .setColor("BLUE")
                    .setDescription(`<:valorant:732038141141057577> - Valorant\n
                    <:dota2:730327372208930858> - DOTA 2\n
                    <:underlord:732037612138790913> - Dota Underlord\n
                    <:pubgm:732038633552347176> - PUBG Mobile\n
                    <:mlbb:730328032786513941> - Mobile Legends\n
                    <:aov:732037973071233024> - Arena Of Valor`)
                    message.channel.send(roleembed);
                }
            break;
            case 'reacttotext':
                if(message.member.roles.cache.find(r => r.name === "Discord Dev")) {
                    const roleembed = new Discord.MessageEmbed()
                    .setTitle('Description React to Get Roles!')
                    .setColor("RED")
                    .setDescription(`Mulai per 14 Juli, untuk menghindari bot, fitur berbicara di grup harus melakukan 2 step :\n
                    1. React dengan emoji - <:Player:732552695734468668> - untuk mendapatkan akses berbicara\n
                    2. Pilih role game yang kamu minati dengan cara, react di text channel <#732384864254427270>`)
                    message.channel.send(roleembed);
                }
            break;
            case 'newgame':
                if(message.member.roles.cache.find(r => r.name === "Discord Dev")) {
                    message.channel.send('**APEX LEGENDS**');
                }
            }
    }
    })
bot.login(token);