import React from 'react'
import imgFooter from '../../src/img/icons_assets/imgfooter.png'

const Footer = () => {
  return (
    <>
    <div>
      <img src={imgFooter}/>
      <div>
        <h2>Doormat Navigation</h2>
        <ul>
          <li>
            <a>Home</a>
            <a>About</a>
            <a>Menu</a>
            <a>Reservations</a>
            <a>Order Online</a>
            <a>Login</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>
            <a>Adress</a>
            <a>Phone Number</a>
            <a>Email</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a>Adress</a>
            <a>Phone Number</a>
            <a>Email</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Footer
