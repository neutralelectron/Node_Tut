const {readFileSync,writeFileSync}=require('fs')


const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
console.log('started');

writeFileSync('./content/result-sync.txt',`Here is your result: ${first}, ${second}`, {flag:'a'});
console.log('done')

