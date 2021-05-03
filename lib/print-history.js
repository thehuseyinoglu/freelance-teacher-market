const colors = require('colors')

function printBooking(booking) {
    console.log(`${colors.red(booking.student.name)} booked ${colors.blue(booking.teacher.name)} to study ${colors.bgRed.white(booking.subject)} subject at ${colors.bgRed.white(booking.date)}`)
}

function printBookingHistory(student) {
    if (student.bookings.length == 0)
        return console.log(`${colors.red(student.name)} has no booking yet`)

    student.bookings.forEach(printBooking)
}

function printComment(comment) {
    console.log(`${colors.red(comment.student.name)} commented ${colors.yellow(comment.text)} and gave ${colors.yellow(comment.score)} point`)
}

function printCommentHistory(teacher) {
    if (teacher.comments.length == 0)
        return console.log('No comments yet!')

    teacher.comments.forEach(printComment)
}

module.exports = { printBookingHistory, printCommentHistory }