import { render, unmountComponentAtNode, Text } from '@inlet/react-pixi';
import { Application } from 'pixi.js';

const app = new Application({
    width: window.innerWidth * 3,
    height: window.innerHeight * 3,
    resolution: 1,
});

render(<Text text="Hello World" />, app.stage);

// clean up on unmount
// this removes the container from roots list
unmountComponentAtNode(app.stage);