import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className='nav'>
            <div><h3 className='logo'>lndesign</h3></div>
            <div className='Nav_lists'>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Collections</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='Nav_btn'>
                <button type="button">Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar