import React, { useCallback, useState } from 'react'
import { Stage, Sprite } from '@inlet/react-pixi/animated'
import { min } from 'lodash'
import * as PIXI from 'pixi.js'
import { Container, Graphics } from '@inlet/react-pixi'
import { useEffect } from 'react'
import { Switch } from '@mantine/core';
import { DropShadowFilter } from 'pixi-filters';


export default function GameComponent(props) {
    const [width, setWidth] = useState(props.width)
    const [height, setHeight] = useState(props.height)
    const [scale, setScale] = useState(1.0)
    const [isometric, setIsometric] = useState(true)
    useEffect(() => {
        setWidth(props.width);
        setHeight(props.height);
        setScale(min([props.width / 1400, isometric ? (props.height / 1000) : (props.height / 1400)]))



    }, [isometric, props.height, props.width])

    let shadowFilter = new DropShadowFilter({ rotation: 45, distance: 6 })

    // let texture = PIXI.Texture.from('../Images/logos/monopoly_logo.png');

    const stageProps = {
        height,
        width,
        options: {
            backgroundAlpha: 0,
            antialias: true,
            resolution: PIXI.settings.RESOLUTION,
        },
    }

    const draw = useCallback((g) => {
        g.clear();
        g.lineStyle(2, 0xffffff);
        for (let i = -100; i <= 100; i += 50) {
            g.moveTo(-150, i);
            g.lineTo(150, i);
            g.moveTo(i, -150);
            g.lineTo(i, 150);
        }

        g.drawCircle(0, 0, 100);
    }, []);

    return (
        <>
            <Switch label={'Isometric'} checked={isometric} onChange={(event) => setIsometric(event.currentTarget.checked)} />

            <Stage {...stageProps}>
                {/* <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png" width={width} height={height} anchor={0.5} position={[width / 2, height / 2]} /> */}
                <Container
                    scale={[1 * scale, isometric ? (0.6 * scale) : 1 * scale]}
                    anchor={0.5}
                    position={[width / 2, height / 2]}


                >
                    <Container
                        anchor={0.5}
                        rotation={isometric && (-Math.PI / 4)}
                        scale={[2, 2]}
                        filters={[shadowFilter]}

                    >


                        <Graphics draw={draw}

                        >


                        </Graphics>
                        <Sprite

                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={75}
                            height={75}
                            x={-212.5}
                            y={212.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-200}
                            y={150}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-237.5}
                            y={150}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-200}
                            y={100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-237.5}
                            y={100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-200}
                            y={50}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-237.5}
                            y={50}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-200}
                            y={0}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-237.5}
                            y={0}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-200}
                            y={-50}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-237.5}
                            y={-50}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-200}
                            y={-100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-237.5}
                            y={-100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-200}
                            y={-150}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-237.5}
                            y={-150}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={75}
                            height={75}
                            x={-212.5}
                            y={-212.5}
                        />

                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={75}
                            height={75}
                            x={212.5}
                            y={212.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={225}
                            y={150}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={187.5}
                            y={150}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={225}
                            y={100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={187.5}
                            y={100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={225}
                            y={50}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={187.5}
                            y={50}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={225}
                            y={0}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={187.5}
                            y={0}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={225}
                            y={-50}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={187.5}
                            y={-50}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={225}
                            y={-100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={187.5}
                            y={-100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={225}
                            y={-150}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={187.5}
                            y={-150}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={75}
                            height={75}
                            x={212.5}
                            y={-212.5}
                        />



                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={150}
                            y={-225}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={150}
                            y={-187.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={100}
                            y={-225}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={100}
                            y={-187.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={50}
                            y={-225}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={50}
                            y={-187.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-0}
                            y={-225}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-0}
                            y={-187.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-50}
                            y={-225}
                        /><Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-50}
                            y={-187.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-100}
                            y={-225}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-100}
                            y={-187.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-150}
                            y={-225}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-150}
                            y={-187.5}
                        />




                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={150}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={150}
                            y={237.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={100}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={100}
                            y={237.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={50}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={50}
                            y={237.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={0}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={0}
                            y={237.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-50}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-50}
                            y={237.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-100}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-100}
                            y={237.5}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={50}
                            x={-150}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={50}
                            height={25}
                            x={-150}
                            y={237.5}
                        />
                    </Container>
                </Container>
            </Stage>
        </>

    )
}
