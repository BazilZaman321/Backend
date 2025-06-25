const fs = require('fs')

const content = fs.readFileSync('./app.js', 'utf-8')
console.log(content);
