const Booking = require('./booking')
const Comment = require('./comment')
const uuid = require('uuid')

class Student {
    constructor(id = uuid.v4(), name, age, bookings = [], following = [], comments = []) {
        this.id = id
        this.name = name
        this.age = age
        this.bookings = bookings
        this.following = following
        this.comments = comments
    }

    book(teacher, subject, date) {
        const booking = new Booking(teacher, this, subject, date)

        this.bookings.push(booking)
        teacher.bookings.push(booking)

        return booking
    }

    comment(teacher, text, score) {
        const comment = new Comment(undefined, teacher, this, text, score)

        this.comments.push(comment)
        teacher.comments.push(comment)

        return comment
    }

    follow(teacher) {
        teacher.followers.push(this)
        this.following.push(teacher)
    }

    static create({ id, name, age, bookings, following, comments }) {
        return new Student(id, name, age, bookings, following, comments)
    }

}

module.exports = Student