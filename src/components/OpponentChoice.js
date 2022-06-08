import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const elements = [rock, paper, scissor];

  useEffect(() => {
   
      if (pictureIndex === 0) {
        setModalText("ORDENADOR GANA. LA PIEDRA GANA A LAS TIJERAS")
      } else if (pictureIndex == 2) {
        setModalText("EMPATE")
      } else {
        setModalText("JUGADOR GANA. LAS TIJERAS CORTAN EL PAPEL")
      }

  }, [show]);

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
      setResulText(response.data.element);
      setOpponentImage(elements[response.data.message]);
      setAdvImage(true)
      handleShow();
    })
    .catch(function (error) {
      console.log(error);
    });
      
  }

  return (
    <div>
      <h1 style={{'text-align': 'center'}}>Ordenagailua</h1>
      <img src={opponentImage} width={640} height={480}></img>
      <div className="multi-button" >
            <button className="send-pic" onClick={handleImg}><i className="fa-solid fa-paper-plane"></i></button>
            
      </div>   
      <p className='winner-ph'>{resultText}</p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>HARRI, PAPER, GURAIZE</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Itxi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
    
  )
}

export default OpponentChoice