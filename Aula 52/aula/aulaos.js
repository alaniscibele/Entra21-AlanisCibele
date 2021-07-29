const os = require("os");

// console.log(os.cpus());

// console.log(os.freemem() / 1024 /1024);

console.log(parseInt(os.uptime() / 60 / 60));
