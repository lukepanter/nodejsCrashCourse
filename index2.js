// const utils = require('./utilss');
// utils.sayHello();
// console.log("hello world");

const {sayHello, calculateVat} = require('./utilss');
sayHello();
const x = calculateVat(2000,10);
console.log(x);
console.log(__filename,__dirname);

//path
const path = require('path');

console.log(path.basename(__filename)) ;
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join(__dirname,'utilss.js'));

//file system
const fs = require('fs');
// fs.writeFileSync(path.join(__dirname,'data.txt'),'Hello');
console.log(fs.readFileSync(path.join(__dirname,'data.txt'),'utf8'));

//os
const os = require('os');
console.log(os.cpus());
console.log(os.homedir());
console.log(os.uptime());

//event
const events = require('events');
const EventEmitter = events.EventEmitter;
const connect = new EventEmitter();

connect.on('online', ()=> {
    console.log('User is online');
})

connect.emit('online');
