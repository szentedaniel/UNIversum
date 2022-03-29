import React, { useCallback, useState } from 'react'
import { Stage, Sprite } from '@inlet/react-pixi/animated'
import { min } from 'lodash'
import * as PIXI from 'pixi.js'
import { Container, Graphics } from '@inlet/react-pixi'
import { useEffect } from 'react'
import { Switch } from '@mantine/core';
import { DropShadowFilter } from 'pixi-filters';
import CornerComponent from './GameComponents/CornerComponent'


export default function GameComponent(props) {
    const [width, setWidth] = useState(1920)
    const [height, setHeight] = useState(1280)
    const [scale, setScale] = useState(window.devicePixelRatio)
    const [isometric, setIsometric] = useState(true)
    useEffect(() => {
        // setWidth(window.innerWidth * 2);
        // setHeight(window.innerHeight * 2);
        // setScale(min([window.innerWidth / 1400, isometric ? (window.innerWidth / 900) : (window.innerWidth / 1400)]))
        setScale(window.devicePixelRatio)
    }, [isometric, props.width, props.height])

    useEffect(() => {
        console.log(scale);

    }, [scale])


    let shadowFilter = new DropShadowFilter({ rotation: 45, distance: 6 })

    // let texture = PIXI.Texture.from('../Images/logos/monopoly_logo.png');


    const stageProps = {
        height,
        width,
        options: {
            backgroundAlpha: 0,
            // antialias: true,
            resolution: PIXI.settings.RESOLUTION,
        },
    }

    const draw = useCallback((g) => {
        g.clear();
        g.lineStyle(2, 0xffffff);
        for (let i = -200; i <= 200; i += 50) {
            g.moveTo(-300, i);
            g.lineTo(300, i);
            g.moveTo(i, -300);
            g.lineTo(i, 300);
        }

        g.drawCircle(0, 0, 200);
    }, []);

    useEffect(() => {

    });

    return (
        <>
            {/* <Switch label={'Isometric'} checked={isometric} onChange={(event) => setIsometric(event.currentTarget.checked)} /> */}

            <Stage id='gameCanvas' {...stageProps}>
                {/* <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png" width={width} height={height} anchor={0.5} position={[width / 2, height / 2]} /> */}
                <Container
                    scale={[1, isometric ? (0.6) : 1]}
                    anchor={0.5}
                    position={[width / 2, height / 2]}


                >
                    <Container
                        anchor={0.5}
                        rotation={isometric && (-Math.PI / 4)}
                        filters={[shadowFilter]}

                    >


                        <Graphics draw={draw}

                        >


                        </Graphics>
                        {/* <Sprite

                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={75}
                            height={75}
                            x={-212.5}
                            y={212.5}
                        /> */}
                        <CornerComponent
                            x={-400}
                            y={400}
                            top={false}
                            left={true}
                        />

                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-400}
                            y={300}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-475}
                            y={300}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-400}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-475}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-400}
                            y={100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-475}
                            y={100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-400}
                            y={0}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-475}
                            y={0}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-400}
                            y={-100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-475}
                            y={-100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-400}
                            y={-200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-475}
                            y={-200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-400}
                            y={-300}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}


                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-475}
                            y={-300}
                        />
                        <CornerComponent
                            x={-400}
                            y={-400}
                            top={true}
                            left={true}
                        />

                        <CornerComponent
                            x={400}
                            y={400}
                            top={false}
                            left={false}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={450}
                            y={300}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={375}
                            y={300}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={450}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={375}
                            y={200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={450}
                            y={100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={375}
                            y={100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={450}
                            y={0}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={375}
                            y={0}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={450}
                            y={-100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={375}
                            y={-100}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={450}
                            y={-200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={375}
                            y={-200}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={450}
                            y={-300}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"
                            rotation={2 * Math.PI / 4}

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={375}
                            y={-300}
                        />
                        <CornerComponent
                            x={400}
                            y={-400}
                            top={true}
                            left={false}
                        />



                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={300}
                            y={-450}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={300}
                            y={-375}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={200}
                            y={-450}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={200}
                            y={-375}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={100}
                            y={-450}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={100}
                            y={-375}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-0}
                            y={-450}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-0}
                            y={-375}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-100}
                            y={-450}
                        /><Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-100}
                            y={-375}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-200}
                            y={-450}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-200}
                            y={-375}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-300}
                            y={-450}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-300}
                            y={-375}
                        />




                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={300}
                            y={400}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={300}
                            y={475}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={200}
                            y={400}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={200}
                            y={475}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={100}
                            y={400}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={100}
                            y={475}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={0}
                            y={400}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={0}
                            y={475}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-100}
                            y={400}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-100}
                            y={475}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-200}
                            y={400}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-200}
                            y={475}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={100}
                            x={-300}
                            y={400}
                        />
                        <Sprite
                            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"

                            anchor={0.5}
                            width={100}
                            height={50}
                            x={-300}
                            y={475}
                        />
                    </Container>
                </Container>
            </Stage>
        </>

    )
}
