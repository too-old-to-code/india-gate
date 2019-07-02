import './call-button.scss'
import React from 'react'

const CallButton = () => {
  return (
    <div className="call-button">
      <button
        className="pure-button button-success"
        style={{width: '80%'}}
      >Call</button>
    </div>
  )
}

export default CallButton