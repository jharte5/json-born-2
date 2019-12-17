const fs = require('fs');

const funcName = process.argv[2];
const usersARGV = process.argv[3];
const index = process.argv[4]


if (funcName === 'GET') {
    fs.readFile('./users.json', function(error, data) {
        if (error) {
            throw error;
        }

        const users = JSON.parse(data);

        if (usersARGV === 'users') {
            console.log(users);
        } else if (usersARGV === 'user') {
            console.log(users[index]);
        } else if (usersARGV === 'friends') {
            console.log(users[index].friends);
        }
    })
} 

if (funcName === 'POST') {
    fs.readFile('./users.json', function(error, data) {
        if (error) {
            throw error;
        }

        const users = JSON.parse(data);
        const addedUser = {
            "index": users.length,
            "age": process.argv[5],
            "eyeColor": process.argv[6],
            "name": process.argv[4],
            "friends": []
        }

        const newFriend = {
            "id": this.length,
            "name": process.argv[5]
        }

        if (usersARGV === 'user') {
            users.push(addedUser);
            const newUserList = JSON.stringify(users, null, 2);

            fs.writeFile('users.json', newUserList, (err) => {
                if (err) {
                    throw err;
                };
            })
        } else if (usersARGV === 'friends') {
            users[index].friends.push(newFriend);
            const newFriendList = JSON.stringify(users, null, 2);

            fs.writeFile('users.json', newFriendList, (err) => {
                if (err) {
                    throw err;
                }
            })
        }
    })
}

if (funcName === 'PUT') {
    fs.readFile('./users.json', function(error, data) {
        if (error) {
            throw error;
        }
        const users = JSON.parse(data);
        const newValue = process.argv[6];

        users[index][process.argv[5]] = newValue;
        const updateUsers = JSON.stringify(users, null, 2)

        fs.writeFile('users.json', updateUsers, (err) => {
            if(err) throw err;
        })
    })
}

if (funcName === 'DELETE') {
    fs.readFile('./users.json', function(error, data) {
        if (error) {
            throw error;
        }
        const users = JSON.parse(data);
        users.splice(index, 1);
        const deletedUser = JSON.stringify(users, null, 2)

        fs.writeFile('users.json', deletedUser, (err) => {
            if(err) throw err;
        })
    })
}