import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import '../App.css'

const WebcamPlayer = () => {
    const webcamRef = React.useRef(null);
    const [image, setImage] = React.useState(null);
    const [resultText, setResulText] = useState("");

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
        setResulText("GURAIZE")
    }, [webcamRef]);

    useEffect(() => {

        setResulText("")
      
    }, []);
    
    useEffect(() => {
        if(!image) setResulText("")     
    }, [image]);

    return (
        <div>
            <h1 style={{'text-align': 'center'}}>Jokalaria</h1>
            {!image ? (
            <div>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    mirrored="true"
                />
            </div>
        ) : (
            <img src={image} alt="gure argazkia"/>
            
        )}
            

            <div className="multi-button" >
                <button className="take-pic" onClick={() => (!image ? capture() : setImage(null))}>{!image ? <i className="fa-solid fa-camera"></i> : <i className="fa-solid fa-arrows-rotate"></i>}</button>            
            </div> 
            <p className='winner-ph'>{resultText}</p>       
        </div>
    );
};

export default WebcamPlayer;