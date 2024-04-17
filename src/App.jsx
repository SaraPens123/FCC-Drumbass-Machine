import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [activeKey, setActiveKey] = useState('')
const [activeName, setActiveName] = useState('')

const drumPads = [
  {
    keyCode: 81,
    name: "Heater 1",
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    name: "Heater 2",
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    name: "Heater 3",
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" 
  },
  {
    keyCode: 65,
    name: "Heater 4",
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    name: "Clap",
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    name: "Open HH",
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    name: "Kick n' Hat",
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    name: "Kick",
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    name: "Closed HH",
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

useEffect(() => {
    document.addEventListener('keydown', (event) => {
     // const char = event.key.toUpperCase()
     // for(let i=0; i < drumPads.length; i++) {
     //    let current = drumPads[i] 
     //    if (char === current.text) {
     //      playSound(char, current.name)
     //    }
     // }

     // const char = event.key.toUpperCase()
     // for (let current of drumPads) {
     //     if(char === current.text) {
     //       playSound(char, current.name)
     //     }
     // }
    
    const char = event.key.toUpperCase()
    this.drumPads.forEach((current) => {
        if (char === current.text){
          playSound(char, current.name)
        }
    })

    })
}, [])

function playSound(selector, name) {
  const audio = document.getElementById(selector)
  audio.play()
  setActiveKey(selector)
  setActiveName(name)
}

  return (
    <div className="App">
        <div id="drum-machine" className="machine">
            <div className="display-container">
              <div id="display" className="display-drum">{activeKey}</div>
              <img alt="" src="https://png.pngtree.com/png-clipart/20230929/original/pngtree-drum-drum-icon-in-the-middle-round-circle-vector-png-image_13012636.png" className="drum-image"></img>
              <div className="display-name">{activeName}</div>
            </div>
            <div className="drum-pads">
              {drumPads.map((drumPad) => (
                  <div 
                        key={drumPad.src}
                        onClick={() => {
                        playSound(drumPad.text, drumPad.name)
                        }
                       }
                       className= 'drum-pad'
                       id={drumPad.src}>
                       {drumPad.text}
                    <audio 
                        className="clip"
                        id={drumPad.text}
                        src={drumPad.src}>
                    </audio>
              </div>
                )
              )
            }
            </div>
        </div>
    </div>
  )
  ;
}

export default App;
