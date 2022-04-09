import { Container, Graphics, Sprite, Stage } from '@inlet/react-pixi'
import React, { useEffect, useState, useMemo } from 'react'
import * as PIXI from 'pixi.js'
import { forEachRight } from 'lodash'
import { ColorReplaceFilter, DropShadowFilter } from 'pixi-filters'
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

export default function GameComponentNew(props) {
  const [width, setWidth] = useState(GAME_CONFIG.width)
  const [height, setHeight] = useState(GAME_CONFIG.height)

  let shadowFilter = new DropShadowFilter({ rotation: 45, distance: 6 })

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

    if (mezo.isCorner) return (<CornerComponentNew {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
    if (mezo.isNormal) return (<NormalComponentNew {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
    if (mezo.isMuseum) return (<MuseumComponent {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
    if (mezo.isChance) return (<LuckComponent {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
    if (mezo.isTax) return (<TaxComponent {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
  })

  const usersGame = [
    {
      username: 'test1',
      userId: null,
      userColor: 0,
      mezoId: 0,
      zIndex: 10,
    },
    {
      username: 'test2',
      userId: null,
      userColor: 1,
      mezoId: 0,
      zIndex: 10,
    },
    {
      username: 'test3',
      userId: null,
      userColor: 2,
      mezoId: 0,
      zIndex: 10,
    },
    {
      username: 'test4',
      userId: null,
      userColor: 3,
      mezoId: 0,
      zIndex: 10,
    }
  ]

  const users = useMemo(() => usersGame.map(user => ({
    ...user,
    mezoId: (user.mezoId),
    zIndex: user.zIndex
  })), [usersGame])

  useEffect(() => {
    console.log('valtozott a users');
  }, [users])



  const players = users.map((player) => (
    <Character
      anchor={0.5}
      // interactive={true}
      // pointerup={setMezoId(player.userColor)}
      key={player.userColor}
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
          {players}
          {map}

        </Container>
      </Stage>
      <PlayerInfo />
    </>
  )
}
