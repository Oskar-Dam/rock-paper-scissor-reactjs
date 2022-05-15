import React from 'react'
import WebcamPlayer from "../components/WebcamPlayer"
import OpponentChoice from "../components/OpponentChoice"

function Game() {
  return (
    <div className='container'>
      <div className='gamescreen'>
        <div className='row'>
          <div className='col-4'>
            <WebcamPlayer />
          </div>
          <div className='col-4'>
            <h1 className='vs'>vs</h1>
          </div>
          <div className='col-4'>
            <OpponentChoice />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game