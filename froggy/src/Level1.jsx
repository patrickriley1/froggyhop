import React from "react";  
import { useNavigate } from 'react-router-dom';

function Level1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Level 1</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Level1;
