const os = require('os')

const user = os.userInfo();
console.log(user);

//system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)