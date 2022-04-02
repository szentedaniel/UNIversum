import { fabClasses } from "@mui/material";

export const GAME_CONFIG = {
  width: 1920,
  height: 1080,
  scale: 0.65,
  main_container_scale_x: 1,
  main_container_scale_y: 1.1,
  PIECE_HEIGHT: 96 / 2,
  PIECE_BOTTOM_HEIGHT: 32,
  PIECE_WIDTH: 129 / 2,
  SPACE_X: 5,
  SPACE_Y: 2.5,
  WIDTH_NORMAL: (2 * this.PIECE_HEIGHT + this.PIECE_BOTTOM_HEIGHT) * this.scale,
  HEIGHT_NORMAL: this.WIDTH_NORMAL / 2,
  WIDTH_CORNER: (3 * this.PIECE_HEIGHT + this.PIECE_BOTTOM_HEIGHT) * this.scale,
  HEIGHT_CORNER: this.WIDTH_C / 2,
  map: [
    {
      id: 1,
      isNormal: false,
      isCorner: true,
      isChance: false,
      isTax: false,
      isStart: true,
      isQuarantaine: false,
      isDoubler: false,
      isErasmus: false,
      name: 'start',
      label: 'start',
      group: 0,
      x: 0,
      y: this.HEIGHT_NORMAL * 7 + this.SPACE_Y * 8 + this.HEIGHT_CORNER,
      z: 0
    }
  ]



}