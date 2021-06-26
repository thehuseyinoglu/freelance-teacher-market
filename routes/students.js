const { studentService, bookingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const students = await studentService.load()

    res.render('students', { students })
})

router.post('/', async (req, res, next) => {
    try {
        const student = await studentService.insert(req.body)
        res.send(student)
    } catch (e) {
        next(e)
    }
})

router.delete('/:studentId', async (req, res) => {
    studentService.removeBy('_id', req.params.studentId)

    res.send('ok')
})

router.get('/:studentId', async (req, res) => {
    const student = await studentService.find(req.params.studentId)

    if (!student) return res.status(404).send('Cannot find student')
    res.render('student', { student })
})

router.post('/:studentId/bookings', async (req, res) => {
    const { studentId } = req.params
    const { teacherId, subject, date } = req.body

    const booking = await bookingService.book(teacherId, studentId, subject, date)

    res.send(booking)
})

router.patch('/:studentId', async (req, res) => {
    const { studentId } = req.params
    const { name } = req.body

    await studentService.update(studentId, { name })
})

module.exports = router