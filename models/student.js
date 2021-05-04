const Booking = require('./booking')
const Comment = require('./comment')
const uuid = require('uuid')

class Student {
    constructor(id = uuid.v4(), name, age, bookings = [], following = []) {
        this.id = id
        this.name = name
        this.age = age
        this.bookings = bookings
        this.following = following
    }

    book(teacher, subject, date) {
        const booking = new Booking(teacher, this, subject, date)

        this.bookings.push(booking)
        teacher.bookings.push(booking)

        return booking
    }

    comment(teacher, text, score) {
        const comment = new Comment(teacher, this, text, score)

        teacher.comments.push(comment)

        return comment
    }

    follow(teacher) {
        teacher.followers.push(this)
        this.following.push(teacher)
    }

    static create({ id, name, age, bookings, following }) {
        return new Student(id, name, age, bookings, following)
    }

}

module.exports = Student