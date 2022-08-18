const express = require("express")
const app = express()
const users = require('./routes/users')  //router for users
const fruits = require('./routes/fruits') //router for fruits
const port = 3000

app.use(express.json())
app.use('/users', users)   //sends anything with a /users to the users router
app.use('/fruits', fruits)   //sends anything with a /fruits to the fruits router


    
// Express Routes




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
