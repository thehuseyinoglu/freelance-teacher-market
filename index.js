const { printBookingHistory, printCommentHistory } = require('./lib/print-history')
const { studentDatabase, teacherDatabase } = require('./database')

const dogukan = teacherDatabase.findBy('name', 'Dogukan')
const berkay = studentDatabase.findByName('Berkay')
const jobs = teacherDatabase.findByJob('Math Teacher')

berkay.book(dogukan, 'code review', '24.05.2021')
studentDatabase.update(berkay)

berkay.comment(dogukan, 'Nice lesson', 5)
teacherDatabase.update(dogukan)

printCommentHistory(dogukan)
printBookingHistory(berkay)

berkay.follow(dogukan)

console.log(jobs[0].name)
console.log(berkay.following[0].name)
