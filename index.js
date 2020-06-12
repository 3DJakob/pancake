// var app = require('express')();
const express = require('express')
const app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

// app.use(express.static('public'))
app.use(express.static('public'))

server.listen(3000)

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  })
})
