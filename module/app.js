const fs = require('fs');
const path = require('path');

const relativePath = './test';
const absolutePath = path.join(__dirname, relativePath);

console.log(process.cwd());

console.log('relative', fs.readFileSync(relativePath).toString());
console.log('absolute', fs.readFileSync(absolutePath).toString());
