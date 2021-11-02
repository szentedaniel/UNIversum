const express = require('express')
const http = require('http')
const cors = require('cors')
const dotenv = require('dotenv')
const { Server } = require('socket.io')
const generateRoomCode = require('./functions')

// Load config (.env)
dotenv.config()

const app = express()
// Cors to avoid socket problems
app.use(cors())
const server = http.createServer(app)

// Websocket server
const io = new Server(server, {
    cors:{
        origin: '*',//process.env.CLIENT_URL
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
    allClients.set(socket.id, {room: null});
    console.log('Current clients connected: ', allClients.size)

    socket.on('create_room', () => {
        const roomId = generateRoomCode(rooms)
        socket.emit('get_room', {room: roomId})
        console.log(roomId)
        rooms.set(roomId, {users: []})
        console.log(rooms)
    })

    socket.on('join_room', data => {
        if(data.create){
            socket.join(data.room)
            allClients.set(socket.id, {room: data.room})
            const room = rooms.get(data.room)
            console.log('room:',room)
            console.log('roomusers:',room['users'])
            room['users'].push({userId: socket.id})
            //rooms.push({[data.room]: {userId: socket.id}})
            console.log(`User with ID: ${socket.id} joined room: ${data.room}`)
            console.log(rooms)
            socket.emit('joined_room', {status: 200,room: data.room, rooms: Object.fromEntries(rooms)})
            console.log(socket['rooms'])
            //console.log(Object.values(socket['adapter']['rooms']))
            
            //console.log(Object.keys(Object.fromEntries(socket['adapter']['rooms'])).map(it => console.log(it)))
                
        }else{
            
            if (rooms.has(data.room)) {
                socket.join(data.room)
                allClients.set(socket.id, {room: data.room})
                //rooms[data.room].users.push({userId: socket.id})
                //rooms.push({[data.room]: {userId: socket.id}})
                const room = rooms.get(data.room)
                room['users'].push({userId: socket.id})
                console.log(`User with ID: ${socket.id} joined room: ${data.room}`)
                console.log(rooms)  
                socket.emit('joined_room', {status: 200,room: data.room, rooms: Object.fromEntries(rooms)})
                //io.emit('joined_room', {status: 200,room: data.room, rooms: Object.fromEntries(rooms)})
            }else{
                socket.emit('joined_room', {status: 404,room: null})
            }
        }
    })


    socket.on('disconnect', () => {
        const socketId = socket.id
        const roomID = allClients.get(socketId).room
        if (roomID) {
            
            console.log(roomID)
            const user = rooms.get(roomID)['users'].filter(it => it.userId === socketId)
            console.log(user)
            rooms.get(roomID)['users'].splice(rooms.get(roomID)['users'].indexOf(user), 1)

            if (rooms.get(roomID)['users'].length === 0) {
                rooms.delete(roomID)
            }
            console.log(rooms)
        }
        
        
        console.log('1 user disconnected', socket.id)
        
        allClients.delete(socket.id)
        //allClients.splice(allClients.indexOf(socket), 1)

    })
})