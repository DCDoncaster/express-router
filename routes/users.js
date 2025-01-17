const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')//destructures express validator to get the bits we want


// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get('/', (req,res)=>{
    res.sendStatus(200)
})
router.get('/test', (req,res)=>{
    res.send('Testing this from the router')
})
router.get('/:num', (req,res)=>{
    
    res.send(users[req.params.num -1])
})

//add a user - validated to make sure incoming data accurate
router.post('/', [check("name").not().trim().isEmpty()] ,(req,res)=>{   //validation check that it is 'not' 'empty' and trims white space
    const errors = validationResult(req)   //checks the request object for errors and assigns them to a variable of 'errors'
    if (!errors.isEmpty()){   //confirms if there is something in the etrrors
        return res.status(400).send({error: errors.array()})
    }
    users.push(req.body)
    res.send(users)
})

// delete a user
router.delete('/:num',(req,res)=>{
users.splice((req.params.num-1),1)
res.send(users)
})

// update a user
router.put('/:num', (req,res)=>{
users[req.params.num-1].name = 'Fred'
res.send(users)
})

module.exports = router