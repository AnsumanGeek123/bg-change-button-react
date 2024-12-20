import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState('black');

  return (
    <div className="bg-slate-600 w-full h-screen flex flex-col items-center justify-center space-y-4"
    style={{backgroundColor: colour}}>
      <button 
      onClick={()=> {return setColour('red')}}
      className="bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-red-600 transition duration-300">
        Red
      </button>
      <button 
      onClick={()=> {return setColour('blue')}}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
        Blue
      </button>
      <button 
      onClick={()=> {return setColour('green')}}
      className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition duration-300">
        Green
      </button>
    </div>
  );
}


export default App
