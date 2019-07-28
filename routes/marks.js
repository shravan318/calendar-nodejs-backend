let marks = require('express').Router();

marks.get('/', (req, res) => {
    res.send({
        type: 'marks res',
        status: "cool"
    })
})

marks.get('/api',(req,res) => {
    res.send({
        type: 'marks res api',
        status: "cool"
    })
})

module.exports = marks