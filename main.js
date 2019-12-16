const fs = require('fs');

const funcName = process.argv[2];
const usersARGV = process.argv[3];
const userName = process.argv
const index = process.argv[4]


if(funcName === 'GET' && usersARGV === 'users'){
    fs.readFile('./users.json', function(error, data) {
        const users = JSON.parse(data)
        console.log(users)
    })
} 

if(funcName === 'GET' && usersARGV ==='user'){
    fs.readFile('./users.json', function(error, data) {
        const user = JSON.parse(data)
        console.log(user[index])
    })
}