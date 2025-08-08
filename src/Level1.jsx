import React, { use } from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Level1() {
    const navigate = useNavigate();

    // Constants
    const GAME_WIDTH = '100vw';
    const GAME_HEIGHT = '100vh';
    const GROUND_Y = 740;
    const GRAVITY = .4;
    const JUMP_VELOCITY = -15;

    // State
    const [frogY, setFrogY] = useState(GROUND_Y);
    const [velocity, setVelocity] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [backgroundX, setBackgroundX] = useState(0);

    // Animation frame ref
    const animationRef = useRef();
    const velocityRef = useRef(0);
    const jumpingRef = useRef(false);
    const frogYRef = useRef(GROUND_Y);
    const jumpAudioRef = useRef(new Audio('/frogjump.mp3'));

    // Handle jump
  const handleJump = () => {
    if (!jumpingRef.current && frogYRef.current === GROUND_Y) {
      velocityRef.current = JUMP_VELOCITY;
      jumpAudioRef.current.currentTime = 0; // Reset audio to start
      jumpAudioRef.current.play(); // Play jump sound
      jumpingRef.current = true;
      if (!gameStarted) setGameStarted(true);
    }
  };

const musicRef = useRef(null);

  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.volume = 0.2; // Set to 20% volume (range is 0.0–1.0)
    }
  }, []);

useEffect(() => {
    if (!gameStarted) return;
    let raf;
    const moveBg = () => {
      setBackgroundX(x => (x - 2)); // Move background left
      raf = requestAnimationFrame(moveBg);
    };
    moveBg();
    return () => cancelAnimationFrame(raf);
  } , [gameStarted]);

  // Main game loop
  useEffect(() => {
    function gameLoop() {
      // Physics calculation
      if (jumpingRef.current) {
        frogYRef.current += velocityRef.current;
        velocityRef.current += GRAVITY;

        if (frogYRef.current >= GROUND_Y) {
          frogYRef.current = GROUND_Y;
          velocityRef.current = 0;
          jumpingRef.current = false;
        }
        setFrogY(frogYRef.current);
      }
      animationRef.current = requestAnimationFrame(gameLoop);
    }
    animationRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Keyboard jump
  useEffect(() => {
    const onSpace = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleJump();
      }
    };
    window.addEventListener("keydown", onSpace, { passive: false });
    return () => window.removeEventListener("keydown", onSpace);
  }, []);

  return (
    <div className="level1-body"
      style={{ backgroundPositionX: `${backgroundX}px` }}
      tabIndex={0}>
      <audio ref={musicRef} autoPlay loop>
        <source src="/Level1music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h1 className="level1-title">Level 1</h1>
      <button className="menu-button" onClick={() => navigate(-1)}>Back</button>
      {/* Game area */}
      <div
                style={{
                    position: 'relative',
                    width: GAME_WIDTH,
                    height: GAME_HEIGHT,
                    background: 'transparent',
                }}
                onClick={handleJump} // click to jump (for mobile)
            >
                {/* Frog */}
                <img
                    src="frog.png"
                    alt="Frog"
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: frogY,
                        transform: 'translateX(-50%)',
                        width: 100,
                        height: 100
                    }}
                />
                {!gameStarted && (<p style={{ color: 'white', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Press <b>Space</b> or click the box to jump!</p>)}
            </div>
        </div>
    );
}

export default Level1;
