import { createLobbyElement } from './components.js'
// origin = http(s)://(hostname):(port)
// The Socket.io client needs an origin
// with an http(s) protocol for the initial handshake.
// Web sockets don't run over the http(s) protocol,
// so you don't need to provide URL pathnames.
const origin = window.location.origin
const socket = io.connect(origin)

socket.on('connected', function (data) {
  console.log(data)
  // socket.emit('my other event', { my: 'data' })
})

socket.on('lobbys', function (lobbys) {
  // console.log(lobbys)
  const target = document.querySelector('#lobbys')
  target.innerHTML = ''
  for (const lobby of lobbys) {
    target.appendChild(createLobbyElement(lobby))
  }
})

const startGame = () => {
  const name = window.prompt('Enter your name.')
  if (name) {
    socket.emit('createGame', name)
  }
}
