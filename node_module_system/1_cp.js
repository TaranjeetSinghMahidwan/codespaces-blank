//child process is a node module used to create subproces within a script
//you can perform different tasks with your script by just using methods

const cp = require('child_process')
//cp.execSync('calc')
//cp.execSync('start brave https://www.scaler.com/topics/course/nodejs/video/973/')
console.log("output --> "+ cp.execSync('node demo.js'))