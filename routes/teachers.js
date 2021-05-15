const { studentDatabase, teacherDatabase } = require('../database')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const teachers = await teacherDatabase.load()

    res.render('teachers', {teachers})
})

router.post('/', async (req, res) =>{
    const teacher = await teacherDatabase.insert(req.body)

    res.send(teacher)
})

router.delete('/:teacherId', async (req, res) => {
    teacherDatabase.removeBy('id',req.params.teacherId)

    res.send('ok')
})

router.get('/:teacherId', async (req, res) => {
    const teacher = await teacherDatabase.find(req.params.teacherId)
    if(!teacher) return res.status(404).send('Cannot find teacher')
    res.render('teacher', {teacher})
})

router.post('/:teacherId/comments', async (req, res) =>{
    const {  teacherId } = req.params
    const { studentId, text, score} = req.body

    const student = await studentDatabase.find(studentId)
    const teacher = await teacherDatabase.find(teacherId)

    student.comment(teacher, text, score)

    await studentDatabase.update(student)
    await teacherDatabase.update(teacher)

    res.send('ok')
})

module.exports = router