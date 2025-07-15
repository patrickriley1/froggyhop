import  react from 'react';
import { useNavigate } from 'react-router-dom';

function Store() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Store</h1>
      <p>Welcome to the Froggy Hop Store! Here you can find various items to enhance your gaming experience.</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Store;