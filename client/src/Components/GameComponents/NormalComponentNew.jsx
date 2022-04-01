import { Container, Sprite } from '@inlet/react-pixi'
import React from 'react'
import * as PIXI from 'pixi.js'
import { ColorReplaceFilter } from 'pixi-filters';
import PropTypes from 'prop-types';
import { GROUP_COLORS } from '../../config';


export default function NormalComponentNew(props) {

    const label_bg = PIXI.Texture.from('../Images/game/isometriccity/PNG/cityTiles_072.png');
    const ehh = PIXI.Texture.from('../Images/game/isometriclandscape/PNG/landscapeTiles_067.png');

    const groupFilter = new ColorReplaceFilter()
    groupFilter.originalColor = 0xC2BEAC
    groupFilter.newColor = GROUP_COLORS[props.groupId].color
    groupFilter.epsilon = 0.095

    const HEIGHT = 96 / 2
    const BOTTOM_HEIGHT = 32
    const WIDTH = 129 / 2

    return (
        <Container
            on={(e) => console.log(e)}
            sortableChildren
            anchor={0.5}
            scale={{ x: (props.flip ? -1 : 1) * 0.65, y: 0.65 }}
            position={[0, 0]}
            {...props}
        >
            <Sprite
                anchor={0.5}
                zIndex={2}
                scale={1}
                x={-WIDTH}
                y={+ HEIGHT + HEIGHT / 2}
                texture={label_bg}
                filters={[(props.groupId && groupFilter)]}
            />
            <Sprite
                anchor={0.5}
                zIndex={1}
                scale={1}
                x={-WIDTH * 2}
                y={-BOTTOM_HEIGHT + HEIGHT + HEIGHT / 2}
                texture={label_bg}
                filters={[(props.groupId && groupFilter)]}
            />

            <Sprite
                anchor={0.5}
                zIndex={0}
                scale={1}
                x={0}
                y={-BOTTOM_HEIGHT + HEIGHT + HEIGHT / 2}
                texture={ehh}
            />
            <Sprite
                anchor={0.5}
                zIndex={-1}
                scale={1}
                x={-WIDTH}
                y={-BOTTOM_HEIGHT * 2 + HEIGHT + HEIGHT / 2}
                texture={ehh}
            />

            <Sprite
                anchor={0.5}
                zIndex={-2}
                scale={1}
                x={0}
                y={-BOTTOM_HEIGHT * 3 + HEIGHT + HEIGHT / 2}
                texture={ehh}
            />
            <Sprite
                anchor={0.5}
                zIndex={-1}
                scale={1}
                x={WIDTH}
                y={-BOTTOM_HEIGHT * 2 + HEIGHT + HEIGHT / 2}
                texture={ehh}
            />
        </Container>
    )
}

NormalComponentNew.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    flip: PropTypes.bool,
    groupId: PropTypes.number
}