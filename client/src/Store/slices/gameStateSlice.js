import { createSlice } from '@reduxjs/toolkit'
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
    showDoubler: false,
    selectDoubler: false,
    showErasmus: false,
    selectErasmus: false,
    showDisabledFields: false,
    singleSelecting: false,
    multipleSelecting: false,
    onlyOwnField: false,
    selectedFields: [],
    showSell: false,
    showTax: false,
    sellValue: 0,
    sellIsFrom: '',
    lastDiceRoll: 0,
    museumPrice: 400_000,
    roundBonus: 250_000,
    resetCountdown: 1,
    currentPlayerIndex: 0,
    gameOver: false,
    players: [
      {
        username: 'user' + Math.floor(Math.random() * 999999),
        userId: null,
        colorCode: 0,
        money: 0,
        hasPCR: false,
        coutPCR: 0,
        isInQuarantine: false,
        QuarantineRounds: 0,
        field: 0,
        timeRemain: 0,
        playerCountdown: true,
        isBankrupt: false

      },
      {
        username: 'user' + Math.floor(Math.random() * 999999),
        userId: null,
        colorCode: 1,
        money: 0,
        hasPCR: false,
        coutPCR: 0,
        isInQuarantine: false,
        QuarantineRounds: 0,
        field: 0,
        timeRemain: 0,
        playerCountdown: false,
        isBankrupt: false
      },
      {
        username: 'user' + Math.floor(Math.random() * 999999),
        userId: null,
        colorCode: 2,
        money: 0,
        hasPCR: false,
        coutPCR: 0,
        isInQuarantine: false,
        QuarantineRounds: 0,
        field: 0,
        timeRemain: 0,
        playerCountdown: false,
        isBankrupt: false
      },
      {
        username: 'user' + Math.floor(Math.random() * 999999),
        userId: null,
        colorCode: 3,
        money: 0,
        hasPCR: false,
        coutPCR: 0,
        isInQuarantine: false,
        QuarantineRounds: 0,
        field: 0,
        timeRemain: 0,
        playerCountdown: false,
        isBankrupt: false
      },

    ],
    map: [
      {
        id: 0,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 1,
        level: 2,
        ownerColor: 0,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 2,
        level: 1,
        ownerColor: 0,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 3,
        level: 0,
        ownerColor: null,
        hasDoubler: true,
        doublerCount: 1
      },
      {
        id: 4,
        level: 1,
        ownerColor: 0,
        hasDoubler: true,
        doublerCount: 1
      },
      {
        id: 5,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 6,
        level: 2,
        ownerColor: 0,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 7,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 8,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 9,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 10,
        level: 3,
        ownerColor: 3,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 11,
        level: 2,
        ownerColor: 2,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 12,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 13,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 14,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 15,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 16,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 17,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 18,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 19,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 20,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 21,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 22,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 23,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 24,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 25,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 26,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 27,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 28,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 29,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 30,
        level: null,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
      },
      {
        id: 31,
        level: 0,
        ownerColor: null,
        hasDoubler: false,
        doublerCount: 0
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
      try {
        state.players[state.currentPlayer].playerCountdown = false
        state.showFirstQuarantineTab = false
        state.showQuarantineTab = false
        state.showBuyPanel = false
        state.selectedFields = []
        state.showDoubler = false
        state.selectDoubler = false
        state.showDisabledFields = false
        state.singleSelecting = false
        state.onlyOwnField = false
        state.selectErasmus = false
        state.showErasmus = false
        state.showBalance = false

        setShowQuarantineTab(state, false)



        // if (state.currentPlayer === state.players.length - 1) {
        //   state.currentPlayer = 0
        // } else state.currentPlayer = state.currentPlayer + 1

        const findValidNextPlayer = () => {
          const validPlayers = state.players.filter(x => x.isBankrupt === false)
          console.log(validPlayers[0].colorCode);
          console.log(validPlayers[1].colorCode);
          console.log(validPlayers[2].colorCode);
          console.log('curremt', state.currentPlayerIndex);
          if (state.currentPlayerIndex >= validPlayers.length - 1) {
            console.log('logika', state.currentPlayerIndex >= validPlayers.length - 1);
            state.currentPlayerIndex = 0
          } else state.currentPlayerIndex += 1
          console.log(validPlayers[state.currentPlayerIndex].colorCode);
          return validPlayers[state.currentPlayerIndex].colorCode
        }

        state.currentPlayer = findValidNextPlayer()




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

      } catch (error) {
        console.log(error);
      }
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

      setTimeout(() => {
        setShowBalance(state, false)
        setShowBuyPanel(state, true)
      }, 3300);
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
      if (state.players[state.currentPlayer].money < tax * 0.1) {
        // ha kevesebb a pénz mint kéne
      }
      state.players[state.currentPlayer].money -= tax * 0.1
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
    addSelection: (state, action) => {
      if (!state.selectedFields.includes(action.payload)) {
        state.selectedFields.push(action.payload)
      } else {
        _.remove(state.selectedFields, (n) => action.payload === n)
      }
    },
    putDoublerTo: (state, action) => {
      try {

        console.log('putDoublerTo ', action.payload);
        const fieldWithDoublerOnIt = state.map.filter(x => x.hasDoubler)

        let same = false
        if (fieldWithDoublerOnIt.length > 0) {
          same = ((fieldWithDoublerOnIt[0].ownerColor === state.currentPlayer) && fieldWithDoublerOnIt[0].doublerCount === action.payload)
          if (same) {
            fieldWithDoublerOnIt[0].doublerCount += 1
          } else {
            fieldWithDoublerOnIt[0].hasDoubler = false
            fieldWithDoublerOnIt[0].doublerCount = 0
            state.map[action.payload].hasDoubler = true
            state.map[action.payload].doublerCount += 1
          }
        } else {
          state.map[action.payload].hasDoubler = true
          state.map[action.payload].doublerCount += 1
        }

        state.showDoubler = false
        state.selectDoubler = false
        state.showDisabledFields = false
        state.singleSelecting = false
        state.onlyOwnField = false

      } catch (error) {
        console.log(error);
      }
    },
    setShowDoubler: (state, action) => {
      state.showDoubler = action.payload
    },
    setSelectDoubler: (state, action) => {
      state.selectDoubler = action.payload
      state.showDisabledFields = action.payload
      state.singleSelecting = action.payload
      state.onlyOwnField = action.payload
    },
    setShowErasmus: (state, action) => {
      state.showErasmus = action.payload
    },
    setSelectErasmus: (state, action) => {
      state.selectErasmus = action.payload
      state.showDisabledFields = action.payload
      state.singleSelecting = action.payload
    },
    setField: (state, action) => {
      state.players[state.currentPlayer].field = action.payload
    },
    setBankrupt: (state) => {
      state.currentPlayerIndex -= 1
      let fieldIdAminAll = state.players[state.currentPlayer].field % 32
      if (fieldIdAminAll === 32) fieldIdAminAll = 0
      console.log('fieldIdAminAll', fieldIdAminAll);
      const AkinekAFieldjenAllok = state.map[fieldIdAminAll].ownerColor
      console.log('AkinekAFieldjenAllok', AkinekAFieldjenAllok);
      if (AkinekAFieldjenAllok !== null) {
        state.players[AkinekAFieldjenAllok].money += calcPrice(fieldIdAminAll, state.map[fieldIdAminAll].level, state.map).tandij
      }

      state.players[state.currentPlayer].isBankrupt = true

      const fields = state.map.filter(x => x.ownerColor === state.currentPlayer)
      for (let i = 0; i < fields.length; i++) {
        state.map[fields[i].id].ownerColor = null
        state.map[fields[i].id].hasDoubler = false
        state.map[fields[i].id].doublerCount = 0
        state.map[fields[i].id].level = 0
      }

      nextPlayer(state)
    },
    setShowSell: (state, action) => {
      state.showSell = action.payload.value
      state.showDisabledFields = action.payload.value
      state.multipleSelecting = action.payload.value
      state.onlyOwnField = action.payload.value
      state.sellIsFrom = action.payload.from
    },
    setSellValue: (state, action) => {
      state.sellValue = action.payload
    },
    sellSelectedFields: (state, action) => {
      state.players[state.currentPlayer].money += _.sum(state.selectedFields.map(x => calcPrice(x, state.map[x].level, state.map).sellToBank))
      const selectedFields = state.selectedFields
      for (let i = 0; i < selectedFields.length; i++) {
        state.map[selectedFields[i]].ownerColor = null
        state.map[selectedFields[i]].hasDoubler = false
        state.map[selectedFields[i]].doublerCount = 0
        state.map[selectedFields[i]].level = 0
      }

      state.selectedFields = []


      if (state.sellIsFrom === 'showBalance') {
        state.showBalance = true
      } else if (state.sellIsFrom === 'showBuyPanel') {
        state.showBuyPanel = true
      }

      state.sellIsFrom = ''
    },
    autoSellSelectedFields: (state, action) => {
      const show = (playerFields, ehh = false) => {
        for (let i = 0; i < playerFields.length; i++) {
          console.log('id: ', playerFields[i].id)
          console.log('level: ', playerFields[i].level)
          console.log('ownerColor: ', playerFields[i].ownerColor)
          console.log('hasDoubler: ', playerFields[i].hasDoubler)
          console.log('doublerCount: ', playerFields[i].doublerCount)
          if (ehh) console.log('value: ', playerFields[i].value)
          console.log('\n')

        }
      }
      const calcTheSellingIds = (state, playerFields) => {
        let values = [0]
        let ids = []
        let index = 0

        console.log(_.sum(values));
        console.log(state.sellValue);
        while (_.sum(values) <= state.sellValue) {
          values.push(playerFields[index].value)
          ids.push(playerFields[index].id)
          index++
        }
        return { ids: ids, values: values }
      }

      let playerFields = state.map.filter(x => x.ownerColor === state.currentPlayer)
      playerFields = playerFields.map(x => {
        let obj = x
        obj.value = calcPrice(x.id, x.level, state.map).sellToBank
        return obj
      })
      playerFields = _.orderBy(playerFields, ['value'], ['asc'])
      show(playerFields, true)
      const potencialSell = calcTheSellingIds(state, playerFields)
      console.log('Kell: ', state.sellValue);
      console.log('potenciális: ', _.sum(potencialSell.values));
      console.log('potenciálisID: ', potencialSell.ids);

      state.players[state.currentPlayer].money += _.sum(potencialSell.values)

      for (let i = 0; i < potencialSell.ids.length; i++) {
        state.map[potencialSell.ids[i]].ownerColor = null
        state.map[potencialSell.ids[i]].hasDoubler = false
        state.map[potencialSell.ids[i]].doublerCount = 0
        state.map[potencialSell.ids[i]].level = 0
      }
      if (state.sellIsFrom === 'showBalance') {
        state.showBalance = true
      } else if (state.sellIsFrom === 'showBuyPanel') {
        state.showBuyPanel = true
      }

      state.sellIsFrom = ''
    },
    setShowTax: (state, action) => {
      state.showTax = action.payload
    }


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
  addSelection,
  putDoublerTo,
  setShowDoubler,
  setSelectDoubler,
  setShowErasmus,
  setSelectErasmus,
  setField,
  setBankrupt,
  setShowSell,
  setSellValue,
  sellSelectedFields,
  autoSellSelectedFields,
  setShowTax

} = gameStateSlice.actions

export default gameStateSlice.reducer