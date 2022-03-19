const generateRoomCode = (list) => {
  let code = null
  do {
    code = Math.floor(Math.random() * 900000 + 100000)
  } while (list.has(code.toString()))
  return code.toString()
}

module.exports = generateRoomCode