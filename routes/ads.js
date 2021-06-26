const { adversimentService  } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const ads = await adversimentService.load()

    res.render('ads', {ads})
})

router.get('/search', async (req, res) => {
    
    const title = req.query.title
    const content = req.query.content
    const price = req.query.price
    
    const query ={}

    if(title) query.title = title
    if(content) query.content = content
    if(price) query.price = price

    const ads = await adversimentService.query(query)
    
    res.render('ads', {ads})
})

module.exports = router