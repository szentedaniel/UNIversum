const generateRoomCode = (list) => {
  let code = null
  do{
      code = Math.floor(Math.random()*900000+100000)
      console.log('generate another code')
  }while(list.find(room => room[code]))
  return code
}

module.exports = generateRoomCode