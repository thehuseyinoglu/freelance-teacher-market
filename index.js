const colors = require('colors')
const Student = require('./student')
const Teacher = require('./teacher')

function printBooking(booking) {
    console.log(`${colors.red(booking.student.name)} booked ${colors.blue(booking.teacher.name)} to study ${colors.bgRed.white(booking.subject)} subject at ${colors.bgRed.white(booking.date)}`)
}

function printBookingHistory(student) {
    student.bookings.forEach(printBooking)
}

function printComment(comment) {
    console.log(`${colors.red(comment.student.name)} commented ${colors.yellow(comment.text)} and gave ${colors.yellow(comment.score)} point`)
}

function printCommentHistory(teacher) {
    teacher.comments.forEach(printComment)
}

const berkay = new Student('Berkay', 22)
const dogukan = new Teacher('Dogukan')

dogukan.createJob("Math Teacher","Ozel ders",250)
console.log(`Dogukan ilan: ${dogukan.job.title},${dogukan.job.content},${dogukan.job.price}TL `)

berkay.book(dogukan, 'logaritma', '28.04.2021')
berkay.book(dogukan, 'carpanlara ayirma', '30.04.2021')
berkay.book(dogukan, 'ekspress', '29.04.2021')
berkay.book(dogukan, 'code review', '01.05.2021')

berkay.comment(dogukan, "nice lesson", 5)

printBookingHistory(berkay)
printCommentHistory(dogukan)



