import React, { useEffect, useState } from 'react'
import axios from 'axios'
import opponentImage from "../assets/images/opponent-image.png"
import rock from "../assets/images/piedra.png"
import paper from "../assets/images/papel.png"
import scissor from "../assets/images/tijera.png"

function OpponentChoice() {
  const [advImage, setAdvImage] = useState(false);
  const [opponentImage, setOpponentImage] = useState(null);
  const [resultText, setResulText] = useState("");
  const [pictureIndex , setPictureIndex] = useState(null);
  const elements = [rock, paper, scissor];
  useEffect(() => {
   
      if (pictureIndex === 0) {
        setResulText("GANADOR")
      } else if (pictureIndex == 2) {
        setResulText("EMPATE")
      } else {
        setResulText("PERDEDOR")
      }

  }, [pictureIndex]);

  useEffect(() => {
    
      setOpponentImage(opponentImage);
      setResulText("")
    
  }, []);

  
  const handleImg = () => {
    axios.post('http://localhost:3000/api/image', {
      value: 0
    })
    .then(function (response) {
      console.log(response.data.message);
      setPictureIndex(response.data.message);
      setOpponentImage(elements[response.data.message]);
      setAdvImage(true)
    })
    .catch(function (error) {
      console.log(error);
    });
      
  }

  return (
    <div>
      <img src={opponentImage} width={640} height={480}></img>
      <div className="multi-button" >
            <button className="send-pic" onClick={handleImg}><i className="fa-solid fa-paper-plane"></i></button>
            
      </div>   
      <p className='winner-ph'>{resultText}</p>
    </div>
    
    
  )
}

export default OpponentChoice