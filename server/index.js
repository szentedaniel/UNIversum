const express = require('express')
const http = require('http')
const cors = require('cors')
const dotenv = require('dotenv')
const {Server} = require('socket.io')
const {createRoom, joinRoom, leaveRoom} = require('./roomSystem')

// Load config (.env)
dotenv.config()

const app = express()
// Cors to avoid socket problems
app.use(cors())
const server = http.createServer(app)

// Websocket server
const io = new Server(server, {
    cors: {
        origin: '*', //process.env.CLIENT_URL
        methods: ['GET', 'POST'],
    }
})

// Define PORT
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})

// Connected clients via websocket
let allClients = new Map()

// Rooms
let rooms = new Map()


// Websocket events
io.on('connection', socket => {
    console.log('Client connected', socket.id)
    allClients.set(socket.id, {
        room: null,
        username: null
    });
    console.log('Current clients connected: ', allClients.size)

    socket.on('set_username', data => {
        console.log(data.username)  
        allClients.get(socket.id).username = data.username
        console.log(allClients.get(socket.id))
    })

    socket.on('create_room', () => {
        createRoom(socket, rooms)
    })

    socket.on('join_room', data => {
        joinRoom(socket, rooms, allClients, data)
    })

    socket.on('leave_room', () => {
        leaveRoom(socket, rooms, allClients)
    })


    socket.on('disconnecting', () => {
        leaveRoom(socket, rooms, allClients, true)
    })
})