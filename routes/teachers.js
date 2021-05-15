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

module.exports = router