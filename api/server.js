const express = require('express');
const server = express();

const Users = require('./mock-db/db');
const Posts = require('./mock-db/db');

server.use(express.json());


server.get('/api/users', (req, res) => {
    Users.findAll()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ message: err.message }));
});

server.post('/api/register', (req, res) => {
    const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({ message: "Please provide both username and password" })
        } else {
            Posts.insert()
            .then(post => {
                res.status(201).json(post)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: "Not sure what to do" })
            });
        }
});

server.use('/', (req, res) => {
    res.send(`<h1> Hello, world!</h1>`)
});

module.exports = server;