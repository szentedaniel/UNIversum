import { GAME_CONFIG } from "../gameConfig"

export const calcCoords = (id) => {
  const g = GAME_CONFIG
  const WIDTH_NORMAL = (2 * g.PIECE_HEIGHT + g.PIECE_BOTTOM_HEIGHT) * g.scale
  const HEIGHT_NORMAL = WIDTH_NORMAL / 2
  const WIDTH_CORNER = (3 * g.PIECE_HEIGHT + g.PIECE_BOTTOM_HEIGHT) * g.scale
  const HEIGHT_CORNER = WIDTH_CORNER / 2

  if (id === 1) {
    return {
      x: 0,
      y: HEIGHT_NORMAL * 7 + g.SPACE_Y * 8 + HEIGHT_CORNER
    }
  } else if (id === 9) {
    return {
      x: -((WIDTH_NORMAL + g.SPACE_X) * 8 + WIDTH_NORMAL / 2),
      y: (0 - g.SPACE_Y * 2)
    }
  } else if (id === 17) {
    return {
      x: 0,
      y: -HEIGHT_NORMAL * 7 - g.SPACE_Y * 12 - HEIGHT_CORNER
    }
  } else if (id === 25) {
    return {
      x: ((WIDTH_NORMAL + g.SPACE_X) * 8 + WIDTH_NORMAL / 2),
      y: (0 - g.SPACE_Y * 2)
    }

  } else if (id > 1 && id < 9) {
    return {
      x: (-WIDTH_NORMAL - g.SPACE_X) * (id - 1),
      y: (HEIGHT_NORMAL * (9 - id) + g.SPACE_Y * (9 - id))
    }
  } else if (id > 9 && id < 17) {
    return {
      x: -((WIDTH_NORMAL + g.SPACE_X) * (7 - (id % 10)) + WIDTH_NORMAL / 2),
      y: (-HEIGHT_NORMAL * (2 + (id % 10)) - g.SPACE_Y * (1 + (id % 10)) + HEIGHT_NORMAL / 2)
    }
  } else if (id > 17 && id < 25) {
    return {
      x: ((WIDTH_NORMAL + g.SPACE_X) * (id % 17) + WIDTH_NORMAL / 2),
      y: (-HEIGHT_NORMAL * (9 - (id % 17)) - g.SPACE_Y * (8 - (id % 17)) + HEIGHT_NORMAL / 2)
    }
  } else if (id > 25 && id <= 32) {
    return {
      x: ((WIDTH_NORMAL + g.SPACE_X) * (8 - (id % 25))),
      y: (HEIGHT_NORMAL * ((id % 25)) + g.SPACE_Y * (id % 25))
    }
  } else return { x: 0, y: 0 }
}