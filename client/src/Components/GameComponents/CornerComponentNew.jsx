import { Container, Sprite, Text } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import { TextStyle } from 'pixi.js';
import React from 'react'

export default function CornerComponentNew(props) {

  const label_bg = PIXI.Texture.from('../images/game/isometriccity/PNG/cityTiles_072.png');
  const road_bg = PIXI.Texture.from('../images/game/isometriclandscape/PNG/landscapeTiles_081_1.png');
  const left_road_bg = PIXI.Texture.from('../images/game/isometriclandscape/PNG/landscapeTiles_087.png');
  const right_road_bg = PIXI.Texture.from('../images/game/isometriclandscape/PNG/landscapeTiles_080.png');
  const top_road_bg = PIXI.Texture.from('../images/game/isometriclandscape/PNG/landscapeTiles_114.png');

  let HEIGHT = 96 / 2
  const BOTTOM_HEIGHT = 32
  const WIDTH = 129 / 2



  return (
    <Container
      sortableChildren
      anchor={0.5}
      scale={0.65}
      interactive={true}
      //pointerdown={(e) => e.currentTarget.y -= 10}
      //pointerup={(e) => e.currentTarget.y += 10}
      //pointerout={(e) => e.currentTarget.y += 10}
      pointerdown={(e) => e.currentTarget.y -= 10}
      pointerupoutside={(e) => e.currentTarget.y += 10}
      pointerup={(e) => e.currentTarget.y += 10}

      {...props}
    >
      <Text
        zIndex={90}

        text={`Hello World`}
        anchor={0.5}
        // skew={[0.6, -0.3]}
        style={
          new TextStyle({
            // align: 'center',
            // breakWords: true,
            // trim: true,
            // fontFamily: "'Nunoto', sans-serif",
            // fontWeight: 700,
            // fontSize: 40,
            // letterSpacing: 0,
            // fill: ['#000000'], // gradient
            // stroke: '#ffffff',
            // strokeThickness: 10,
            // // dropShadow: true,
            // // dropShadowColor: '#ccced2',
            // // dropShadowBlur: 1,
            // // dropShadowAngle: Math.PI / 6,
            // // dropShadowDistance: 1,
            // // wordWrap: true,
            // // wordWrapWidth: 440,
            align: 'center',
            fontFamily: 'Arial',
            dropShadow: true,
            dropShadowAlpha: 0.8,
            dropShadowAngle: 2.1,
            dropShadowBlur: 2,
            dropShadowColor: '0x111111',
            dropShadowDistance: 6,
            fill: ['#ffffff'],
            stroke: '#555555',
            fontSize: 40,
            fontWeight: 'lighter',
            lineJoin: 'round',
            strokeThickness: 10,
            wordWrap: true,
            wordWrapWidth: 200
          })
        }
      />
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
