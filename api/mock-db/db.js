const Users = {
    findAll() {
        return Promise.resolve([{ username: "Frodo", password: "something"}, { username: "Samwise", password: "somethink" }, { username: "Merry", password: "somethings" }]);
    }
}

const Posts = {
    insert() {
        return Promise.resolve([{ username: "Bilbo", password: "Somthingss"}])
    }
}

//Not really sure how to build out functionality of a database yet, as in how to recieve a post request.

module.exports = Users, Posts;