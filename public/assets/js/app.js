const socket = io.connect('http://localhost')

console.log('initated')

socket.on('news', (data) => {
  console.log(data)
  // socket.emit('my other event', { my: 'data' });
})
