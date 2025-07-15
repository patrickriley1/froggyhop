import React from "react";  
import { useNavigate } from 'react-router-dom';

function Level1() {
    const navigate = useNavigate();

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
