const express = require('express')
const router = express.Router()


// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]


router.get('/', (req,res)=>{
    res.sendStatus(200)
})
router.get('/test', (req,res)=>{
    res.send('Testing this from the router')
})
router.get('/:num', (req,res)=>{
    res.send(fruits[req.params.num -1])
})

module.exports = router