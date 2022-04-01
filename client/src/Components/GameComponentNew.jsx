import { Container, Sprite, Stage } from '@inlet/react-pixi'
import React, { useState } from 'react'
import * as PIXI from 'pixi.js'
import { forEachRight } from 'lodash'
import { ColorReplaceFilter, DropShadowFilter } from 'pixi-filters'
import NormalComponentNew from './GameComponents/NormalComponentNew'
import CornerComponentNew from './GameComponents/CornerComponentNew'

export default function GameComponentNew() {
  const [width, setWidth] = useState(1920)
  const [height, setHeight] = useState(1080)
  const label_bg = PIXI.Texture.from('../Images/game/isometriccity/PNG/cityTiles_072.png');

  const scale = 0.65

  const PIECE_HEIGHT = 96 / 2
  const PIECE_BOTTOM_HEIGHT = 32
  const PIECE_WIDTH = 129 / 2
  const SPACE_X = 5
  const SPACE_Y = 2.5

  const WIDTH_N = (2 * PIECE_HEIGHT + PIECE_BOTTOM_HEIGHT) * scale
  const HEIGHT_N = WIDTH_N / 2
  const WIDTH_C = (3 * PIECE_HEIGHT + PIECE_BOTTOM_HEIGHT) * scale
  const HEIGHT_C = WIDTH_C / 2


  let shadowFilter = new DropShadowFilter({ rotation: 45, distance: 6 })

  const stageProps = {
    height,
    width,
    options: {
      backgroundAlpha: 0,
      // antialias: true,
      resolution: PIXI.settings.RESOLUTION,
    },
  }
  const e = new PIXI.utils.EventEmitter()
  const context = { foo: 'bar' };

  function emitted() {
    console.log('valami'); // true
  }
  const asd = e.on('pointerdown', emitted, context)
  return (
    <>
      <Stage {...stageProps}>
        <Container
          interactive={true}
          interactiveChildren={true}
          anchor={0.5}
          position={[width / 2, height / 2]}
          sortableChildren
          filters={[shadowFilter]}

        >


          <NormalComponentNew
            zIndex={-1}
            x={-WIDTH_N - SPACE_X}
            y={HEIGHT_N * 7 + SPACE_Y * 7}
            groupId={1}

          />
          <NormalComponentNew
            zIndex={-2}
            x={(-WIDTH_N - SPACE_X) * 2}
            y={HEIGHT_N * 6 + SPACE_Y * 6}
            groupId={1}


          />
          <NormalComponentNew
            zIndex={-3}
            x={(-WIDTH_N - SPACE_X) * 3}
            y={HEIGHT_N * 5 + SPACE_Y * 5}
            groupId={1}

          />
          <NormalComponentNew
            zIndex={-4}
            x={(-WIDTH_N - SPACE_X) * 4}
            y={HEIGHT_N * 4 + SPACE_Y * 4}
            groupId={0}

          />
          <NormalComponentNew
            zIndex={-5}
            x={(-WIDTH_N - SPACE_X) * 5}
            y={HEIGHT_N * 3 + SPACE_Y * 3}
            groupId={2}

          />
          <NormalComponentNew
            zIndex={-6}
            x={(-WIDTH_N - SPACE_X) * 6}
            y={HEIGHT_N * 2 + SPACE_Y * 2}
            groupId={2}
          />
          <NormalComponentNew
            zIndex={-7}
            x={(-WIDTH_N - SPACE_X) * 7}
            y={HEIGHT_N * 1 + SPACE_Y * 1}
            groupId={2}
          />

          <NormalComponentNew
            zIndex={-1}
            x={(WIDTH_N + SPACE_X) * 1}
            y={HEIGHT_N * 7 + SPACE_Y * 7}
            flip={true}

            groupId={8}
          />

          <NormalComponentNew
            zIndex={-2}
            x={(WIDTH_N + SPACE_X) * 2}
            y={HEIGHT_N * 6 + SPACE_Y * 6}
            flip={true}
            groupId={0}

          />
          <NormalComponentNew
            zIndex={-3}
            x={(WIDTH_N + SPACE_X) * 3}
            y={HEIGHT_N * 5 + SPACE_Y * 5}
            flip={true}
            groupId={8}

          />
          <NormalComponentNew
            zIndex={-4}
            x={(WIDTH_N + SPACE_X) * 4}
            y={HEIGHT_N * 4 + SPACE_Y * 4}
            flip={true}
            groupId={0}


          />
          <NormalComponentNew
            zIndex={-5}
            x={(WIDTH_N + SPACE_X) * 5}
            y={HEIGHT_N * 3 + SPACE_Y * 3}
            flip={true}
            groupId={7}

          />
          <NormalComponentNew
            zIndex={-6}
            x={(WIDTH_N + SPACE_X) * 6}
            y={HEIGHT_N * 2 + SPACE_Y * 2}
            flip={true}
            groupId={7}

          />
          <NormalComponentNew
            zIndex={-7}
            x={(WIDTH_N + SPACE_X) * 7}
            y={HEIGHT_N * 1 + SPACE_Y * 1}
            flip={true}
            groupId={0}

          />
          {/* BAL FELSŐ */}

          <NormalComponentNew
            zIndex={-8}
            x={-((WIDTH_N + SPACE_X) * 7 + WIDTH_N / 2)}
            y={-HEIGHT_N * 2 - SPACE_Y * 1 + HEIGHT_N / 2}
            flip={true}
            groupId={3}

          />
          <NormalComponentNew
            zIndex={-9}
            x={-((WIDTH_N + SPACE_X) * 6 + WIDTH_N / 2)}
            y={-HEIGHT_N * 3 - SPACE_Y * 2 + HEIGHT_N / 2}
            flip={true}
            groupId={3}


          />
          <NormalComponentNew
            zIndex={-10}
            x={-((WIDTH_N + SPACE_X) * 5 + WIDTH_N / 2)}
            y={-HEIGHT_N * 4 - SPACE_Y * 3 + HEIGHT_N / 2}
            flip={true}
            groupId={3}

          />
          <NormalComponentNew
            zIndex={-11}
            x={-((WIDTH_N + SPACE_X) * 4 + WIDTH_N / 2)}
            y={-HEIGHT_N * 5 - SPACE_Y * 4 + HEIGHT_N / 2}
            flip={true}
            groupId={0}

          />
          <NormalComponentNew
            zIndex={-12}
            x={-((WIDTH_N + SPACE_X) * 3 + WIDTH_N / 2)}
            y={-HEIGHT_N * 6 - SPACE_Y * 5 + HEIGHT_N / 2}
            flip={true}
            groupId={4}

          />
          <NormalComponentNew
            zIndex={-13}
            x={-((WIDTH_N + SPACE_X) * 2 + WIDTH_N / 2)}
            y={-HEIGHT_N * 7 - SPACE_Y * 6 + HEIGHT_N / 2}
            flip={true}
            groupId={0}

          />
          <NormalComponentNew
            zIndex={-14}
            x={-((WIDTH_N + SPACE_X) * 1 + WIDTH_N / 2)}
            y={-HEIGHT_N * 8 - SPACE_Y * 7 + HEIGHT_N / 2}
            flip={true}
            groupId={4}

          />


          {/* JOBBBB FELSŐ */}

          <NormalComponentNew
            zIndex={-8}
            x={((WIDTH_N + SPACE_X) * 7 + WIDTH_N / 2)}
            y={-HEIGHT_N * 2 - SPACE_Y * 1 + HEIGHT_N / 2}
            groupId={6}

          />
          <NormalComponentNew
            zIndex={-9}
            x={((WIDTH_N + SPACE_X) * 6 + WIDTH_N / 2)}
            y={-HEIGHT_N * 3 - SPACE_Y * 2 + HEIGHT_N / 2}
            groupId={6}


          />
          <NormalComponentNew
            zIndex={-10}
            x={((WIDTH_N + SPACE_X) * 5 + WIDTH_N / 2)}
            y={-HEIGHT_N * 4 - SPACE_Y * 3 + HEIGHT_N / 2}
            groupId={6}

          />
          <NormalComponentNew
            zIndex={-11}
            x={((WIDTH_N + SPACE_X) * 4 + WIDTH_N / 2)}
            y={-HEIGHT_N * 5 - SPACE_Y * 4 + HEIGHT_N / 2}
            groupId={0}

          />
          <NormalComponentNew
            zIndex={-12}
            x={((WIDTH_N + SPACE_X) * 3 + WIDTH_N / 2)}
            y={-HEIGHT_N * 6 - SPACE_Y * 5 + HEIGHT_N / 2}
            groupId={5}

          />
          <NormalComponentNew
            zIndex={-13}
            x={((WIDTH_N + SPACE_X) * 2 + WIDTH_N / 2)}
            y={-HEIGHT_N * 7 - SPACE_Y * 6 + HEIGHT_N / 2}
            groupId={0}

          />
          <NormalComponentNew
            zIndex={-14}
            x={((WIDTH_N + SPACE_X) * 1 + WIDTH_N / 2)}
            y={-HEIGHT_N * 8 - SPACE_Y * 7 + HEIGHT_N / 2}
            groupId={5}

          />

          <CornerComponentNew
            y={HEIGHT_N * 7 + SPACE_Y * 8 + HEIGHT_C}
            start={true}
          />
          <Sprite
            interactive={true}
            on={asd}
            anchor={0.5}
            texture={label_bg}
          />

          <CornerComponentNew
            zIndex={-15}
            y={-HEIGHT_N * 8 + SPACE_Y * 5 - HEIGHT_C}
          />

          <CornerComponentNew
            zIndex={-8}
            x={-((WIDTH_N + SPACE_X) * 8 + WIDTH_N / 2)}
            y={0 - SPACE_Y * 2}
          />

          <CornerComponentNew
            zIndex={-8}
            x={+((WIDTH_N + SPACE_X) * 8 + WIDTH_N / 2)}
            y={0 - SPACE_Y * 2}
          />


        </Container>
      </Stage>
    </>
  )
}
