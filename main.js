const fs = require('fs');

const ind = process.argv[2];
const userName = process.argv

fs.readFile('./users.json', function(error, data) {
    const users = JSON.parse(data)
    console.log(users)
})