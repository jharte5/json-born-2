const fs = require('fs');

const funcName = process.argv[2];
const usersARGV = process.argv[3];
const userName = process.argv


if(funcName === 'GET' && usersARGV === 'users'){
    fs.readFile('./users.json', function(error, data) {
        const users = JSON.parse(data)
        console.log(users)
    })
}