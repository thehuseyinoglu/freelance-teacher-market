const Booking = require('./booking')
const Comment = require('./comment')

class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.bookings = []
        
    }

    book(teacher, subject, date) {
        const booking = new Booking(teacher, this, subject, date)

        this.bookings.push(booking)
        
        return booking
    }
    comment(teacher, text, score){
        const comment = new Comment(teacher, this, text, score)

        teacher.comments.push(comment)
        
        return comment
    }
}

module.exports = Student