
const { Client, Intents } = require('discord.js');
const { date } = require('zod');
const { token } = require('./config.json');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });

function morseToText(input)
{
    switch (input)
    {
        case ".-":
            return 'a';
        case "-...":
            return 'b';
        case "-.-.":
           return 'c';
        case "-..":
            return 'd';
        case ".":
            return 'e';
        case "..-.":
            return 'f';
        case "--.":
            return 'g';
        case "....":
            return 'h';
        case "..":
            return 'i';
        case ".---":
            return 'j';
        case "-.-":
            return 'k';
        case ".-..":
            return 'l';
        case "--":
            return 'm';
        case "-.":
            return 'n';
        case "---":
            return 'o';
        case ".--.":
            return 'p';
        case "--.-":
            return 'q';
        case ".-.":
            return 'r';
        case "...":
            return 's';
        case "-":
            return 't';
        case "..-":
            return 'u';
        case "...-":
            return 'v';
        case ".--":
            return 'w';
        case "-..-":
            return 'x';
        case "-.--":
            return 'y';
        case "--..":
            return 'z';
        case ".----":
            return '1';
        case "..---":
            return '2';
        case "...--":
            return '3';
        case "....-":
            return '4';
        case ".....":
            return '5';
        case "-....":
            return '6';
        case "--...":
            return '7';
        case "---..":
            return '8';
        case "----.":
            return '9';
        case "-----":
            return '0';
	    case "/":
	        return ' ';
        default:
            return '`';
    }
}




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.once('ready', () =>
{
    const general = client.channels.cache.get('772595840107151370')
    const doc = client.users.cache.get('499614098502451234')
    //general.send("bruh");
    //doc.send("oi");
});


client.on('messageCreate', message => {
    console.log(message.author.username, ": ", message.content);
    if(message.author.bot) return;
    const general = message.channel;
    if(message.content === "ping")
    {
        general.send("pong");
        general.sendTyping();
    }
    else if(message.content === "pong")
    {
        general.send("ping");
    }
    else if(message.content.toUpperCase() === "SIMP")
    {
        general.send("hi");
    }
    else if(message.content.includes('-') || message.content.includes('.'))
    {
        let morseArr = message.content.split(' ')
        let msgActual = " ";
        for (i = 0; i < morseArr.length; i++)
        {
            msgActual += morseToText(morseArr[i]);
        }
        if(!(msgActual.substring(1).includes('`'))) message.reply(msgActual)
    }
});

client.login(token);

