// const http=require('http');
// const serv=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.end('Hnaji welcome /')
//     }
//     else if(req.url=='/hellop'){
//         res.end('<h1>Hila Aa</h1>')
//     }
//     else{
//         res.end('karle jo kara')
//     }
// })

// serv.listen('2000');


const _=require('lodash');

const arr=[1,[2,[3,[4]]]];
const newarr=_.flattenDeep(arr);
console.log(newarr);