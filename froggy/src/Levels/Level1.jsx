import React from "react";  
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Level1() {
    const navigate = useNavigate();
    // Constants for game dimensions and physics
    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 400;
    const GROUND_Y = 350;
    const GRAVITY = 1.2;
    const JUMP_VELOCITY = -15;
    const OBSTACLE_SPEED = 5;
    const SPAWN_INTERVAL = 1500;

    // state
    const [frogY, setFrogY] = useState(GROUND_Y);
    const [velocity, setVelocity] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstacles, setObstacles] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // refs
    const lastSpawnRef = useRef(Date.now());
    const animationFrameRef = useRef();


    return (
        <body className="level1-body">
            <audio autoPlay loop>
                <source src="/Level1music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="level1-container">
                <h1>Level 1</h1>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </body>

    );
}

export default Level1;
