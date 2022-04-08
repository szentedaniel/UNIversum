import { Sprite } from '@inlet/react-pixi/animated'
import { Texture } from 'pixi.js'
import React, { useEffect, useState } from 'react'
import { Spring } from 'react-spring'
import { calcCoords } from '../../Utils/calcCoords'

export default function Character(props) {

  let texture = Texture.from('../images/game/moreenemiesanimations/Alien sprites/alienPink.png')
  if (props.userColor === 1) texture = Texture.from('../images/game/moreenemiesanimations/Alien sprites/alienBlue.png')
  else if (props.userColor === 2) texture = Texture.from('../images/game/moreenemiesanimations/Alien sprites/alienGreen.png')
  else if (props.userColor === 3) texture = Texture.from('../images/game/moreenemiesanimations/Alien sprites/alienYellow.png')


  const spring = { mass: 10, tension: 1000, friction: 350 }
  const { userColor, mezoId, setMezoId } = props

  const [coords, setCoords] = useState(calcCoords(mezoId))
  useEffect(() => {
    console.log('valtozik a mezoId');
  }, [mezoId])


  return (
    <Spring native
      to={calcCoords(mezoId)}
      config={spring}
      {...props}>
      {props => (
        <Sprite
          alpha={0.8}
          anchor={[0.5, 0.7]}
          texture={texture}
          {...props}
        />
      )}
    </Spring>

  )
}