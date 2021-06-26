const { teacherService, commentService, adversimentService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const teachers = await teacherService.load()

    res.render('teachers', {teachers})
})

router.post('/', async (req, res) =>{
    const teacher = await teacherService.insert(req.body)

    res.send(teacher)
})

router.delete('/:teacherId', async (req, res) => {
    teacherService.removeBy('_id',req.params.teacherId)

    res.send('ok')
})

router.get('/young-teachers', async (req,res) =>{
    const teachers = await teacherService.findYoungTeachers()

    res.render('teachers', {teachers})
})

router.get('/:teacherId', async (req, res) => {
    const teacher = await teacherService.find(req.params.teacherId)
    if(!teacher) return res.status(404).send('Cannot find teacher')
    res.render('teacher', {teacher})
})

router.post('/:teacherId/comments', async (req, res) =>{
    const {  teacherId } = req.params
    const { studentId, text, score} = req.body

   
    const comment = await commentService.comment(teacherId, studentId, text, score)
    
    res.send(comment)
})

router.patch('/:teacherId', async (req,res) =>{
    const {teacherId} = req.params
    const {name} = req.body

    await teacherService.update(teacherId, {name})
})

router.post('/:teacherId/adversiments', async (req, res) =>{
    const {  teacherId } = req.params
    const { title, content, price} = req.body

   
    const adversiment = await adversimentService.advertise(teacherId, title, content, price)
    
    res.send(adversiment)
})


module.exports = router