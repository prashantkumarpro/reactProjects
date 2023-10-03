import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
  <>
     {/*  footer page start from here  */}
    <footer>
        <div class="footer-container">
            <div class="container">
                <div class="footer-info">
                    <h2>Prashant Kumar</h2>
                    <h3>123 Street, Bihar, India</h3>
                    <div class="footer-contact">
                        <p>+919006756153</p>
                        <p>prashantsako@gmail.com</p>
                    </div>
                </div>
                <div class="footer-social">
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                </div>

            </div>
            <div class="copyright">
                <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            </div>
        </div>


    </footer>
  </>
  )
}

export default Footer