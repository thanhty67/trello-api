import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8080

app.get('/', function (req, res){
    res.send('<h3> Hello world</h1>')
})

app.listen(port, hostname, () => {
    console.log(`Mike is runing on ${hostname}:${port}`)
})