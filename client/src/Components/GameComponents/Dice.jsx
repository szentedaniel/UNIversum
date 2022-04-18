import React from 'react'

export default function Dice(props) {

  const { face, rolling } = props
  return (
    <div className={`m-5 min-w-fit min-h-fit p-2 bg-red-600 rounded-2xl shadow-lg ${rolling && 'Die-shaking'}`}>
      <img src={`../../Images/game/dice/dice_${face}.png`} alt="dice" />
    </div>
  )
}
