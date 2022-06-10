const { Client, Message, MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: "bugreport",
    description: "report a bug",
    aliases: [],

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    run: async(client, message, args) => {

            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId('bugmenu')
                        .setPlaceholder('What type of bug are you dealing with?')
                        .setDisabled(false)
                        .addOptions([
                            {
                                label: 'Hypixel Bug',
                                value: 'hypixelbug',
                                description: 'Report a Hypixel game bug',
                                emoji: '🐛',
                            },
                            {
                                label: 'Code Bug',
                                value: 'codebug',
                                description: 'Report a Randomizer code bug',
                                emoji: '🐛',
                            },
                            {
                                label: 'Incorrect Game Section',
                                value: 'wrongsectionbug',
                                description: 'Report a game in the wrong section',
                                emoji: '🐛',
                            },
                            {
                                label: 'Other',
                                value: 'otherbug',
                                description: 'Report any other bugs here!',
                                emoji: '🐛',
                            },
                        ])
                );



        const bugembed = new MessageEmbed()
        .setTitle("Uh oh! There's a bug! Run!")
        .setAuthor(`I'm open source @ PepsiPlayzz/hypixel-randomizer!`, `https://cdn-icons-png.flaticon.com/512/25/25231.png`)
        .setDescription("As a general note, we are NOT affiliated with Hypixel in any way shape or form. If you've found a Hypixel bug, please use the button below to report it to the Hypixel Administration Team, as we can't do anything about that. \n\nIf you've found a bug in our bot, feel free to click the button below that is most relevant to your issue and we'll get you going!\n\nThanks for your help keeping the bot--- actually working!\n")
        .setFooter("Bugs can be reported for any reason, but must be able to be reproduced atleast 80% of the time. Thank you for your understanding!")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setColor("RED")
        .setImage("https://cdn.what-is-cereal.xyz/file/390532/hrandombugs.png")

        message.channel.send({ embeds: [bugembed], components: [row] })
    }
}