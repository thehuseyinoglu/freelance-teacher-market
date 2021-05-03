const BaseDatabase = require('./base-database')
const Teacher = require('../models/teacher')

class TeacherDatabase extends BaseDatabase {
    findByTeacherName(name) {
        return this.findBy('name', name)
    }

    findByJob(title) {
        const objects = this.load()
        objects.find(o => o.job.title == title)
        return objects

    }
}

module.exports = new TeacherDatabase(Teacher)
