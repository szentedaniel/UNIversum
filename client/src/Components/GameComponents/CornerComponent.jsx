import { Container, PixiComponent, Sprite, Text } from '@inlet/react-pixi'
import React from 'react'
import PropTypes from 'prop-types';
import { TextStyle } from 'pixi.js';



export default function CornerComponent(props) {

  const { scale } = props
  return (
    <Container
      {...props}
    >

      <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
        rotation={2 * Math.PI / 4}
        anchor={0.5}
        width={150}
        height={150}
        x={25 * ((props.left) ? -1 : 1)}
        y={25 * ((props.top) ? -1 : 1)}
      />
      <Container
        scale={{ x: 0.6, y: 1 }}
        rotation={1 * Math.PI / 4}
        x={25 * ((props.left) ? -1 : 1)}
        y={25 * ((props.top) ? -1 : 1)}
      >
        <Text
          text={`Hello \nWorld`}
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
              stroke: '#004620',
              fontSize: 40,
              fontWeight: 'lighter',
              lineJoin: 'round',
              strokeThickness: 10,
            })
          }
        />
      </Container>

    </Container>
  )
}

CornerComponent.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  left: PropTypes.bool,
  top: PropTypes.bool,
  scale: PropTypes.number
};