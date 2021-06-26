const BaseDatabase = require('./base-service')
const Teacher = require('../models/teacher')

class TeacherDatabase extends BaseDatabase {
    async findByJob(title) {
        const objects = await this.load()
        objects.find(o => o.job.title == title)

        return objects
    }

    async findYoungTeachers() {
        return this.query({
            age: {
                $lt: 26
            }
        })
    }
}


module.exports = new TeacherDatabase(Teacher)
