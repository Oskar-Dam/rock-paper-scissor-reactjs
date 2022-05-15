import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../App.css';


function HomeBtns() {
  let navigate = useNavigate();

  return (
    <div className='home-btns'>
      <button 
        className="btn home-btn" 
        onClick={()  => {
          navigate('/game');
        }}
        >
          PLAY GAME!</button>
    </div>
  )
}

export default HomeBtns

