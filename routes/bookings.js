const { bookingService,  } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const bookings = await bookingService.load()

    res.render('bookings', {bookings})
})

router.get('/search', async (req, res) => {
    
    const subject = req.query.subject
    const date = req.query.date
    
    const query ={}

    if(subject) query.subject = subject
    if(date) query.date = date

    const bookings = await bookingService.query(query)
    
    res.render('bookings', {bookings})
})

module.exports = router