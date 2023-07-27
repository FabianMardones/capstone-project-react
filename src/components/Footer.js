import React from 'react'
import imgFooter from '../../src/img/icons_assets/imgfooter.png'
import imgFooter2 from '../../src/img/icons_assets/Logo.png'

const Footer = () => {
  return (
    <>
<footer>
        <div className="copy-right">
            <h4>Copyright. All rights reserved</h4>
        </div>


        <div className="logo logo-footer active">
            <img src={imgFooter2}/>
        </div>



        <nav className="nav-footer">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Reservation</a>
            <a href="#">Order Online</a>
        </nav>


        <div className="newsletter">
            <h3>Suscibe to our newsletter 15% OFF</h3>


            <form action="POST" class="form-footer">
                <label for="email-newsletter">Email</label>
                <input type="email" name="email-newsletter" id="email-newsletter" placeholder="email"/>
                <button className="last-button" type="submit">Send</button>
            </form>


            <div className="copy-right2">
                <h4>Copyright. All rights reserved</h4>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
