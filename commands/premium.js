const { Client, MessageEmbed, Message } = require('discord.js')
const { MessageActionRow, MessageSelectMenu } = require('discord.js')


module.exports = {
    name: "premium",
    description: "premium menu",
    aliases: [],

    run: async(client, message, args) => {

        const premiumembed = new MessageEmbed()
        .setTitle("Hypixel Randomizer Premium")
        .setDescription(`We don't believe in the concept of "premium bots" for this category. Ultimately, this is Discord. Anyone and everyone can access this bot whenever they want, and that's the beauty of Discord. The same applies for Hypixel - all you need is Minecraft.\n\nIn the long run, any small bot that I create could use funding. It's what helps keep the bot alive. But, making money by giving people a bot that does just barely more than the base bot doesn't seem right.\n\nYou can donate to help development - that's something that *never is, and never should feel* required - it's something that shows passion for the bot, but you can still support development by just having the bot in your server!\n\nOnce again, please don't feel pressured or bad about this! You having the bot makes our days :)\n\n-PepsiPlayzz`)
        .setFooter("Thanks for helping us achieve our mission!")
        .setAuthor(`I'm open source @ PepsiPlayzz/hypixel-randomizer!`, `https://cdn-icons-png.flaticon.com/512/25/25231.png`)
        .setTimestamp()

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('premium')
                    .setPlaceholder('Thanks for having the bot in your server!')
                    .setDisabled(true)
                    .addOptions([
                        {
                            label: '1 Month',
                            value: 'onemonth',
                            description: 'Support the bot for 1 month',
                            emoji: '1️⃣',
                        },
                        {
                            label: '3 Months',
                            value: 'threemonths',
                            description: 'Support the bot for 3 months',
                            emoji: '3️⃣',
                        },
                        {
                            label: '6 Months',
                            value: 'sixmonths',
                            description: 'Support the bot for 6 months',
                            emoji: '6️⃣',
                        },
                    ])
            );

            message.channel.send({embeds: [premiumembed], components: [row]})
    }
}