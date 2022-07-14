const Users = {
    findAll() {
        return Promise.resolve([{ username: "Frodo", password: "something"}, { username: "Samwise", password: "somethink" }, { username: "Merry", password: "somethings" }]);
    }
}

const Posts = {
    insert(post) {
        return findAll()
        .insert(post)
        .then(Promise.resolve(findAll()))
    }
}

module.exports = Users;