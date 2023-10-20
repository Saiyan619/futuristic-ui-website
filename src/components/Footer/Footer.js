import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
          <div className='footer-header-container'>
              <h5>Do you want to step in to the future before others</h5>
              <button className='footer-btn'>Request Early Access</button>
          </div>
          
          <div className='last-part-container'>  
              <div className='footer-logo-dets'>
                  <span className='footer-logo'>GPT-3</span>
                  <p>Crechterwoord K12 182 DK Alknjkcb,<br></br> All Rights Reserved</p>
              </div>

              <div className='footer-details-container'>
                  <span>Links</span>
                  <ul>
                      <li>Overons</li>
                      <li>Social Media</li>
                      <li>Counters</li>
                      <li>Contact</li>
                  </ul>
              </div>

              <div className='footer-details-container'>
                  <span>Company</span>
                  <ul>
                      <li>Terms & Conditions</li>
                      <li>Privacy Policy</li>
                      <li>Contact</li>
                  </ul>
              </div>

              <div className='footer-details-container'>
                  <span>Get in touch</span>
                  <ul>
                      <li>Crechterwoord K12 182 DK Alknjkcb</li>
                      <li>085-132567</li>
                      <li>info@payme.net</li>
                  </ul>
              </div>
          </div>
    </div>
  )
}
