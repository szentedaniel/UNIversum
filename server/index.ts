import express from 'express';
import http from "http";
import { Server } from "socket.io";
import { sendGameStateByCode, setGameIo } from './GameSystem/GameSystem';
const cors = require('cors')
const dotenv = require('dotenv')
import { createRoom, joinRoom, leaveRoom, sendRoomsToClient, setIo, getRoomById } from './roomSystem'
import { ClientData, JoinRoomData, RoomData } from './types/RoomSystemTypes';

// Load config (.env)
dotenv.config()

const app: express.Application = express()
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
const PORT: number = Number(process.env.PORT) || 5000

server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})

// Connected clients via websocket
let allClients = new Map<string, ClientData>()

// Rooms
let rooms = new Map<string, RoomData>()

setIo(io)
setGameIo(io)
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
    allClients.get(socket.id)!.username = data.username

  })

  socket.on('create_room', (roomData: RoomData) => {
    createRoom(socket, rooms, roomData)
  })

  socket.on('join_room', (data: JoinRoomData) => {
    joinRoom(socket, rooms, allClients, data)
  })

  socket.on('leave_room', () => {
    leaveRoom(socket, rooms, allClients)
  })

  socket.on('get_rooms_req', () => {
    sendRoomsToClient(rooms)
  })

  socket.on('get_room_by_id_req', (id: string) => {
    getRoomById(socket, id, rooms)
  })

  socket.on('start_game_req', (id: string) => {
    socket.to(id).emit('start_game_res')
  })

  socket.on('get_game_data_by_code_req', (id: string) => {
    sendGameStateByCode(socket, id, rooms)
  })

  socket.on('roll_req', (rolls: { [key: string]: number }) => {
    const { roll1, roll2 } = rolls
    if (allClients.has(socket.id)) {
      const room = allClients.get(socket.id)!.room!
      socket.to(room).emit('roll_res', { roll1: roll1, roll2: roll2 })
    }
  })

  socket.on('step_on_field_controller_req', () => {
    if (allClients.has(socket.id)) {
      const room = allClients.get(socket.id)!.room!
      socket.to(room).emit('step_on_field_controller_res')
    }
  })

  socket.on('buy_sajat_req', (data) => {
    console.log(data);

    if (allClients.has(socket.id)) {
      const room = allClients.get(socket.id)!.room!
      socket.to(room).emit('buy_sajat_res', data)
    }
  })

  socket.on('buy_nem_sajat_req', (data) => {
    console.log(data);

    if (allClients.has(socket.id)) {
      const room = allClients.get(socket.id)!.room!
      socket.to(room).emit('buy_nem_sajat_res', data)
    }
  })

  socket.on('tax_req', () => {
    if (allClients.has(socket.id)) {
      const room = allClients.get(socket.id)!.room!
      socket.to(room).emit('tax_res')
    }
  })

  socket.on('museum_buy_req', (data) => {
    if (allClients.has(socket.id)) {
      const room = allClients.get(socket.id)!.room!
      socket.to(room).emit('museum_buy_res', data)
    }
  })





  socket.on('disconnecting', () => {
    leaveRoom(socket, rooms, allClients, true)
  })
})