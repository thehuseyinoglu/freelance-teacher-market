const Student = require('./models/student')
const Teacher = require('./models/teacher')
const { studentDatabase, teacherDatabase } = require('./database')

const { printBookingHistory, printCommentHistory } = require('./lib/print-history')

const berkay = Student.create({ name: 'Berkay', age: 22 })
const mert = Student.create({ name: 'Mert', age: 39 })
const dogukan = Teacher.create({ name: 'Dogukan' })
const samet = Teacher.create({ name: 'Samet' })

dogukan.createJob("Math Teacher", "Ozel ders", 250)
samet.createJob("Math Teacher", "Ozel ders", 100)
teacherDatabase.save([dogukan, samet])

berkay.book(dogukan, 'logaritma', '28.04.2021')
berkay.book(dogukan, 'carpanlara ayirma', '30.04.2021')
berkay.book(dogukan, 'ekspress', '29.04.2021')
berkay.book(dogukan, 'code review', '01.05.2021')
mert.book(dogukan, 'node.js', '01.07.2021')

mert.comment(dogukan, 'good lesson', 4)

berkay.comment(dogukan, "nice lesson", 5)

studentDatabase.save([berkay, mert])
teacherDatabase.save([dogukan, samet])

const betul = Student.create({ name: 'Betul', age: 12 })

studentDatabase.insert(betul)

const students = studentDatabase.load()

students.forEach(printBookingHistory)

