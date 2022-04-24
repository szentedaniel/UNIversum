import { Container, Graphics, Sprite, Stage } from '@inlet/react-pixi'
import React, { useEffect, useState, useMemo } from 'react'
import * as PIXI from 'pixi.js'
import { forEachRight } from 'lodash'
import { ColorReplaceFilter, DropShadowFilter, CRTFilter, GlowFilter } from 'pixi-filters'
import NormalComponentNew from './GameComponents/NormalComponentNew'
import CornerComponentNew from './GameComponents/CornerComponentNew'
import { Avatar, Icon } from '@mui/material'
import FullscreenSwitcher from './GameComponents/FullscreenSwitcher'
import PlayerInfo from './GameComponents/PlayerInfo'
import { GAME_CONFIG } from '../gameConfig'
import { calcCoords } from '../Utils/calcCoords'
import MuseumComponent from './GameComponents/MuseumComponent'
import TaxComponent from './GameComponents/TaxComponent'
import LuckComponent from './GameComponents/LuckComponent'
import Character from './GameComponents/Character'
import Dice from './GameComponents/Dice'
import RollDice from './GameComponents/RollDice'
import { useDispatch, useSelector } from 'react-redux'
import { countdownStart } from '../Store/slices/gameStateSlice'
import BuyComponent from './GameComponents/BuyComponent'
import Balance from './GameComponents/Balance'
import Quarantine from './GameComponents/Quarantine'
import InQuarantine from './GameComponents/InQuarantine'
import OnDoubler from './GameComponents/OnDoubler'
import OnErasmus from './GameComponents/OnErasmus'
import Sell from './GameComponents/Sell'

export default function GameComponentNew(props) {
  const [width, setWidth] = useState(GAME_CONFIG.width)
  const [height, setHeight] = useState(GAME_CONFIG.height)
  const { players, currentPlayer, showDiceRoll, showTax, showBuyPanel, map: fields, showBalance, lastDiceRoll, resetCountdown, museumPrice, showDisabledFields, singleSelecting, multipleSelecting, selectedFields, showQuarantineTab, onlyOwnField, showDoubler, selectDoubler, showErasmus, selectErasmus, showSell } = useSelector((state) => state.gameState)
  const dispatch = useDispatch()

  let shadowFilter = new DropShadowFilter({ rotation: 45, distance: 6 })
  const disabledFilter = new CRTFilter({ lineContrast: 0.7, noise: 0.7, curvature: 0, lineWidth: 0, vignettingAlpha: 0 })
  const selectedFilter = new GlowFilter({ distance: 20 })

  const stageProps = {
    height,
    width,
    options: {
      backgroundAlpha: 0,
      antialias: true,
      resolution: PIXI.settings.RESOLUTION,
    },
  }

  // pálya kreálás
  const map = GAME_CONFIG.map.map(mezo => {
    const coords = calcCoords(mezo.id)

    if (mezo.isCorner) return (<CornerComponentNew  {...mezo} x={coords.x} y={coords.y} key={mezo.id} dispatch={dispatch} fields={fields} currentPlayer={currentPlayer} players={players} singleSelecting={singleSelecting} multipleSelecting={multipleSelecting} selectedFields={selectedFields} onlyOwnField={onlyOwnField} disabledFilter={disabledFilter} selectedFilter={selectedFilter} showDisabledFields={showDisabledFields} showDoubler={showDoubler} selectDoubler={selectDoubler} showErasmus={showErasmus} selectErasmus={selectErasmus} />)
    if (mezo.isNormal) return (<NormalComponentNew  {...mezo} x={coords.x} y={coords.y} key={mezo.id} dispatch={dispatch} fields={fields} currentPlayer={currentPlayer} players={players} singleSelecting={singleSelecting} multipleSelecting={multipleSelecting} selectedFields={selectedFields} onlyOwnField={onlyOwnField} disabledFilter={disabledFilter} selectedFilter={selectedFilter} showDisabledFields={showDisabledFields} showDoubler={showDoubler} selectDoubler={selectDoubler} showErasmus={showErasmus} selectErasmus={selectErasmus} />)
    if (mezo.isMuseum) return (<MuseumComponent     {...mezo} x={coords.x} y={coords.y} key={mezo.id} dispatch={dispatch} fields={fields} currentPlayer={currentPlayer} players={players} singleSelecting={singleSelecting} multipleSelecting={multipleSelecting} selectedFields={selectedFields} onlyOwnField={onlyOwnField} disabledFilter={disabledFilter} selectedFilter={selectedFilter} showDisabledFields={showDisabledFields} showDoubler={showDoubler} selectDoubler={selectDoubler} showErasmus={showErasmus} selectErasmus={selectErasmus} />)
    if (mezo.isChance) return (<LuckComponent       {...mezo} x={coords.x} y={coords.y} key={mezo.id} dispatch={dispatch} fields={fields} currentPlayer={currentPlayer} players={players} singleSelecting={singleSelecting} multipleSelecting={multipleSelecting} selectedFields={selectedFields} onlyOwnField={onlyOwnField} disabledFilter={disabledFilter} selectedFilter={selectedFilter} showDisabledFields={showDisabledFields} showDoubler={showDoubler} selectDoubler={selectDoubler} showErasmus={showErasmus} selectErasmus={selectErasmus} />)
    if (mezo.isTax) return (<TaxComponent           {...mezo} x={coords.x} y={coords.y} key={mezo.id} dispatch={dispatch} fields={fields} currentPlayer={currentPlayer} players={players} singleSelecting={singleSelecting} multipleSelecting={multipleSelecting} selectedFields={selectedFields} onlyOwnField={onlyOwnField} disabledFilter={disabledFilter} selectedFilter={selectedFilter} showDisabledFields={showDisabledFields} showDoubler={showDoubler} selectDoubler={selectDoubler} showErasmus={showErasmus} selectErasmus={selectErasmus} />)
  })


  const users = useMemo(() => players.map(user => ({
    ...user,
    mezoId: (user.mezoId),
    zIndex: user.zIndex,
  })), [players])

  useEffect(() => {
    console.log('valtozott a users');
  }, [users])



  const characters = users.map((player) => (
    <Character
      key={player.colorCode}
      anchor={0.5}
      // interactive={true}
      // pointerup={setMezoId(player.userColor)}
      zIndex={10}
      dispatch={dispatch}
      currentPlayer={currentPlayer}
      showDiceRoll={showDiceRoll}
      lastDiceRoll={lastDiceRoll}
      players={players}
      {...player}
    />
  ))

  return (
    <>
      <Stage {...stageProps}>
        <Container
          interactive={true}
          interactiveChildren={true}
          anchor={0.5}
          position={[width / 2, height / 2]}
          sortableChildren
          filters={[shadowFilter]}
          scale={[1, 1.1]}
        >
          {characters}
          {map}

        </Container>
      </Stage>
      <PlayerInfo
        players={players}
        currentPlayer={currentPlayer}
        resetCountdown={resetCountdown}
        showSell={showSell}
        showTax={showTax}
        showQuarantineTab={showQuarantineTab} />
      <RollDice />
      <Balance
        showBalance={showBalance}
        players={players}
        currentPlayer={currentPlayer}
        fields={fields}
      />
      <BuyComponent
        players={players}
        currentPlayer={currentPlayer}
        showDiceRoll={showDiceRoll}
        showBuyPanel={showBuyPanel}
        fields={fields}
        museumPrice={museumPrice}
      />
      <Quarantine />
      <InQuarantine />
      <OnDoubler />
      <OnErasmus />
      <Sell />
    </>
  )
}
