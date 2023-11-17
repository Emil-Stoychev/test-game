const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer, {});

io.on('connect', (socket) => {
    console.log('Socket connected: ', socket.id);
})

io.on('disconnect', (socket) => {
    console.log('Socket disconnect: ', socket.id);
})

app.use(express.static("public"))

httpServer.listen(3000)