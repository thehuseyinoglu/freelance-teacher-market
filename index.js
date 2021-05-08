const { printBookingHistory, printCommentHistory } = require('./lib/print-history')
const { studentDatabase, teacherDatabase } = require('./database')


async function main() {
    const dogukan = await teacherDatabase.findBy('name', 'Dogukan')
    const berkay = await studentDatabase.findBy('name', 'Berkay')
    const jobs = await teacherDatabase.findByJob('Math Teacher')

    berkay.book(dogukan, 'code review', '24.05.2021')
    
    berkay.comment(dogukan, 'Nice lesson', 5)
    
    await teacherDatabase.update(dogukan)
    await studentDatabase.update(berkay)

    printCommentHistory(dogukan)
    printBookingHistory(berkay)

    berkay.follow(dogukan)

    console.log(jobs[0].name)
}

main()





