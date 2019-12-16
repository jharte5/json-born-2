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
        } else if (usersARGV === 'friends') {
            console.log(users[index].friends)
        }
    })
} 

if(funcName === 'POST'){
    fs.readFile('./users.json', function(error, data) {
        const users = JSON.parse(data);
        console.log(users)
        const addedUser = {
            "index": users.length,
            "age": process.argv[5],
            "eyeColor": process.argv[6],
            "name": process.argv[4],
            "friends": []
        }
        if (usersARGV === 'user') {
            users.push(addedUser)
            const newUserList = JSON.stringify(users)
            fs.writeFileSync('users.json', newUserList)
            console.log('New user added')
        } else if (usersARGV === 'friends') {
            console.log(users[index])
        }
    })
}