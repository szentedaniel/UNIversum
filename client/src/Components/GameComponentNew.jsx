import { Container, Graphics, Sprite, Stage } from '@inlet/react-pixi'
import React, { useState } from 'react'
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

export default function GameComponentNew() {
  const [width, setWidth] = useState(GAME_CONFIG.width)
  const [height, setHeight] = useState(GAME_CONFIG.height)
  const label_bg = PIXI.Texture.from('../Images/game/isometriccity/PNG/cityTiles_072.png');

  let shadowFilter = new DropShadowFilter({ rotation: 45, distance: 6 })

  const stageProps = {
    height,
    width,
    options: {
      backgroundAlpha: 0,
      // antialias: true,
      resolution: PIXI.settings.RESOLUTION,
    },
  }

  const map = GAME_CONFIG.map.map(mezo => {
    const coords = calcCoords(mezo.id)

    if (mezo.isCorner) return (<CornerComponentNew {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
    if (mezo.isNormal) return (<NormalComponentNew {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
    if (mezo.isMuseum) return (<MuseumComponent {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
    if (mezo.isChance) return (<LuckComponent {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
    if (mezo.isTax) return (<TaxComponent {...mezo} x={coords.x} y={coords.y} key={mezo.id} />)
  })



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
          {map}

        </Container>
      </Stage>
      <PlayerInfo />
    </>
  )
}
