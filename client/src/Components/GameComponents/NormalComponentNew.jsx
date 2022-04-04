import { Container, Sprite, Text } from '@inlet/react-pixi'
import React from 'react'
import * as PIXI from 'pixi.js'
import { ColorReplaceFilter, MultiColorReplaceFilter } from 'pixi-filters';
import PropTypes from 'prop-types';
import { GROUP_COLORS } from '../../config';
import { TextStyle } from 'pixi.js';
import { GAME_CONFIG } from '../../gameConfig';


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

    const calcTextCoords = (text) => {
        let foo = text.toString().trim()
        if (foo.includes(' ') && foo.length > 9) {
            return { x: -33, y: 7 }
        } else {
            return { x: -50, y: 14 }
        }
    }
    const textCoords = calcTextCoords(props.label)

    const pointerDown = (e) => {
        e.currentTarget.y -= 10
    }
    const pointerUp = (e) => {
        if (e.currentTarget.y === props.y - 10) {
            e.currentTarget.y += 10
        }
    }
    const pointerUpOutside = (e) => {
        if (e.currentTarget.y === props.y - 10) {
            e.currentTarget.y += 10
        }
    }



    return (
        <Container
            sortableChildren
            anchor={0.5}
            scale={{ x: (props.flip ? -1 : 1) * GAME_CONFIG.scale, y: GAME_CONFIG.scale }}
            interactive={true}
            //pointerdown={(e) => e.currentTarget.y -= 10}
            //pointerup={(e) => e.currentTarget.y += 10}
            //pointerout={(e) => e.currentTarget.y += 10}
            pointerdown={pointerDown}
            pointerupoutside={pointerUpOutside}
            pointerup={pointerUp}

            {...props}
        >
            <Container
                zIndex={90}
                scale={[1, 1.2]}
                rotation={Math.PI / 6.66667}
                anchor={0.5}
                x={textCoords.x}
                y={textCoords.y}
            >


                <Text
                    zIndex={90}
                    text={props.label.toUpperCase()} //  new Intl.NumberFormat('en-GB', { notation: 'compact' }).format(1190000)
                    anchor={0.5}
                    skew={[-Math.PI / 4, 0]}
                    scale={{ x: (props.flip ? -1 : 1) * 1, y: 1 }}
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
                            fill: ['#000000'],
                            stroke: '#eeeeee',
                            fontSize: 22,
                            fontWeight: 'bold',
                            lineJoin: 'round',
                            strokeThickness: 4,
                            wordWrap: true,
                            wordWrapWidth: 150,
                            breakWords: false,
                            lineHeight: 30
                        })
                    }
                />
            </Container>

            <Container
                zIndex={90}
                scale={[1, 1.2]}
                rotation={Math.PI / 6.66667}
                anchor={0.5}
                x={-105}
                y={43}
            >


                <Text
                    zIndex={90}
                    text={new Intl.NumberFormat('en-GB', { notation: 'compact' }).format(800000)} //  new Intl.NumberFormat('en-GB', { notation: 'compact' }).format(1190000)
                    anchor={0.5}
                    skew={[-Math.PI / 4, 0]}
                    scale={{ x: (props.flip ? -1 : 1) * 1, y: 1 }}
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
                            fill: ['#000000'],
                            stroke: '#eeeeee',
                            fontSize: 45,
                            fontWeight: 'bold',
                            lineJoin: 'round',
                            strokeThickness: 4,
                            wordWrap: true,
                            wordWrapWidth: 150,
                            breakWords: false,
                            textBaseline: 'bottom',
                            lineHeight: 30
                        })
                    }
                />
            </Container>


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
                x={-WIDTH * 2 + 1}
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