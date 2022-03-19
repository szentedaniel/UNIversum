const express = require('express')
const http = require('http')
const cors = require('cors')
const dotenv = require('dotenv')
const { Server } = require('socket.io')
const { createRoom, joinRoom, leaveRoom, sendRoomsToClient, setIo, getRoomById } = require('./roomSystem')

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
const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})

// Connected clients via websocket
let allClients = new Map()

// Rooms
let rooms = new Map()

setIo(io)
// Websocket events
io.on('connection', socket => {
  console.log('Client connected', socket.id)
  allClients.set(socket.id, {
    room: null,
    username: null
  })
  console.log('Current clients connected: ', allClients.size)

  socket.on('set_username', data => {
    console.log(data.username)
    allClients.get(socket.id).username = data.username

  })

  socket.on('create_room', (roomData) => {
    createRoom(socket, rooms, roomData)
  })

  socket.on('join_room', data => {
    joinRoom(socket, rooms, allClients, data)
  })

  socket.on('leave_room', () => {
    leaveRoom(socket, rooms, allClients)
  })

  socket.on('get_rooms_req', () => {
    sendRoomsToClient(rooms)
  })

  socket.on('get_room_by_id_req', (id) => {
    getRoomById(socket, id, rooms)
  })

  socket.on('disconnecting', () => {
    leaveRoom(socket, rooms, allClients, true)
  })
})