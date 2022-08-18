const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')//destructures express validator to get the bits we want

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
router.post('/',[check("color").not().trim().isEmpty()],(req,res)=>{
    const errors = validationResult(req)   //checks the request object for errors and assigns them to a variable of 'errors'
    if (!errors.isEmpty()){   //confirms if there is something in the etrrors
        return res.status(400).send({error: errors.array()})
    }
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