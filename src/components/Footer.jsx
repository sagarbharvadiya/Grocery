import React from 'react'

const Footer = () => {
  return (
    <>
      <section className='footer'>
        
        <div className=' container'>
          <div className='row'>
            <div className=' col-lg-3'>
              <img src="../image/logo-removebg-preview.png" alt="" />
              <p><i class="fa-solid fa-location-dot"></i><span>Address :</span>1762 School House Road</p>
              <p><i class="fa-solid fa-phone"></i><span>Call :</span> 1233-777</p>
              <p><i class="fa-solid fa-envelope"></i><span>Email :</span> groceyish@contact.com</p>
            </div>
            <div className=' col-lg-3'>
              <h6>Menu</h6>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Products </li>
              </ul>
            </div>
            <div className=' col-lg-3'>
              <h6>Quick Links</h6>
              <ul>
                <li>Terms & Conditions</li>
                <li>Return & Refund Policy</li>
                <li>Shopping Policy</li>
              </ul>
            </div>
            <div className=' col-lg-3'>
              <h6>Security</h6>
              <ul>
                <li>Privacy Policy</li>
                <li>Payment Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className='copy_right'>
        <div className=' container'>
        <p>2022 Deal Buddy Limited. All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer