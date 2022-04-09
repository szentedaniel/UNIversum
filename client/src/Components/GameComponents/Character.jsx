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


  const spring = { mass: 10, tension: 1000, friction: 1000 }
  const { userColor, mezoId, setMezoId } = props

  const [wantToBeCoord, setCoords] = useState(calcCoords(mezoId))
  const [currentMezoId, setCurrentMezoId] = useState(mezoId)
  const [tempCoord, setTempCoord] = useState(calcCoords(currentMezoId))
  useEffect(() => {
    setTimeout(() => {
      if (mezoId % 32 !== currentMezoId % 32) {
        setTempCoord(calcCoords(currentMezoId % 32 + 1))
        setCurrentMezoId(currentMezoId % 32 + 1)
      }
      //setCoords(calcCoords(mezoId))

    }, 300);
  }, [currentMezoId, mezoId, tempCoord])


  return (
    <Spring native
      to={tempCoord}
      // config={spring}
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