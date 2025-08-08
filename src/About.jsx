import React from "react";
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About the Makers</h1>
      <p>This game was created by Andrew and Patrick. Andrew loves games and frogs, while Patrick enjoys coding and has a cousin who likes frogs.</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default About;   