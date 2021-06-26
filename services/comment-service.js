const BaseService = require('./base-service')
const Comment = require('../models/comment')
const teacherService = require("./teacher-service")
const studentService = require("./student-service")

class CommentService extends BaseService {
    async findByStudentId(studentId) {
        return this.findBy('student',studentId)
    }

    async findByTeacherId(teacherId) {
        return this.findBy('teacher',teacherId)
    }

    async comment(teacherId, studentId, text, score){
        const student = await studentService.find(studentId)
        const teacher = await teacherService.find(teacherId)

        const comment = await this.insert({teacher, student, text, score})
        student.comments.push(comment)
        teacher.comments.push(comment)
        await student.save()
        await teacher.save()
    
        return comment
    }
}

module.exports = new CommentService(Comment)
