const fs = require('fs');

const funcName = process.argv[2];
const usersARGV = process.argv[3];
const userName = process.argv
const index = process.argv[4]


if(funcName === 'GET'){
    fs.readFile('./users.json', function(error, data) {
        const users = JSON.parse(data);

        if (usersARGV === 'users') {
            console.log(users)
        } else if (usersARGV === 'user') {
            console.log(users[index])
        }
    })
} 
