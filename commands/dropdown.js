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
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('init')
                    .setPlaceholder('What type of game do you want?')
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
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setFooter(`Some games may appear under multiple sections. If you'd like to report a bug, please use hr.bugreport.`)
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setImage('https://cdn.what-is-cereal.xyz/file/390532/hrandom.png')
        .setColor("ca00ff")


        message.channel.send({ embeds: [embed], components: [row]});

    }
}