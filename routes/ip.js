const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

    let resp = `<h1>Seu ip é ${req.headers['x-forwarded-for']}</h1>`
    res.send(resp);
})

module.exports = router