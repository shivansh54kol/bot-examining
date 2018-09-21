const Discord = require('discord.js');
const client = new Discord.Client();
const talkedRecently = new Set();
const prefix = `*`


client.on("message", message => {

    client.user.setActivity(`Wolfer Making Lives!` , { type: `WATCHING`})
    client.user.setStatus('dnd')

    if (message.author.bot) return;
    
    if(message.content.toLocaleLowerCase().startsWith(`${prefix}buy`)) {
        message.channel.send(`**Wrote you a DM let's continue in there!**`).then(
            message.author.send(`Dear ${message.author.username},\nYou Requested to buy something huh? Please don't message me here\nContact any of the wolfer!`)
        )
    }

    if(message.content.toLocaleLowerCase().startsWith(`${prefix}refer`)) {
        const reChannel = message.guild.channels.find(`name`, `referrals`)
        const referC = message.guild.member(message.mentions.users.first());

        if(!referC) return message.channel.send(`**Provide a user you were referred from!**`)
        message.delete().then(
            reChannel.send( {embed : {
                color: 3447003,
                title: `Someone referred ${referC.displayName}!`,
                description: `${message.author.username} was referred by ${referC}`,
                thumbnail: { 
                    "url":`${message.author.displayAvatarURL}`,
                    "width": 6,
                    "height": 6},
                timestamp: new Date(),
                footer: {
                text: "©Wolfer Market Vouches"
                }
            }}))}

    if(message.content.toLocaleLowerCase().startsWith(`${prefix}report`)) {
        let rChannel = message.guild.channels.find(`name`, "mod-log");
        let rUser = message.guild.member(message.mentions.users.first());
        let rReason = message.content.slice(30);


        message.channel.send(`Succesfully reported ${rUser}. Thanks for helping us in making this server even better :smile:!`)
        .then(rChannel.send({embed: {
            color: 3447003,
            title: `***${rUser.displayName} has been reported by ${message.author.username}!***:rage:`,
            thumbnail: { 
                "url":`${message.author.displayAvatarURL}`,
                "width": 6,
                "height": 6},
            description: `*${rUser.displayName} you have been reported by ${message.author} because you ${rReason}*` ,
            fields: [{
                name: "Channel reported in-",
                value: `${rUser.displayName} was reported in ${message.channel.name}`
              },
              {
                name: "Why reported?",
                value: `Was reported because ${rReason}`
              }
            ],
            timestamp: new Date(),
            footer: {
              text: "©Wolfer Market Vouches"
            }
          }
        }));
    }

    if(message.content.toLocaleLowerCase().startsWith(`${prefix}warn`)) {

        let wUser = message.guild.member(message.mentions.users.first());
        if(!wUser) return message.channel.send("Can't find user!");
        let wReason = message.content.slice(28);
        let warnChannel = message.guild.channels.find(`name`, "mod-log");
  
        (message.channel.sendMessage(`**${wUser.user} was succesfully warned for ${wReason} :smiley:**`))
        .then(warnChannel.send({embed: {
            color: 3447003,
            title: `***${wUser.displayName} has been warned!***:rage:`,
            thumbnail: `${message.author.displayAvatarURL}`,
            description: `*${wUser.displayName} you have been warned because you ${wReason}*` ,
            fields: [{
                name: "Channel Warned in-",
                value: `${wUser.displayName} was kicked in ${message.channel.name}`
              },
              {
                name: "Why warned?",
                value: `Was warned because ${wReason}`
              }
            ],
            timestamp: new Date(),
            footer: {
              text: "©Smirking Knights"
            }
          }
        }));
    }

    if(message.content.toLocaleLowerCase().includes(`invite`)) {
        message.author.send(`Hey ${message.author.username},\nI hope you have  me to get the server's invite link!\nHere it is: https://discord.gg/KPBuKD`)
    }

    if(message.content.toLocaleLowerCase().startsWith(`${prefix}suggestion`)) {
        const sChannel = message.guild.channels.find(`name` , `suggestions`);
        if(!message.content.slice(11)) return message.channel.send(`**Provide a suggestion!**`)
        message.delete().then(
        message.channel.send(`**${message.author.username} Thanks for your suggestion!:heart:**`))
        sChannel.send( {embed : {
            color: 3447003,
            title: `**Suggestion from ${message.author.username}**`,
            description: `${message.content.slice(11)}`,
            thumbnail: { 
                "url":`${message.author.displayAvatarURL}`,
                "width": 6,
                "height": 6},
            timestamp: new Date(),
            footer: {
              text: "©Wolfer Market Vouches"
            }}})}

    if(message.content.toLocaleLowerCase().startsWith(`${prefix}purge`)) {
        if(!message.content.slice(7)) return message.channel.send(`**Provide number of messages to be deleted!**`)
        message.delete().then(
            message.channel.bulkDelete(`${message.content.slice(7)}`).then(
                message.channel.send(`Deleted **${message.content.slice(7)} messages from channel ${message.channel.name}**`)
            ))}});

client.login(`NDkxNDk2ODcyMzMxMTgyMDkw.DoI0YQ.xUJ_J9peKmq954NhFL456Ne2WsI`);