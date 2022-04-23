import { createSlice } from '@reduxjs/toolkit'
import { reduce } from 'lodash'
import calcPrice from '../../Utils/calcPrice'
import * as _ from 'lodash'



export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: {
    roomCode: null,
    currentPlayer: 0,
    showDiceRoll: true,
    showBalance: false,
    showBuyPanel: false,
    showFirstQuarantineTab: false,
    showQuarantineTab: false,
    rollingDiceFromQuarantine: false,
    lastDiceRoll: 0,
    museumPrice: 400_000,
    roundBonus: 250_000,
    resetCountdown: 1,
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

    ],
    map: [
      {
        id: 0,
        level: null,
        ownerColor: null,
      },
      {
        id: 1,
        level: 2,
        ownerColor: 0,
      },
      {
        id: 2,
        level: 1,
        ownerColor: 0,
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
        level: 2,
        ownerColor: 0,
      },
      {
        id: 7,
        level: 1,
        ownerColor: 1,
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
        level: 3,
        ownerColor: 3,
      },
      {
        id: 11,
        level: 2,
        ownerColor: 2,
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
      state.showFirstQuarantineTab = false
      state.showQuarantineTab = false
      state.showBuyPanel = false
      setShowQuarantineTab(state, false)

      if (state.currentPlayer === state.players.length - 1) {
        state.currentPlayer = 0
      } else state.currentPlayer = state.currentPlayer + 1




      if (state.players[state.currentPlayer].isInQuarantine) {
        if (state.players[state.currentPlayer].QuarantineRounds === 0) {

          state.players[state.currentPlayer].isInQuarantine = false
          state.showDiceRoll = true
        } else {
          state.showQuarantineTab = false
          state.showQuarantineTab = true
        }
      } else {
        state.showDiceRoll = true
      }

      state.players[state.currentPlayer].playerCountdown = true
    },
    setShowBuyPanel: (state, action) => {
      state.showBuyPanel = action.payload
    },
    setShowBalance: (state, action) => {
      state.showBalance = action.payload
    },
    minusTandij: (state, action) => {
      if (state.players[state.currentPlayer].money < action.payload.tandij) {
        // ha kevesebb a pénz mint kéne
      }
      state.players[state.currentPlayer].money -= action.payload.tandij
      const fieldId = action.payload.fieldId
      state.players[state.map[fieldId].ownerColor].money += action.payload.tandij
    },
    buyLand: (state, action) => {
      const { ar, fieldId, level } = action.payload
      const owner = state.map[fieldId].ownerColor


      state.players[state.currentPlayer].money = state.players[state.currentPlayer].money - ar
      if (owner) {
        state.players[owner].money = state.players[owner].money + ar
      }
      state.map[fieldId].ownerColor = state.currentPlayer
      state.map[fieldId].level = level

      nextPlayer(state)
    },
    buyMuseum: (state, action) => {
      const { fieldId } = action.payload

      state.players[state.currentPlayer].money = state.players[state.currentPlayer].money - state.museumPrice

      state.map[fieldId].ownerColor = state.currentPlayer
      state.map[fieldId].level = 1

      setTimeout(() => {
        nextPlayer(state)
      }, 400);
    },
    giveRoundBonus: (state) => {
      state.players[state.currentPlayer].money += state.roundBonus
    },
    resetCountdown: (state) => {
      state.resetCountdown += 1
    },
    payTax: (state) => {
      const sajatTulajdon = state.map.filter(x => x.ownerColor === state.currentPlayer)
      const sajatTulajdonErtekei = sajatTulajdon.map(x => calcPrice(x.id, x.level, state.map).toBuy)
      const tax = _.sum(sajatTulajdonErtekei)
      if (state.players[state.currentPlayer].money < tax * 0.01) {
        // ha kevesebb a pénz mint kéne
      }
      state.players[state.currentPlayer].money -= tax * 0.01
    },
    setShowFirstQuarantineTab: (state, action) => {
      state.showFirstQuarantineTab = action.payload
    },
    setShowQuarantineTab: (state, action) => {
      state.showQuarantineTab = action.payload
    },
    startQuarantine: (state) => {
      state.players[state.currentPlayer].isInQuarantine = true
      state.players[state.currentPlayer].QuarantineRounds = 3
      state.showFirstQuarantineTab = true
    },
    buyPCR: (state) => {
      state.players[state.currentPlayer].money -= 200_000
    },
    setRollingDiceFromQuarantine: (state, action) => {
      state.rollingDiceFromQuarantine = action.payload
    },
    QuarantineRoundsDowner: (state, action) => {
      if (action.payload === 12) {
        state.players[state.currentPlayer].isInQuarantine = false
        state.players[state.currentPlayer].QuarantineRounds = 0
      } else {
        state.players[state.currentPlayer].QuarantineRounds -= 1
      }
    },
    removePCR: (state) => {
      state.players[state.currentPlayer].hasPCR = false
    },

  },
})

// Action creators are generated for each case reducer function
export const {
  nextPlayer,
  setShowDiceRoll,
  setDiceRollValue,
  setShowBalance,
  setShowBuyPanel,
  minusTandij,
  buyLand,
  buyMuseum,
  giveRoundBonus,
  resetCountdown,
  payTax,
  setShowFirstQuarantineTab,
  setShowQuarantineTab,
  startQuarantine,
  buyPCR,
  setRollingDiceFromQuarantine,
  QuarantineRoundsDowner,
  removePCR,
} = gameStateSlice.actions

export default gameStateSlice.reducer