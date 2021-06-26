const BaseService = require('./base-service')
const Booking = require('../models/booking')
const teacherService = require("./teacher-service")
const studentService = require("./student-service")

class BookingService extends BaseService {
    async findByStudentId(studentId) {
        return this.findBy('student',studentId)
    }

    async findByTeacherId(teacherId) {
        return this.findBy('teacher',teacherId)
    }

    async book(teacherId, studentId, subject, date){
        const student = await studentService.find(studentId)
        const teacher = await teacherService.find(teacherId)

        const booking = await this.insert({teacher, student, subject, date})
        student.bookings.push(booking)
        teacher.bookings.push(booking)
        await student.save()
        await teacher.save()
    
        return booking
    }
}

module.exports = new BookingService(Booking)
