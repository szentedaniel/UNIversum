import { Sprite } from '@inlet/react-pixi/animated'
import { Texture } from 'pixi.js'
import React, { useEffect, useState } from 'react'
import { Spring } from 'react-spring'
import { calcCoords } from '../../Utils/calcCoords'
import { nextPlayer, setShowBuyPanel } from '../../Store/slices/gameStateSlice'

export default function Character(props) {


  let texture = Texture.from('../images/game/moreenemiesanimations/Alien sprites/alienPink.png')
  if (props.colorCode === 1) texture = Texture.from('../images/game/moreenemiesanimations/Alien sprites/alienBlue.png')
  else if (props.colorCode === 2) texture = Texture.from('../images/game/moreenemiesanimations/Alien sprites/alienGreen.png')
  else if (props.colorCode === 3) texture = Texture.from('../images/game/moreenemiesanimations/Alien sprites/alienYellow.png')

  const spring = { mass: 10, tension: 1000, friction: 1000 }
  const { colorCode, field, showDiceRoll, dispatch, currentPlayer } = props

  const [isDoneWithSteps, setIsDoneWithSteps] = useState(false)
  const [currentMezoId, setCurrentMezoId] = useState(field)
  const [tempCoord, setTempCoord] = useState(calcCoords(currentMezoId))

  useEffect(() => {
    if (colorCode === currentPlayer) {
      if (field % 32 !== currentMezoId % 32) {
        setTimeout(() => {
          setTempCoord(calcCoords(currentMezoId % 32 + 1))
          setCurrentMezoId(currentMezoId % 32 + 1)
        }, 300);
      } else {
        setIsDoneWithSteps(true)
      }

    }
  }, [colorCode, currentMezoId, currentPlayer, dispatch, field, tempCoord])


  useEffect(() => {
    if (!showDiceRoll && isDoneWithSteps && (colorCode === currentPlayer)) {
      dispatch(setShowBuyPanel(true))
      //dispatch(nextPlayer())
    }
  }, [isDoneWithSteps, showDiceRoll])



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