const Job = require('./job')
const uuid = require('uuid')

class Teacher {
    constructor(id = uuid.v4(), name, comments = [], job = '', followers = []) {
        this.id = id
        this.name = name
        this.comments = comments
        this.job = job
        this.followers = followers
    }

    createJob(title, content, price) {
        this.job = new Job(this, title, content, price)
    }

    static create({ id, name, comments, job, followers }) {
        return new Teacher(id, name, comments, job, followers)
    }
}

module.exports = Teacher