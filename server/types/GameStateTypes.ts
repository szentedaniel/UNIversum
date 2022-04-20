interface gameStateData {
  roomCode: number
  currentPlayer: number
  showDiceRoll: boolean
  lastDiceRoll: number
  playerCountdown: boolean
  players: Player[]
  map: Field[]
}

interface Player {
  username: string
  userId: string
  colorCode: number
  money: number
  hasPCR: boolean
  coutPCR: number
  isInQuarantine: boolean
  QuarantineRounds: number
  field: number
  timeRemain: number
}

interface Field {
  id: number
  level: number
  ownerColor: number
}