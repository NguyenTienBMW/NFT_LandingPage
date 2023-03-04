import React from 'react'
import Logo from './../../assets/images/Mask Group.png'
import './index.scss'
export const Footer = () => {
return (
<footer className='footer-page'>
  <div class="footer-container">
    <ul class="footer-content-list">
      <li class="footer-item">
        <img
          src="data:image/png;base64,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"
          alt="" srcset="" width="150px" />
      </li>
      <li class="footer-content-item">
        <p>Nec, enim sed lacus, magna pharetra.<br />
          Phasellus tincidunt nulla pharetra gravida est. </p>
        <ul class="social-list">
          <li class="social-item active"><i class="fa-brands fa-youtube"></i></li>
          <li class="social-item"><i class="fa-brands fa-twitter"></i></li>
          <li class="social-item"><i class="fa-brands fa-facebook-f"></i></li>
          <li class="social-item"><i class="fa-brands fa-google-plus-g"></i></li>
        </ul>
        <p class="footer-copyright">All rights reserved@2021</p>
      </li>
      <li class="footer-content-item">
        <h3 class="footer-heading">About Us</h3>
        <ul class="footer-list">
          <li class="footer-item"><a href="#">About NFTs</a></li>
          <li class="footer-item"><a href="#">Live Auctions</a></li>
          <li class="footer-item"><a href="#">NFT Blog</a></li>
          <li class="footer-item"><a href="#">Activity</a></li>
        </ul>
      </li>
      <li class="footer-content-item">
        <h3 class="footer-heading">Support</h3>
        <ul class="footer-list">
          <li class="footer-item"><a href="#">Help & Support</a></li>
          <li class="footer-item"><a href="#">Item Details</a></li>
          <li class="footer-item"><a href="#">Author Profile</a></li>
          <li class="footer-item"><a href="#">Collection</a></li>
        </ul>
      </li>
    </ul>
  </div>
</footer>
)
}