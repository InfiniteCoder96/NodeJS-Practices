console.log('Starting app.js');

const fs = require('fs');
const os = require('os')
const notes = require('./note.js')
var user = os.userInfo();

// Option one
fs.appendFile('greetings.txt',`Hello ${user.username}!\n`,function (err){
  if(err){
    console.log('Unable to write to file');
  }
});
