const Users = {
    findAll() {
        return Promise.resolve([{ user: "Frodo" }, { user: "Samwise" }, { user: "Merry" }]);
    }
}

module.exports = Users;