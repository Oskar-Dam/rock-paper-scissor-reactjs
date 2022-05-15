import React from 'react'
import opponentImage from "../assets/images/opponent-image.png"
import tijera from "../assets/images/tijera.png"

let image;
let text;

function OpponentChoice() {
  const [advImage, setAdvImage] = React.useState(false);

  if (advImage == false){
    image = opponentImage;
  }
  else {
    image = tijera;
    text = "You win 🥳🥳🥳"
  }
  const handleImg = () => {
      setAdvImage(true)
  }

  return (
    <div>
      <img src={image} width={640} height={480}></img>
      <div className="multi-button" >
            <button className="send-pic" onClick={handleImg}><i className="fa-solid fa-paper-plane"></i></button>
            
      </div>   
      <p className='winner-ph'>{text}</p>
    </div>
    
    
  )
}

export default OpponentChoice