import { createSlice } from '@reduxjs/toolkit'
import { reduce } from 'lodash'



export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: {
    roomCode: null,
    currentPlayer: 0,
    showDiceRoll: true,
    lastDiceRoll: 0,
    players: [
      {
        username: 'user' + Math.floor(Math.random() * 999999),
        userId: null,
        colorCode: 0,
        money: 2_500_000,
        hasPCR: false,
        coutPCR: 0,
        isInQuarantine: false,
        QuarantineRounds: 0,
        field: 0,
        timeRemain: 0,
        playerCountdown: true,

      },
      {
        username: 'user' + Math.floor(Math.random() * 999999),
        userId: null,
        colorCode: 1,
        money: 2_500_000,
        hasPCR: false,
        coutPCR: 0,
        isInQuarantine: false,
        QuarantineRounds: 0,
        field: 0,
        timeRemain: 0,
        playerCountdown: false,

      },
      {
        username: 'user' + Math.floor(Math.random() * 999999),
        userId: null,
        colorCode: 2,
        money: 2_500_000,
        hasPCR: false,
        coutPCR: 0,
        isInQuarantine: false,
        QuarantineRounds: 0,
        field: 0,
        timeRemain: 0,
        playerCountdown: false,

      },
      {
        username: 'user' + Math.floor(Math.random() * 999999),
        userId: null,
        colorCode: 3,
        money: 2_500_000,
        hasPCR: false,
        coutPCR: 0,
        isInQuarantine: false,
        QuarantineRounds: 0,
        field: 0,
        timeRemain: 0,
        playerCountdown: false,

      },
    ],
    map: [
      {
        id: 0,
        level: null,
        ownerColor: null,
      },
      {
        id: 1,
        level: 0,
        ownerColor: null,
      },
      {
        id: 2,
        level: 0,
        ownerColor: null,
      },
      {
        id: 3,
        level: 0,
        ownerColor: null,
      },
      {
        id: 4,
        level: 0,
        ownerColor: null,
      },
      {
        id: 5,
        level: 0,
        ownerColor: null,
      },
      {
        id: 6,
        level: 0,
        ownerColor: null,
      },
      {
        id: 7,
        level: null,
        ownerColor: null,
      },
      {
        id: 8,
        level: null,
        ownerColor: null,
      },
      {
        id: 9,
        level: 0,
        ownerColor: null,
      },
      {
        id: 10,
        level: 0,
        ownerColor: null,
      },
      {
        id: 11,
        level: 0,
        ownerColor: null,
      },
      {
        id: 12,
        level: 0,
        ownerColor: null,
      },
      {
        id: 13,
        level: 0,
        ownerColor: null,
      },
      {
        id: 14,
        level: null,
        ownerColor: null,
      },
      {
        id: 15,
        level: 0,
        ownerColor: null,
      },
      {
        id: 16,
        level: null,
        ownerColor: null,
      },
      {
        id: 17,
        level: 0,
        ownerColor: null,
      },
      {
        id: 18,
        level: null,
        ownerColor: null,
      },
      {
        id: 19,
        level: 0,
        ownerColor: null,
      },
      {
        id: 20,
        level: 0,
        ownerColor: null,
      },
      {
        id: 21,
        level: null,
        ownerColor: null,
      },
      {
        id: 22,
        level: 0,
        ownerColor: null,
      },
      {
        id: 23,
        level: 0,
        ownerColor: null,
      },
      {
        id: 24,
        level: null,
        ownerColor: null,
      },
      {
        id: 25,
        level: null,
        ownerColor: null,
      },
      {
        id: 26,
        level: 0,
        ownerColor: null,
      },
      {
        id: 27,
        level: 0,
        ownerColor: null,
      },
      {
        id: 28,
        level: null,
        ownerColor: null,
      },
      {
        id: 29,
        level: 0,
        ownerColor: null,
      },
      {
        id: 30,
        level: null,
        ownerColor: null,
      },
      {
        id: 31,
        level: 0,
        ownerColor: null,
      },
    ],
  },
  reducers: {

    setShowDiceRoll: (state, action) => {
      state.showDiceRoll = action.payload
    },
    setDiceRollValue: (state, action) => {
      state.lastDiceRoll = action.payload
      state.players[state.currentPlayer].field += action.payload
    },
    nextPlayer: (state) => {
      state.players[state.currentPlayer].playerCountdown = false
      if (state.currentPlayer === state.players.length - 1) {
        state.currentPlayer = 0
      } else state.currentPlayer = state.currentPlayer + 1

      state.showDiceRoll = true
      state.players[state.currentPlayer].playerCountdown = true

    },
  },
})

// Action creators are generated for each case reducer function
export const { nextPlayer, setShowDiceRoll, setDiceRollValue } = gameStateSlice.actions

export default gameStateSlice.reducer