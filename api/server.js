const express = require('express');
const server = express();

const Users = require('./mock-db/db');

server.use(express.json());


server.get('/api/users', (req, res) => {
    Users.findAll()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ message: err.message }));
});

server.use('/', (req, res) => {
    res.send(`<h1> Hello, world!</h1>`)
});

module.exports = server;