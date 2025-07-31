const eventEmitter = require('events')
const myEmitter = new eventEmitter()

myEmitter.on('greet', (name) => {
    console.log(`Good morning ${name}`)
})

myEmitter.emit('greet', 'nadeem')