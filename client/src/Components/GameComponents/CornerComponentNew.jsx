import { Container, Sprite } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import React from 'react'

export default function CornerComponentNew(props) {

  const label_bg = PIXI.Texture.from('../Images/game/isometriccity/PNG/cityTiles_072.png');
  const road_bg = PIXI.Texture.from('../Images/game/isometriclandscape/PNG/landscapeTiles_081_1.png');
  const left_road_bg = PIXI.Texture.from('../Images/game/isometriclandscape/PNG/landscapeTiles_087.png');
  const right_road_bg = PIXI.Texture.from('../Images/game/isometriclandscape/PNG/landscapeTiles_080.png');
  const top_road_bg = PIXI.Texture.from('../Images/game/isometriclandscape/PNG/landscapeTiles_114.png');

  const HEIGHT = 96 / 2
  const BOTTOM_HEIGHT = 32
  const WIDTH = 129 / 2



  return (
    <Container
      sortableChildren
      anchor={0.5}
      scale={0.65}
      {...props}
    >
      <Sprite
        anchor={0.5}
        zIndex={2}
        scale={1}
        x={-WIDTH}
        y={HEIGHT}
        texture={(props.start ? label_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={1}
        scale={1}
        x={-WIDTH * 2}
        y={-BOTTOM_HEIGHT + HEIGHT}
        texture={(props.start ? label_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={3}
        scale={1}
        x={0}
        y={BOTTOM_HEIGHT + HEIGHT}
        texture={(props.start ? label_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={2}
        scale={1}
        x={WIDTH}
        y={HEIGHT}
        texture={(props.start ? label_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={1}
        scale={1}
        x={WIDTH * 2}
        y={-BOTTOM_HEIGHT + HEIGHT}
        texture={(props.start ? label_bg : road_bg)}
      />



      <Sprite
        anchor={0.5}
        zIndex={0}
        scale={1}
        x={0}
        y={-BOTTOM_HEIGHT + HEIGHT}
        texture={road_bg}
      />
      <Sprite
        anchor={0.5}
        zIndex={-1}
        scale={1}
        x={-WIDTH}
        y={-BOTTOM_HEIGHT * 2 + HEIGHT}
        texture={(props.start ? left_road_bg : road_bg)}
      />

      <Sprite
        anchor={0.5}
        zIndex={-2}
        scale={1}
        x={0}
        y={-BOTTOM_HEIGHT * 3 + HEIGHT}
        texture={(props.start ? top_road_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={-1}
        scale={1}
        x={WIDTH}
        y={-BOTTOM_HEIGHT * 2 + HEIGHT}
        texture={(props.start ? right_road_bg : road_bg)}
      />


    </Container>
  )
}
