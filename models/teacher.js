const Job = require('./job')
const uuid = require('uuid')

class Teacher {
    constructor(id = uuid.v4(), name, comments = [], job = '', followers = [], bookings = []) {
        this.id = id
        this.name = name
        this.comments = comments
        this.job = job
        this.followers = followers
        this.bookings = bookings
    }

    createJob(title, content, price) {
        this.job = new Job(this, title, content, price)
    }

    static create({ id, name, comments, job, followers, bookings}) {
        return new Teacher(id, name, comments, job, followers, bookings)
    }
}

module.exports = Teacher