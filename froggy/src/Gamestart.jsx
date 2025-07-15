import react from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import './index.css'

function Gamestart() {
  const navigate = useNavigate(); // Hook from React Router

  return (
    <body className='Gamestart-body'>
      <div className="Gamestart">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>

        <header className="Gamestart-header">
          <audio autoPlay >
            <source src="/Louisiana Cicada Frogs Tropical Storm ASMR Soundscape.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio autoPlay loop>
            <source src="/Luigi's Mansion_ Dark Moon - Gloomy Manor - Library Piano.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h1 className="Gamestart-title" style={{ color: 'white', textAlign: 'center', fontSize: '75px' }}>LEVELS</h1>
          <div className='levels-row'>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level1'>1</a>
              <p style={{ color: 'white', textAlign: 'center' }}>Beginning of the Adventure</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level2'>2</a>
              <p style={{ color: 'white', textAlign: 'center' }}>Learning the Frog's Ways</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level3'>3</a>
              <p style={{ color: 'white', textAlign: 'center' }}>What is that Gold Thing?</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level4'>4</a>
              <p style={{ color: 'white', textAlign: 'center' }}>Making Progress</p>
            </div>
          </div>
          <div className='levels-row'>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level5'>5</a>
              <p style={{ color: 'white', textAlign: 'center' }}>Shop is now Open</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level6'>6</a>
              <p style={{ color: 'white', textAlign: 'center' }}>The Unknown World</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level7'>7</a>
              <p style={{ color: 'white', textAlign: 'center' }}>Frog's Rule</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level8'>8</a>
              <p style={{ color: 'white', textAlign: 'center' }}>Getting Close</p>
            </div>
          </div>
          <div className='levels-row'>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level9'>9</a>
              <p style={{ color: 'white', textAlign: 'center' }}>Don't get Zapped!</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level10'>10</a>
              <p style={{ color: 'white', textAlign: 'center' }}>Almost There!</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level11'>11</a>
              <p style={{ color: 'white', textAlign: 'center' }}>There goes Gravity</p>
            </div>
            <div className="level">
              <a className="level-link" style={{ color: 'white', textAlign: 'center' }} href='/level12'>12</a>
              <p style={{ color: 'white', textAlign: 'center' }}>The Final Showdown</p>
            </div>
          </div>
        </header>
      </div>

    </body>
  )
}

export default Gamestart