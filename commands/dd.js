const { Client, Message, MessageEmbed, MessageButton, ButtonInteraction } = require('discord.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js')

module.exports = {
    name: "dropdown",
    description: "dropdown menu",
    aliases: ["dd"],

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async(client, message, args) => {
        const buttonrow = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setStyle("LINK")
                .setURL("https://site.allchat.network/docs/reasons-for-bot-denials")
                .setLabel("More Info"),
            new MessageButton()
                .setStyle("LINK")
                .setURL("https://site.allchat.network/support")
                .setLabel("Support"),
            new MessageButton()
                .setStyle("LINK")
                .setURL("https://database-bans.what-is-cereal.xyz/file/390532/803073576910585866-3.txt")
                .setLabel("Log Details")
        )
    
    const deniedEmbed = new MessageEmbed()
        .setTitle("Access denied.")
        .setDescription("You've been denied access to use this command. This is because a block was put on your account from our database. You can contact support, read more, or get the info on your ban.")
        .setTimestamp()
        .setColor("000000")
        .setFooter("We apologize if you are recieving this in error.")

    if(message.member.user.id === "x") return message.channel.send({ embeds: [deniedEmbed], components: [buttonrow] })

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('initdd')
                    .setPlaceholder(`Select a game type!`)
                    .setDisabled(false)
                    .addOptions([
                        {
                            label: 'PVP Games',
                            value: 'pvp',
                            description: 'Games where you fight against other players!',
                            emoji: '⚔️',
                        },
                        {
                            label: 'PVE Games',
                            value: 'pve',
                            description: 'Games where you fight against AI enemies!',
                            emoji: '🐺',
                        },
                        {
                            label: 'Passive Games',
                            value: 'passive',
                            description: 'Games that don\'t involve deaths or fighting. Just chill, eh?', // Basically the limit for chars is around this line < (this is a note to myself, thanks for embarassing urself to the github viewers pepsi)
                            emoji: '☮️',
                        },
                        {
                            label: 'Strategy Games',
                            value: 'strategy',
                            description: 'Games where you try to find clues and answers!',
                            emoji: '🧠',
                        },
                        {
                            label: 'Short Games',
                            value: 'short',
                            description: 'Games that last for only a minute or two!',
                            emoji: '⏰',
                        },
                        {
                            label: 'Long Games',
                            value: 'long',
                            description: 'Games that last for an hour or more!',
                            emoji: '😴',
                        },
                        {
                            label: 'Anything!',
                            value: 'any',
                            description: 'A true challenge! Gives you any game on Hypixel!',
                            emoji: '🍉',
                        },
                    ])
            );

        const embed = new MessageEmbed()
        .setTitle(`Hypixel Randomizer`)
        .setDescription(`Hey! Here's the initial embed you asked for!`)
        .setAuthor(`I'm open source @ PepsiPlayzz/hypixel-randomizer!`, `https://cdn-icons-png.flaticon.com/512/25/25231.png`)
        .setFooter(`Some games may appear under multiple sections. If you'd like to report a bug, please use hr.bugreport.`)
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setImage('https://cdn.what-is-cereal.xyz/file/390532/hrandom.png')
        .setColor("ca00ff")


        message.channel.send({ embeds: [embed], components: [row]});

    }
}