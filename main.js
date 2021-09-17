const Discord = require('discord.js');
//const { Client, Intents } = require('discord.js');

//const client = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] });
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Suputamadre estoy vivo chavos');
});


client.login('ODg4NTAxNTgwMTgwMTA3Mjc1.YUTnlA.HMmpl7LKnxoF774eUS51eoStcR8');