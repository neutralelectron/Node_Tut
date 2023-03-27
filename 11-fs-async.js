const {readFile,writeFile}=require('fs')

console.log('started')

readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;

    readFile('./content/second.txt','utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result;
        writeFile('./content/result-async.txt',`Here is your result: ${first}, ${second}`, {flag:'a'}, (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result);
        })
        console.log('Done with this')
    })
})
console.log('Starting New One')
