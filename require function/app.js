console.log('Starting app.js');

const fs = require('fs');
const os = require('os')
const note = require('./note.js')

// var user = os.userInfo();
// var res = note.addNote();
// console.log(res);
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${note.age} years old\n`,function (err){
//   if(err){
//     console.log('Unable to write to file');
//   }
// });

console.log('Result :', note.add(9, -2));
