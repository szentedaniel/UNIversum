import { GAME_CONFIG } from "../gameConfig"

const calcPrice = (id, level, monopol = false) => {

  const start = 200000
  const diffOnLevel = 20000
  let buyScale = 0
  let tandijScale = 0
  if (level === 0) { buyScale = 0; tandijScale = 0 }
  if (level === 1) { buyScale = 0.2; tandijScale = 0.55 }
  if (level === 2) { buyScale = 0.2; tandijScale = 0.7 }
  if (level === 3) { buyScale = 0.3; tandijScale = 0.85 }
  if (level === 4) { buyScale = 0.4; tandijScale = 1 }

  let correctId = id

  for (let i = 1; i < id; i++) {
    if (!GAME_CONFIG.map[i].isNormal) {
      correctId--
    }
  }
  const toBuy = start + ((correctId - 1) * diffOnLevel) + ((level - 1) * ((start + ((correctId - 1) * diffOnLevel)) * buyScale))
  const tandij = toBuy * tandijScale

  return {
    toBuy: toBuy,
    tandij: tandij,
    sellToBank: toBuy * 0.9,
    sellToPlayer: toBuy * 1.5
  }
}

export default calcPrice