import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'

function Main() {
  return (
    <div className='Main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

    </div>
  )
}

export default Main