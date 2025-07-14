import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate(); // Hook from React Router

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: '#34ae0f'}}>Welcome to Froggy Hop!</h1>
        <p>The Makers of this game are Andrew and Patrick, Andrew made this game because he likes games and his favorite animal is frogs. Patrick made this game, because he likes coding, and his cousin likes frogs.</p>
        <button onClick={() => navigate('/gamestart')} className="start-button">
          START
        </button>
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
  )
}

export default App
