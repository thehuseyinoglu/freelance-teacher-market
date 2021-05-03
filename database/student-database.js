const BaseDatabase = require('./base-database')
const Student = require('../models/student')

class StudentDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load()

        return objects.find(o => o.name == name) //her bir eleaman object(o) o nun içinde arıyor
    }
}

module.exports = new StudentDatabase(Student)