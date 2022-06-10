const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: "help",
    description: "help menu",
    aliases: [],

    run: async(client, message, args) => {

        const helpembed = new MessageEmbed()
        .setTimestamp()
        .setTitle("Hypixel Randomuzer Help Menu")
        .setDescription("This bot, its creator, etc, are NOT affiliated with Hypixel or their partners in any way.\n\nHere's your help menu!")
        .setColor("RANDOM")
        .addFields(
            {name: "dropdown (dd)", value: "Displays the main dropdown feature for the bot. Start here for picking a random game.", inline: false},
            {name: "help", value: "Displays the help menu for the bot.", inline: false},
            {name: "bugreport", value: "Displays the bug report menu for the bot. Thanks for helping us out!", inline: false},
            {name: "premium", value:"MEE6, is that you?", inline: false},
            {name: "touchgrass (JOKE COMMAND)", value:"Displays the menu for every single one of you who use this bot", inline: false},
        )
        .setAuthor(`I'm open source @ PepsiPlayzz/hypixel-randomizer!`, `https://cdn-icons-png.flaticon.com/512/25/25231.png`)
        .setFooter("This menu was sent")

        message.channel.send({ embeds: [helpembed] })
    }
}