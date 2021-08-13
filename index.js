const config = require("./config.json");
const log = require("./logging.js");
const { Client, Intents, Interaction, SelectMenuInteraction, ButtonInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



client.on("messageCreate", message => {
    if (message.author.bot) return;

    if (message.content.substring(0, config.cmdkey.length) !== config.cmdkey) return;

    const args = message.content.slice(config.cmdkey.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        if (!commandFile) return;
        commandFile.run(client, message, args, config).then((success) => {
            log.logDate(`${command}: ` + success);
        }, (err) => {
            log.logDate(`${command}: ` + err);
        });
    } 
    catch (e) {
        log.logDate(e);
    }
});

const different = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
        .setCustomId('diff')
        .setPlaceholder('Or maybe a different type of game?')
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

const adifferent = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
        .setCustomId('adiff')
        .setPlaceholder('PLEASE. YOU CAN STILL CHANGE.')
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

    const rowpvp = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("LongPVPGame")
        .setLabel("Long PVP Game")
        .setStyle("DANGER"),
        new MessageButton()
        .setCustomId("ShortPVPGame")
        .setLabel("Short PVP Game")
        .setStyle("SUCCESS"),
        new MessageButton()
        .setCustomId("AnyPVP")
        .setLabel("Any PVP Game")
        .setStyle("PRIMARY")
    );

    const rowpve = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("PVEGame")
        .setLabel("Any PVE Game")
        .setStyle("PRIMARY")
    );

    const rowpassive = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("PassiveGame")
        .setLabel("Any Passive Game")
        .setStyle("PRIMARY")
    );

    const rowstrategy = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("StrategyGame")
        .setLabel("Any Strategy Game")
        .setStyle("PRIMARY")
    );

    const rowshort = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("ShortGame")
        .setLabel("Any Short Game")
        .setStyle("PRIMARY")
    );

    const rowlong = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("LongGame")
        .setLabel("Any Long Game")
        .setStyle("PRIMARY")
    );

    const rowany = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("AnyGame")
        .setLabel("if you're sure... anything.")
        .setStyle("DANGER")
    );

    // BUGS BUTTONS //

    const hypixelbugrow = new MessageActionRow().addComponents(
        new MessageButton()
        .setStyle("LINK")
        .setURL("https://hypixel.net/bugs")
        .setLabel("Report a Hypixel bug here")
    );

    const codebugrow = new MessageActionRow().addComponents(
        new MessageButton()
        .setStyle("LINK")
        .setURL("https://forms.gle/CpcQTYYsgU3gEzdd7")
        .setLabel("Report a code bug here!")
    );

    const wrongsectionbugrow = new MessageActionRow().addComponents(
        new MessageButton()
        .setStyle("LINK")
        .setURL("https://forms.gle/JJTJWojsypY3WxS9A")
        .setLabel("Report a games list bug here!")
    );

    const otherbugrow = new MessageActionRow().addComponents(
        new MessageButton()
        .setStyle("LINK")
        .setURL("https://forms.gle/qHofRSWSaAy6upSi6")
        .setLabel("Report any other bugs here!")
    );

    const PVPGameEmbed = new MessageEmbed()
        .setTitle('Hypixel Randomizer')
        .setDescription(`A PVP game, eh? I wish you the best of luck on your adventures!\n\nSimply click the button that best applies to the game you'd like to play, and get off on your adventure!`)
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter("You can always click the button again to generate a new map. You can also change the type of game by clicking the dropdown menu again!")
        .setColor("RED")
    
    const PVEGameEmbed = new MessageEmbed()
        .setTitle('Hypixel Randomizer')
        .setDescription(`A PVE game, eh? I wish you the best of luck on your adventures!\n\nSimply click the button that best applies to the game you'd like to play, and get off on your adventure!`)
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter("You can always click the button again to generate a new map. You can also change the type of game by clicking the dropdown menu again!")
        .setColor("YELLOW")

    const PassiveGameEmbed = new MessageEmbed()
        .setTitle('Hypixel Randomizer')
        .setDescription(`A passive game, eh? I wish you the best of luck on your adventures!\n\nSimply click the button that best applies to the game you'd like to play, and get off on your adventure!`)
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter("You can always click the button again to generate a new map. You can also change the type of game by clicking the dropdown menu again!")
        .setColor("AQUA")

    const StrategyGameEmbed = new MessageEmbed()
        .setTitle('Hypixel Randomizer')
        .setDescription(`A strategy game, eh? I wish you the best of luck on your adventures!\n\nSimply click the button that best applies to the game you'd like to play, and get off on your adventure!`)
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter("You can always click the button again to generate a new map. You can also change the type of game by clicking the dropdown menu again!")
        .setColor("DARK_VIVID_PINK")

    const ShortGameEmbed = new MessageEmbed()
        .setTitle('Hypixel Randomizer')
        .setDescription(`A short game, eh? Don't expect an adventure!\n\nSimply click the button that best applies to the game you'd like to play, and get off on your adventure!`)
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter("You can always click the button again to generate a new map. You can also change the type of game by clicking the dropdown menu again!")
        .setColor("ff0000")

    const LongGameEmbed = new MessageEmbed()
        .setTitle('Hypixel Randomizer')
        .setDescription(`A long game, eh? Expect an adventure!\n\nSimply click the button that best applies to the game you'd like to play, and get off on your adventure!`)
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter("You can always click the button again to generate a new map. You can also change the type of game by clicking the dropdown menu again!")
        .setColor("0e8f00")

    const AnythingEmbed = new MessageEmbed()
        .setTitle('Hypixel Randomizer')
        .setDescription(`I'm sure that was a misclick, right? No one is brave enough to play any random game on Hypixel. You don't dare! \n\nJust click the button if you're ABSOLUTELY SURE.`)
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter("You can always click the button again to generate a new map. You can also change the type of game by clicking the dropdown menu again!")
        .setColor("BLACK")

    const HypixelBugEmbed = new MessageEmbed()
        .setTitle('Hypixel Bugs shouldn\'t be reported here.')
        .setDescription(`Please click the button below to get redirected to the Hypixel Bug Report forum where you can get a Hypixel admin\'s attention on this issue.`)
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter("We cannot send bugs to Hypixel on your behalf.")
        .setColor("RED")

    const CodeBugEmbed = new MessageEmbed()
        .setTitle('If you\'ve found a bug in our code, report it here!')
        .setDescription("Code bugs can include issues such as missing ;s, incorrect syntax, or anything code related. If you've found a different type of bug, please report it using hr.bugreport with the correct option in the menu.\n\nThank you for helping us!")
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter(`Thank you for your help, mate!`)
        .setColor("GREEN")

    const WrongSectionBugEmbed = new MessageEmbed()
        .setTitle('If you\'ve found a bug in our games list, report it here!')
        .setDescription("Games list bugs are mainly just games in the wrong section, for example Mega Walls (a long game) in the short games section. These can be determined as opinions, so please don't get mad if we deny the report for that. \n\nThank you for helping us!")
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter(`Thank you for your help, mate!`)
        .setColor("GREEN")
    
    const OtherBugEmbed = new MessageEmbed()
        .setTitle('If you\'ve found any bug that\'s not listed elsewhere, report it here!')
        .setDescription("Please do not report games listed in the wrong section here. \n\nThanks for your help!")
        .setAuthor(`The developer of this bot is in no way affiliated with Hypixel, Hypixel Inc, or any of its partners.`, "https://img.icons8.com/color/452/general-warning-sign.png")
        .setThumbnail('https://pm1.narvii.com/6484/cd5f637c173e7766d7fde16145b07a0913a7d0e4_hq.jpg')
        .setFooter(`Thank you for your help, mate!`)
        .setColor("GREEN")
        


client.on("interactionCreate", async (Interaction) => {
    if(Interaction.isSelectMenu()) {
        if (Interaction.values[0] == "pvp") {
            Interaction.message.edit({ embeds: [PVPGameEmbed], components: [rowpvp, different] })
            Interaction.deferUpdate()
        }
        if (Interaction.values[0] == "pve") {
            Interaction.message.edit({ embeds: [PVEGameEmbed], components: [rowpve, different] })
            Interaction.deferUpdate()
        }
        if (Interaction.values[0] == "passive") {
            Interaction.message.edit({ embeds: [PassiveGameEmbed], components: [rowpassive, different] })
            Interaction.deferUpdate()
        }
        if (Interaction.values[0] == "strategy") {
            Interaction.message.edit({ embeds: [StrategyGameEmbed], components: [rowstrategy, different] })
            Interaction.deferUpdate()
        }
        if (Interaction.values[0] == "short") {
            Interaction.message.edit({ embeds: [ShortGameEmbed], components: [rowshort, different] })
            Interaction.deferUpdate()
        }
        if (Interaction.values[0] == "long") {
            Interaction.message.edit({ embeds: [LongGameEmbed], components: [rowlong, different] })
            Interaction.deferUpdate()
        }
        if (Interaction.values[0] == "any") {
            Interaction.message.edit({ embeds: [AnythingEmbed], components: [adifferent, rowany] })
            Interaction.deferUpdate()
        }

        // BUG REPORTS //

        if (Interaction.values[0] == "hypixelbug") {
            Interaction.message.edit({ embeds: [HypixelBugEmbed], components: [hypixelbugrow] })
            Interaction.deferUpdate()
        }

        if (Interaction.values[0] == "codebug") {
            Interaction.message.edit({ embeds: [CodeBugEmbed], components: [codebugrow] })
            Interaction.deferUpdate()
        }

        if (Interaction.values[0] == "wrongsectionbug") {
            Interaction.message.edit({ embeds: [WrongSectionBugEmbed], components: [wrongsectionbugrow] })
            Interaction.deferUpdate()
        }

        if (Interaction.values[0] == "otherbug") {
            Interaction.message.edit({ embeds: [OtherBugEmbed], components: [otherbugrow] })
            Interaction.deferUpdate()
        }
    }

    if(Interaction.isButton()) {
        if(Interaction.customId === "LongPVPGame") {
            let responses = ["[bedwars] 3s", "[bedwars] 4s", "Bedwars Dream 2s", "Bedwars Dream 4s", "MEGA Skywars", "The Pit", "[arcade] Farm Hunt", "[arcade] Bounty Hunters", "[arcade] Party Games", "[arcade] Capture the Wool", "[arcade] Dragon Wars", "[arcade] Mini Walls", "[arcade] Galaxy Wars", "[arcade] Throw Out", "[prototype] Tower Wars", "[uhc] Speed UHC", "[uhc] Solo", "[uhc] Teams of 3", "[classic] Arena Brawl", "[classic] Quakecraft", "[classic] The Walls", "[classic] VampireZ", "[classic] Paintball Warfare", "[cops and crims] Defusal", "[cops and crims] Challenge", "[cops and crims] Team Deathmatch", "[blitz] Solo", "[blitz] Teams", "[mega walls] Face Off", "[mega walls] Standard", "[mega walls] Challenge", "Smash Heros"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }
        if(Interaction.customId === "ShortPVPGame") {
            let responses = ["[murder mystery] Assassins", "[bedwars] Solos", "[bedwars] Doubles", "Skywars Solo Insane", "Skywars Solo Normal", "Skywars Teams Insane", "Skywars Teams Normal", "[duel] UHC", "[duel] UHC Deathmatch", "[duel] Skywars", "[duel] MegaWalls", "[duel] Sumo", "[duel] OP", "[duel] The Bridge", "[duel] Bow", "[duel] Classic", "[duel] NoDebuff", "[duel] Blitz", "[duel] Combo", "[duel] Bow Spleef", "[duel] UHC Doubles", "[duel] UHC Teams", "[duel] Skywars Doubles", "[duel] MegaWalls Doubles", "[duel] OP Doubles", "[duel] The Bridge Doubles", "[duel] The Bridge Teams", "[duel] The Bridge 2v2v2v2", "[duel] The Bridge 3v3v3v3", "[TNT Games] PVP Run", "[TNT Games] Wizards", "[TNT Games] TNT Run"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }
        if(Interaction.customId === "AnyPVP") {
            let responses = ["[bedwars] Solos", "[bedwars] Doubles", "[bedwars] 3s", "[bedwars] 4s", "Bedwars Dream 2s", "Bedwars Dream 4s", "MEGA Skywars", "The Pit", "[arcade] Farm Hunt", "[arcade] Bounty Hunters", "[arcade] Party Games", "[arcade] Capture the Wool", "[arcade] Dragon Wars", "[arcade] Mini Walls", "[arcade] Galaxy Wars", "[arcade] Throw Out", "[duel] UHC", "[duel] UHC Deathmatch", "[duel] Skywars", "[duel] MegaWalls", "[duel] Sumo", "[duel] OP", "[duel] The Bridge", "[duel] Bow", "[duel] Classic", "[duel] NoDebuff", "[duel] Blitz", "[duel] Combo", "[duel] Bow Spleef", "[duel] UHC Doubles", "[duel] UHC Teams", "[duel] Skywars Doubles", "[duel] MegaWalls Doubles", "[duel] OP Doubles", "[duel] The Bridge Doubles", "[duel] The Bridge Teams", "[duel] The Bridge 2v2v2v2", "[duel] The Bridge 3v3v3v3", "[prototype] Tower Wars", "[uhc] Speed UHC", "[uhc] Solo", "[uhc] Teams of 3", "[TNT Games] PVP Run", "[TNT Games] Wizards", "[classic] Arena Brawl", "[classic] Quakecraft", "[classic] The Walls", "[classic] VampireZ", "[classic] Paintball Warfare", "[cops and crims] Defusal", "[cops and crims] Challenge", "[cops and crims] Team Deathmatch", "[blitz] Solo", "[blitz] Teams", "[mega walls] Face Off", "[mega walls] Standard", "[mega walls] Challenge", "Smash Heros"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }

        // PVE //

        if(Interaction.customId === "PVEGame") {
            let responses = ["Skyblock", "[arcade] Creeper Attack", "[arcade] Zombies", "[arcade] Blocking Dead"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }

        // PASSIVE //

        if(Interaction.customId === "PassiveGame") {
            let responses = ["Skyblock", "Hypixel SMPs", "[arcade] Hole in the Wall", "[arcade] Pixel Painters", "[arcade] Hypixel Says"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }

        // STRATEGY //

        if(Interaction.customId === "StrategyGame") {
            let responses = ["[murder mystery] Classic", "[murder mystery] Double up", "[murder mystery] Infection (v2)", "[arcade] Creeper Attack", "[arcade] Hole in the Wall", "[arcade] Football", "[arcade] Capture the Wool", "[arcade] Hide and Seek Party Poopers", "[arcade] Hide and Seek Prop Hunt", "[arcade] Zombies", "[arcade] Blocking Dead", "[arcade] Hypixel Says", "[build battle] Solo", "[build battle] Teams", "[build battle] Guess the Build", "Skyblock", "UHC", "[TNT Games] Bow Spleef", "[TNT Games] TNT Run", "[TNT Games] TNT Tag"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }

        // SHORT //

        if(Interaction.customId === "ShortGame") {
            let responses = ["[murder mystery] Assassins", "[bedwars] Solos", "[bedwars] Doubles", "Skywars Solo Insane", "Skywars Solo Normal", "Skywars Teams Insane", "Skywars Teams Normal", "[duel] UHC", "[duel] UHC Deathmatch", "[duel] Skywars", "[duel] MegaWalls", "[duel] Sumo", "[duel] OP", "[duel] The Bridge", "[duel] Bow", "[duel] Classic", "[duel] NoDebuff", "[duel] Blitz", "[duel] Combo", "[duel] Bow Spleef", "[duel] UHC Doubles", "[duel] UHC Teams", "[duel] Skywars Doubles", "[duel] MegaWalls Doubles", "[duel] OP Doubles", "[duel] The Bridge Doubles", "[duel] The Bridge Teams", "[duel] The Bridge 2v2v2v2", "[duel] The Bridge 3v3v3v3", "[TNT Games] PVP Run", "[TNT Games] Wizards", "[TNT Games] TNT Run", "[arcade] Hypixel Says", "[murder mystery] Classic", "[murder mystery] Double up", "[murder mystery] Infection (v2)", "[arcade] Hide and Seek Party Poopers", "[arcade] Hide and Seek Prop Hunt"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }

        // LONG //

        if(Interaction.customId === "LongGame") {
            let responses = ["Mega Walls", "[arcade] Zombies", "[uhc] Solo", "[uhc] Teams of 3"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }

        // ANY //

        if(Interaction.customId === "AnyGame") {
            let responses = ["Skyblock", "[bedwars] Solos", "[bedwars] Doubles", "[bedwars] 3s", "[bedwars] 4s", "Bedwars Dream 2s", "Bedwars Dream 4s", "MEGA Skywars", "The Pit", "[arcade] Farm Hunt", "[arcade] Bounty Hunters", "[arcade] Party Games", "[arcade] Capture the Wool", "[arcade] Dragon Wars", "[arcade] Mini Walls", "[arcade] Galaxy Wars", "[arcade] Throw Out", "[duel] UHC", "[duel] UHC Deathmatch", "[duel] Skywars", "[duel] MegaWalls", "[duel] Sumo", "[duel] OP", "[duel] The Bridge", "[duel] Bow", "[duel] Classic", "[duel] NoDebuff", "[duel] Blitz", "[duel] Combo", "[duel] Bow Spleef", "[duel] UHC Doubles", "[duel] UHC Teams", "[duel] Skywars Doubles", "[duel] MegaWalls Doubles", "[duel] OP Doubles", "[duel] The Bridge Doubles", "[duel] The Bridge Teams", "[duel] The Bridge 2v2v2v2", "[duel] The Bridge 3v3v3v3", "[prototype] Tower Wars", "[uhc] Speed UHC", "[uhc] Solo", "[uhc] Teams of 3", "[TNT Games] PVP Run", "[TNT Games] Wizards", "[classic] Arena Brawl", "[classic] Quakecraft", "[classic] The Walls", "[classic] VampireZ", "[classic] Paintball Warfare", "[cops and crims] Defusal", "[cops and crims] Challenge", "[cops and crims] Team Deathmatch", "[blitz] Solo", "[blitz] Teams", "[mega walls] Face Off", "[mega walls] Standard", "[mega walls] Challenge", "Smash Heros", "Skyblock", "[arcade] Creeper Attack", "[arcade] Zombies", "[arcade] Blocking Dead", "[murder mystery] Classic", "[murder mystery] Double up", "[murder mystery] Infection (v2)", "[arcade] Creeper Attack", "[arcade] Hole in the Wall", "[arcade] Football", "[arcade] Capture the Wool", "[arcade] Hide and Seek Party Poopers", "[arcade] Hide and Seek Prop Hunt", "[arcade] Zombies", "[arcade] Blocking Dead", "[arcade] Hypixel Says", "[build battle] Solo", "[build battle] Teams", "[build battle] Guess the Build", "Skyblock", "UHC", "[TNT Games] Bow Spleef", "[TNT Games] TNT Run", "[TNT Games] TNT Tag", "Hypixel Housing", "Pixel Painters"]
            let response = Math.floor(Math.random() * responses.length)
            Interaction.channel.send(responses[response])
            Interaction.deferUpdate()
        }
    }
})

// announce bot start
client.on("ready", () => {
    log.logDate("Hypixel Randomizer is now online.");
});

// bot start failed
client.on("error", (err) => {
    log.logDate(`There was an error: ${err.name}: ${err.message}`);
});

// starting the bot
client.login(config.clientKey);
