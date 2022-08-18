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

router.get('/:num', (req,res)=>{
    res.send(fruits[req.params.num -1])
})

//add a fuit
router.post('/',(req,res)=>{
    fruits.push(req.body)
    res.send(fruits)
})

// delete a fruit
router.delete('/:num',(req,res)=>{
fruits.splice((req.params.num-1),1)
res.send(fruits)
})

// update a fruit
router.put('/:num', (req,res)=>{
fruits[req.params.num-1].name = 'Fred'
res.send(fruits)
})
module.exports = router