const Discord = require('discord.js');
const aegispass = require('./aegispass.json');
const bot = new Discord.Client();

const token = 'NzMwNzU0MjIxMTEyMDMzMjgw.XwcF9Q.WchJeSQfyhYXGvCJkH4f1K4frp4';

const PREFIX = '~';

var version = '0.1.3-alpha';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity("~help");
})

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'commands':
            const basecommands = new Discord.MessageEmbed()
            .setTitle('MajinBot All Basic Commands')
            .addField('Bantuan', '~help', true)
            .addField('Invite Link', '~invite', true)
            .addField('Youtube AEGIS', '~youtube', true)
            .addField('User Info', '~user', true)
            message.channel.send(basecommands);
            break;
        case 'help':
            if(args[1] === 'coaching'){
                message.channel.send('jika kamu ingin booking sesi coaching, silahkan hubungi' + ' ' + "<@" + "158130261421195264" + ">" + ' ' + 'yaa kak!')
            }else if(args[1] === 'aegispass'){
                message.channel.send('jika kamu ingin berlangganan AEGIS PASS, silahkan hubungi' + ' ' + "<@" + "158130261421195264" + ">" + ' ' + 'yaa kak!')
            }
            else if(args[1] === 'party'){
                message.channel.send('jika kamu sedang mencari party silahkan buka channel' + ' ' + "<#" + "610422464496795669" + ">" + ' ' + 'yaa kak!')
            }
            else if(args[1] === 'scrim'){
                message.channel.send('jika kamu sedang mencari party silahkan buka channel' + ' ' + "<#" + "563277189202575371" + ">" + ' ' + 'yaa kak!')
            }
            else if(args[1] === 'teams'){
                message.channel.send('jika kamu sedang mencari party silahkan buka channel' + ' ' + "<#" + "563268391675232256" + ">" + ' ' + 'yaa kak!')
            }
            else{
                const helpcommands = new Discord.MessageEmbed()
                .setTitle('MajinBot Plugin Commands')
                .addField('Coaching', '~help coaching', true)
                .addField('AEGIS PASS', '~help aegispass', true)
                .addField('Look for Party', '~help party', true)
                .addField('Look for Scrim', '~help scrim', true)
                .addField('Look for Teams', '~help teams', true)
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
            if(message.author.id === aegispass.user_id){
                const embed = new Discord.MessageEmbed()
                .setTitle('User Information')
                .addField('Player Name', message.author.username, true)
                .addField('AEGIS Pass Valid Until', aegispass.valid_until, true)
                .addField('Version', version, true)
                .addField('Current Server', message.guild.name, true)
                .setColor(0x0000ff)
                .setThumbnail('https://media.discordapp.net/attachments/682109891275522071/730988022820241438/pudge_arcana_bg.png?width=1099&height=672')
                .setFooter('Subscribe to AEGIS.GG Youtube!')
                message.channel.send(embed);
                break;
            }
            else{
                const embed = new Discord.MessageEmbed()
                .setTitle('User Information')
                .addField('Player Name', message.author.username, true)
                .addField('Version', version, true)
                .addField('Current Server', message.guild.name, true)
                .setColor(0x0000ff)
                .setThumbnail('https://media.discordapp.net/attachments/682109891275522071/730988022820241438/pudge_arcana_bg.png?width=1099&height=672')
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
        }
    }
)

bot.login(token);