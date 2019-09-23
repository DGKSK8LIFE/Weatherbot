const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const key = 'myopenweatherapikey';
const prefix = '<';


client.on('ready', () => {
  console.log(`${client.user.tag} is ready to give the weather report!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'weatherm') {
        if (!args.length) {
        return msg.reply('Please append a city name to `weatherm` if you want an actual report.');
        } 
        let cityName = args.join(' ');
        const embed = new RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${cityName.toUpperCase()} WEATHER`)
            .setDescription(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${key}`);
        msg.reply(embed);
    } else if(command === 'weatheri'){
        if (!args.length) {
        return msg.reply('Please append a city name to `weatheri` if you want an actual report.');
        } 
        let cityName = args.join(' ');
        const embed = new RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${cityName.toUpperCase()} WEATHER`)
            .setDescription(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&APPID=${key}`);
        msg.reply(embed);
    } else if(command === 'help') {
            const embed = new RichEmbed()
                .setColor(0xFF0000)
                .setTitle('HELP:')
                .setDescription('help: shows this message\nweatherm: shows the hourly weather of a desired city in metric units\nweatheri: shows the hourly weather of a desired city in imperial units');
            msg.reply(embed); 
    }
}








,client.login([token]));
