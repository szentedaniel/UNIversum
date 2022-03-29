import '../App.css';
import React from "react";
import Particles from 'react-tsparticles';
import { SocketProvider } from '../Contexts/SocketContext';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';




import Create from '../Pages/Create'
import Rooms from '../Pages//Rooms'
import Room from '../Pages/Room'
import LangSelector from './LangSelector';
import Logo from './Logo'
import Home from '../Pages/Home';
import Loading from './Loading';
import InitSomeStuff from './InitSomeStuff';
import Game from '../Pages/Game';

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <SocketProvider>
      <Particles
        id="tsparticles"
        className='z-0'
        init={particlesInit}
        loaded={particlesLoaded}
        options={
          {
            "autoPlay": true,
            "background": {
              "color": {
                "value": "#145022"
              },
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover",
              "opacity": 1
            },
            "backgroundMask": {
              "composite": "destination-out",
              "cover": {
                "color": {
                  "value": "#fff"
                },
                "opacity": 1
              },
              "enable": false
            },
            "fullScreen": {
              "enable": true,
              "zIndex": 1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 120,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": true,
                  "mode": "push"
                },
                "onDiv": {
                  "selectors": "#repulse-div",
                  "enable": false,
                  "mode": "repulse",
                  "type": "circle"
                },
                "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                    "enable": false,
                    "force": 60,
                    "smooth": 10
                  }
                },
                "resize": true
              },
              "modes": {
                "attract": {
                  "distance": 200,
                  "duration": 0.4,
                  "easing": "ease-out-quad",
                  "factor": 1,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "bounce": {
                  "distance": 200
                },
                "bubble": {
                  "distance": 400,
                  "duration": 2,
                  "mix": false,
                  "opacity": 0.8,
                  "size": 40
                },
                "connect": {
                  "distance": 80,
                  "links": {
                    "opacity": 0.5
                  },
                  "radius": 60
                },
                "grab": {
                  "distance": 400,
                  "links": {
                    "blink": false,
                    "consent": false,
                    "opacity": 1
                  }
                },
                "light": {
                  "area": {
                    "gradient": {
                      "start": {
                        "value": "#ffffff"
                      },
                      "stop": {
                        "value": "#000000"
                      }
                    },
                    "radius": 1000
                  },
                  "shadow": {
                    "color": {
                      "value": "#000000"
                    },
                    "length": 2000
                  }
                },
                "push": {
                  "default": true,
                  "groups": [],
                  "quantity": 4
                },
                "remove": {
                  "quantity": 2
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad"
                },
                "slow": {
                  "factor": 3,
                  "radius": 200
                },
                "trail": {
                  "delay": 1,
                  "pauseOnStop": false,
                  "quantity": 1
                }
              }
            },
            "manualParticles": [],
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            },
            "particles": {
              "bounce": {
                "horizontal": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                },
                "vertical": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                }
              },
              "collisions": {
                "bounce": {
                  "horizontal": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  },
                  "vertical": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  }
                },
                "enable": false,
                "mode": "bounce",
                "overlap": {
                  "enable": true,
                  "retries": 0
                }
              },
              "color": {
                "value": "#ffffff",
                "animation": {
                  "h": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                  },
                  "s": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                  },
                  "l": {
                    "count": 0,
                    "enable": false,
                    "offset": 0,
                    "speed": 1,
                    "sync": true
                  }
                }
              },
              "destroy": {
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 3
                  },
                  "rate": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": {
                      "min": 4,
                      "max": 9
                    }
                  },
                  "sizeOffset": true
                }
              },
              "gradient": [],
              "groups": {},
              "life": {
                "count": 0,
                "delay": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "sync": false
                },
                "duration": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.0001
                  },
                  "value": 0,
                  "sync": false
                }
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "#000"
                },
                "consent": false,
                "distance": 150,
                "enable": false,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#00ff00"
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 1,
                "warp": false
              },
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 90
                },
                "attract": {
                  "distance": 200,
                  "enable": false,
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 50
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                  "acceleration": 0,
                  "enable": false
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fillColor": {
                    "value": "#000000"
                  }
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "area": 800,
                  "factor": 1000
                },
                "limit": 0,
                "value": 80
              },
              "opacity": {
                "random": {
                  "enable": true,
                  "minimumValue": 0.1
                },
                "value": {
                  "min": 0.1,
                  "max": 1
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 1,
                  "sync": false,
                  "destroy": "none",
                  "startValue": "random",
                  "minimumValue": 0.2
                }
              },
              "orbit": {
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 45
                },
                "width": 1
              },
              "reduceDuplicates": false,
              "repulse": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
              },
              "roll": {
                "darken": {
                  "enable": false,
                  "value": 0
                },
                "enable": false,
                "enlighten": {
                  "enable": false,
                  "value": 0
                },
                "mode": "vertical",
                "speed": 25
              },
              "rotate": {
                "random": {
                  "enable": true,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
                },
                "direction": "random",
                "path": false
              },
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "options": {
                  "character": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                  },
                  "char": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                  },
                  "polygon": {
                    "sides": 5
                  },
                  "star": {
                    "sides": 5
                  },
                  "image": [
                    {
                      "src": "https://particles.js.org/images/fruits//apple.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//avocado.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//banana.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//berries.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//cherry.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//grapes.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//lemon.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//orange.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//peach.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//pear.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//pepper.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//plum.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//star.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//strawberry.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//watermelon.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//watermelon_slice.png",
                      "width": 32,
                      "height": 32
                    }
                  ],
                  "images": [
                    {
                      "src": "https://particles.js.org/images/fruits//apple.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//avocado.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//banana.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//berries.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//cherry.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//grapes.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//lemon.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//orange.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//peach.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//pear.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//pepper.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//plum.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//star.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//strawberry.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//watermelon.png",
                      "width": 32,
                      "height": 32
                    },
                    {
                      "src": "https://particles.js.org/images/fruits//watermelon_slice.png",
                      "width": 32,
                      "height": 32
                    }
                  ]
                },
                "type": "image"
              },
              "size": {
                "random": {
                  "enable": false,
                  "minimumValue": 1
                },
                "value": 16,
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 40,
                  "sync": false,
                  "destroy": "none",
                  "startValue": "random",
                  "minimumValue": 0.1
                }
              },
              "stroke": {
                "width": 0,
                "color": {
                  "value": "#000000",
                  "animation": {
                    "h": {
                      "count": 0,
                      "enable": false,
                      "offset": 0,
                      "speed": 1,
                      "sync": true
                    },
                    "s": {
                      "count": 0,
                      "enable": false,
                      "offset": 0,
                      "speed": 1,
                      "sync": true
                    },
                    "l": {
                      "count": 0,
                      "enable": false,
                      "offset": 0,
                      "speed": 1,
                      "sync": true
                    }
                  }
                }
              },
              "tilt": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "enable": false
              },
              "twinkle": {
                "lines": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                },
                "particles": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                }
              },
              "wobble": {
                "distance": 5,
                "enable": false,
                "speed": 50
              },
              "zIndex": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
              }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "style": {},
            "themes": [],
            "zLayers": 100
          }
        }
      />
      <div className="App bg-proba-500 text-proba-200 overflow-hidden">
        <div className='
        flex
        flex-1
        relative
        justify-center
        items-center
        overflow-auto'>
          <div className='border-4 border-solid border-proba-100/20 sm:border-none xs:border-none rounded-xl flex flex-column w-[90%] h-[90%] m-auto'>
            {/* //transform-none xl:scale-[.8] lg:scale-[.65] md:scale-[0.5] */}
            <div className='flex flex-1 items-center relative flex-col self-stretch'>
              <InitSomeStuff />
              <LangSelector />
              <Logo />
              <Loading />
              <Toaster
                position="bottom-left"
                reverseOrder={false}
              />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/room/:code" element={<Room />} />
                </Routes>
              </BrowserRouter>

            </div>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
