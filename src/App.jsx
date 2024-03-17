import React, { useState } from 'react'
import './App.css'

export default function App() {

    const [color, setColor] = useState("#000000")

    const utilityFunction = (length) => Math.floor(Math.random() * length)

    function generateHexColor() {
      const hex = [0,1,2,3,4,5,6,7,7,8,9,"A","B","C","D","E","F"]
      let hexColor = "#"

      for(let i = 0; i < 6; i++) {
        hexColor += hex[utilityFunction(hex.length)] 
      }
      setColor(hexColor)
    }

    function generateRgbColor() {
      let red = utilityFunction(256)
      let blue = utilityFunction(256)
      let green = utilityFunction(256)

      setColor(`rgb(${red}, ${blue}, ${green})`)
      
    }
  
  return (
    <div className='container' style={{background:color}}>
    <h1>{color}</h1>
      <div className='btn'>
        <button onClick={generateHexColor}>Random Hex Colour</button>
        <button onClick={generateRgbColor}>Random RGB Colour</button>
      </div>
    </div>
  )
}
