//built in modules, else we need to install it first
//OS Module (provides properties and methods to interact with operating system and server)
const os=require('os')

//info about current user
const user=os.userInfo();
console.log(user);

//method return system uptime
console.log(`the system uptime is ${os.uptime()} seconds`);

const CurrentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(CurrentOS);