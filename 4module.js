const path1 = require('path');

console.log(path1.sep);//The path module in Node.js abstracts this for you C:\Users\DELL\OneDrive\Documents\newnodejstu


const filepath = path1.join('/co/','subfolder', 'text1.txt')

console.log(filepath)

const bas1=path1.basename(filepath)//basename is used to get the filename from a full path.

console.log(bas1)

const absolute1 = path1.resolve(__dirname, 'con', 'subfolder', 'text1.txt')

console.log(absolute1);