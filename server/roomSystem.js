const generateRoomCode = require('./functions')
const MESSAGES = require('./config/messages')

let io = null
const setIo = (io_) => {
  io = io_
}

const createRoom = (socket_, rooms_) => {

  const roomId = generateRoomCode(rooms_)
  try {
    socket_.emit('get_room', {
      room: roomId
    })
    rooms_.set(roomId, {
      users: [],
      code: roomId
    })
    sendRoomsToClient(rooms_)
  } catch (error) {
    console.log(error)
  }
}

const joinRoom = (socket_, rooms_, allClients_, data_, ) => {
  try {
    if (data_.create) {

      socket_.join(data_.room)
      allClients_.get(socket_.id).room = data_.room

      const room = rooms_.get(data_.room.toString())
      room['users'].push({
        userId: socket_.id,
        username: allClients_.get(socket_.id).username
      })

      console.log(`User with ID: ${socket_.id} joined room: ${data_.room}`)
      //console.log(rooms_)
      socket_.emit('joined_room', {
        status: 200,
        room: data_.room,
        team: rooms_.get(data_.room.toString())
      })
      socket_.to(data_.room).emit('user_joined', {
        user: socket_.id,
        team: rooms_.get(data_.room.toString())
      })
      

    } else {

      if (rooms_.has(data_.room)) {
        if (rooms_.get(data_.room)['users'].length < 4) {
          socket_.join(data_.room)
          allClients_.get(socket_.id).room = data_.room
          //rooms[data.room].users.push({userId: socket.id})
          //rooms.push({[data.room]: {userId: socket.id}})
          const room = rooms_.get(data_.room.toString())
          room['users'].push({
            userId: socket_.id,
            username: allClients_.get(socket_.id).username
          })
          console.log(room['users'])
          console.log(`User with ID: ${socket_.id} joined room: ${data_.room}`)
          console.log(rooms_)
          socket_.emit('joined_room', {
            status: 200,
            room: data_.room,
            team: rooms_.get(data_.room.toString())
          })
          socket_.to(data_.room).emit('user_joined', {
            user: socket_.id,
            team: rooms_.get(data_.room.toString())
          })
          //io.emit('joined_room', {status: 200,room: data.room, rooms: Object.fromEntries(rooms)})
        } else {
          socket_.emit('joined_room', {
            status: 403,
            room: null,
            message: MESSAGES[403]
          })
        }

      } else {
        socket_.emit('joined_room', {
          status: 404,
          room: null,
          message: MESSAGES[404]
        })
      }
    }
    sendRoomsToClient(rooms_)
  } catch (error) {
    try {
      console.log(error)
      socket_.emit('joined_room', {
        status: 503,
        room: null,
        message: MESSAGES[503]
      })
    } catch (error) {
      console.log(error)
    }

  }
}

const leaveRoom = (socket_, rooms_, allClients_, serverLeave_ = false) => {
  try {
    const socketId = socket_.id
    if (allClients_.has(socketId)) {


      const roomID = allClients_.get(socketId).room
      if (roomID) {

        const user = rooms_.get(roomID)['users'].filter(it => it.userId === socketId)[0]
        rooms_.get(roomID)['users'].splice(rooms_.get(roomID)['users'].indexOf(user), 1)

        if (rooms_.get(roomID)['users'].length === 0) {
          rooms_.delete(roomID)
        }
        console.log(rooms_)
        socket_.emit('leaved_room')
        socket_.to(roomID).emit('user_left', {
          user: socketId,
          team: (rooms_.get(roomID))
        })
        console.log(`User with ID: ${socket_.id} left room: ${roomID}`)
                
      }

      console.log('1 user disconnected', socketId)

      if (serverLeave_) {
        allClients_.delete(socketId)
      } else {
        allClients_.get(socketId).room  = null
      }
    }
    sendRoomsToClient(rooms_)
  } catch (error) {
    console.log(error)
  }

}

const sendRoomsToClient = (rooms_) =>{
  io.emit('get_rooms_res', {rooms: Object.fromEntries(rooms_)})
}

module.exports = {
  createRoom,
  joinRoom,
  leaveRoom,
  sendRoomsToClient,
  setIo
}