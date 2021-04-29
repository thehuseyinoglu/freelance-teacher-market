const Job = require('./job')

class Teacher {
    constructor(name) {
        this.name = name
        this.comments = []
        this.job = ''
    }

    createJob(title, content, price) {
        this.job = new Job(this, title, content, price)
    }
}

module.exports = Teacher