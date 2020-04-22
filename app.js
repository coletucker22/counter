const express = require('express')
const app = express()
const port = 3000

var counter = 0

app.post ('/increment', function (req, res) {
    counter = counter + 1
    res.send(`${counter}`)
    console.log(counter)
})

app.post ('/decrement', function (req, res) {
    counter = counter - 1
    res.send(`${counter}`)
    console.log(counter)
})

app.get ('/value', function (req, res) {
    res.send(`${counter}`)
    console.log(counter)
})

app.listen (3000, function () {
    console.log('Server is running.')
})
