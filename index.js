// var app = require('express')();
const { v4: uuidv4 } = require('uuid')
const express = require('express')
const app = express()
const server = require('http').Server(app)
// const server = require('http').Server()
// const http = require('http')
// const server = Server()
const io = require('socket.io')(server)
const path = require('path')

// app.use(express.static('public'))
app.use(express.static('public'))

server.listen(3000)

app.get('/', function (req, res) {
  // res.sendfile(__dirname + '/index.html')
  res.sendFile(path.join(__dirname, '/index.html'))
})

const lobbys = []

io.on('connection', function (socket) {
  socket.emit('connected', { message: 'Hello player' })
  socket.emit('lobbys', lobbys)
  // socket.on('my other event', function (data) {
  //   console.log(data)
  // })

  socket.on('createGame', function (userName) {
    console.log('Created lobby with name: ' + userName)
    const game = {
      id: uuidv4(),
      name: userName + `'s game`
    }
    lobbys.push(game)
    console.log(lobbys)

    socket.broadcast.emit('lobbys', lobbys);
    socket.emit('lobbys', lobbys)
  })
})
