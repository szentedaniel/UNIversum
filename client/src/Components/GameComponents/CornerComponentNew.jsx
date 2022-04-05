import { Container, Sprite, Text } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import { TextStyle } from 'pixi.js';
import React from 'react'
import { GAME_CONFIG } from '../../gameConfig';

export default function CornerComponentNew(props) {

  const label_bg = PIXI.Texture.from('../images/game/isometriccity/PNG/cityTiles_072.png');
  const road_bg = PIXI.Texture.from('../images/game/isometriclandscape/PNG/landscapeTiles_081_1.png');
  const left_road_bg = PIXI.Texture.from('../images/game/isometriclandscape/PNG/landscapeTiles_087.png');
  const right_road_bg = PIXI.Texture.from('../images/game/isometriclandscape/PNG/landscapeTiles_080.png');
  const top_road_bg = PIXI.Texture.from('../images/game/isometriclandscape/PNG/landscapeTiles_114.png');
  const karibacsik = PIXI.Texture.from('../Images/game/caracters/karibacsik.png');
  const repulo = PIXI.Texture.from('../Images/game/caracters/erasmus.png');
  const doubler = PIXI.Texture.from('../Images/game/caracters/diploma.png');
  const tabla = PIXI.Texture.from('../Images/game/caracters/tabla.png');

  let HEIGHT = 96 / 2
  const BOTTOM_HEIGHT = 32
  const WIDTH = 129 / 2



  return (
    <Container
      sortableChildren
      anchor={0.5}
      scale={GAME_CONFIG.scale}
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

        text={(props.isStart ? '' : props.label)}
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
            fill: ['0xffffff'],
            stroke: '0x555555',
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
        texture={(props.isStart ? label_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={1}
        scale={1}
        x={-WIDTH * 2}
        y={-BOTTOM_HEIGHT + HEIGHT}
        texture={(props.isStart ? label_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={3}
        scale={1}
        x={0}
        y={BOTTOM_HEIGHT + HEIGHT}
        texture={(props.isStart ? label_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={2}
        scale={1}
        x={WIDTH}
        y={HEIGHT}
        texture={(props.isStart ? label_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={1}
        scale={1}
        x={WIDTH * 2}
        y={-BOTTOM_HEIGHT + HEIGHT}
        texture={(props.isStart ? label_bg : road_bg)}
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
        texture={(props.isStart ? left_road_bg : road_bg)}
      />

      <Sprite
        anchor={0.5}
        zIndex={-2}
        scale={1}
        x={0}
        y={-BOTTOM_HEIGHT * 3 + HEIGHT}
        texture={(props.isStart ? top_road_bg : road_bg)}
      />
      <Sprite
        anchor={0.5}
        zIndex={-1}
        scale={1}
        x={WIDTH}
        y={-BOTTOM_HEIGHT * 2 + HEIGHT}
        texture={(props.isStart ? right_road_bg : road_bg)}
      />
      {props.isQuarantaine &&
        <Sprite
          texture={karibacsik}
          scale={0.2}
          anchor={0.5}
          zIndex={5}
          x={-WIDTH * 1.25}
          y={-HEIGHT * 1.25}
        />
      }
      {props.isErasmus &&
        <Sprite
          texture={repulo}
          scale={{ x: -0.5, y: 0.5 }}
          anchor={0.5}
          zIndex={5}
          x={0}
          y={-BOTTOM_HEIGHT / 2}
        />
      }
      {props.isDoubler &&
        <Sprite
          texture={doubler}
          scale={{ x: 0.5, y: 0.5 }}
          anchor={0.5}
          zIndex={5}
          x={0}
          y={-BOTTOM_HEIGHT}
        />
      }
      {props.isStart &&
        <Sprite
          texture={tabla}
          scale={{ x: 1, y: 1 }}
          anchor={0.5}
          zIndex={5}
          x={0}
          y={-BOTTOM_HEIGHT - HEIGHT * 1.6}
        />
      }


    </Container>
  )
}
