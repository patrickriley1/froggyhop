import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate(); // Hook from React Router

  return (
    <body>
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'white'}}>Welcome to Froggy Hop!</h1>
        <div className='buttons' style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button onClick={() => navigate('/gamestart')} className="start-button">
            START
          </button>
          <button onClick={() => navigate('/About')} className="other-button">
            About
          </button>
          <button onClick={() => navigate('/Store')} className="other-button">
            Store
          </button>
        </div>
        <audio autoPlay loop>
        <source src="/Louisiana Cicada Frogs Tropical Storm ASMR Soundscape.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio autoPlay loop>
        <source src="/Luigi's Mansion_ Dark Moon - Gloomy Manor - Library Piano.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </header>
    </div>
    </body>
  )
}

export default App
