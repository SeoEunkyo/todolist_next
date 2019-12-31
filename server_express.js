const app = require('express')()
const server = require('http').Server(app)
const io =  require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextAPP = next({dev})

const nextHandler = nextAPP.getRequestHandler()


let port = 3000;

io.on('connect', socket => {
    socket.emit('now',{
        message:'zeit'
    })
})

nextAPP.prepare().then(() => {

    app.get('*', (req,res) =>{
        return nextHandler(req,res)
    })
    server.listen(port, (err) =>{
        if(err) throw err
        console.log(`> Read on http://localhost:${port}`)
    })


})