const Discord = require('discord.js');

//
// Create a client
//
const Client = new Discord.Client();

//
// Our current connection
//
var currentConnection;

//
// Define the ready handler
//
Client.on('ready', () => {
  console.log('Ready to comply');

});

//
// Define the message handler
//
Client.on('message', message => {

  if (message.content === 'ping') {
    message.reply('pong');
  }

  //
  // Connect to the current voice
  // channel
  //
  if (message.content === '/connect') {

    var voiceChannel = message.member.voiceChannel;

    if (voiceChannel) {
      voiceChannel.join().then((connection) => {
        currentConnection = connection;
        console.log(connection.channel.name);
        message.reply(` I'm now connected to ${connection.channel.name}`)
      });
    }
  }

  //
  // Say son of a ...
  //
  if (message.content === '/sonofa') {
    if (currentConnection ) {
      currentConnection.playFile('./sonofa.mp3');
    }
  }

  //
  // Say holy ...
  //
  if (message.content === '/holy') {
    if (currentConnection ) {
      currentConnection.playFile('./holy.mp3');
    }
  }

  //
  // Say oh no
  //
  if (message.content === '/ohno') {
    if (currentConnection ) {
      currentConnection.playFile('./ohno.mp3');
    }
  }

  //
  // Say oh ...
  //
  if (message.content === '/oh') {
    if (currentConnection ) {
      currentConnection.playFile('./oh.mp3');
    }
  }
});

//
// Define an event handler for when people
// join or leave a voice channel
//
// Client.on('voiceStateUpdate', (oldMember, newMember) => {
//   if (currentConnection ) {
//     currentConnection.playFile('./ohmygod.mp3');
//   }
// });

//
// Client Login
//
Client.login('Mjc3NjY0MDQ3NDk3ODcxMzYw.C3hGzg.JoYIyxVCTDTo34W1m-FW_MLpQMs');
