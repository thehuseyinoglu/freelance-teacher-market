const express = require('express')
const studentsRouter = require('./routes/students')
const teachersRouter = require('./routes/teachers')
const bookingsRouter = require('./routes/bookings')
const adsRouter = require('./routes/ads')
const indexRouter = require('./routes/index')
require('./mongo-connection')

const app = express()
app.use(express.json())

app.set('view engine', 'pug')

app.use('/students', studentsRouter)
app.use('/teachers', teachersRouter)
app.use('/bookings', bookingsRouter)
app.use('/ads', adsRouter)
app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('Started listening on 3000')
})