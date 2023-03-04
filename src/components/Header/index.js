import React from 'react'
import Logo from './../../assets/images/image.png'
import './index.scss'
export const Header = () => {
  return (
    <header>
      <div class="container">
        <ul class="header-list">
          <li class="header-item">
            <img src={Logo} alt="Logo" />
          </li>
          <li class="header-item">
            <ul class="header-nav-list">
              <li class="header-nav-item"><a href="#" class="header-nav-link active">Explore</a></li>
              <li class="header-nav-item"><a href="#" class="header-nav-link">Creators</a></li>
              <li class="header-nav-item"><a href="#" class="header-nav-link">Community</a></li>
            </ul>
          </li>
          <li class="header-item">
            <a href="#" class="header-nav-link header-nav-wallet">Connect Wallet</a>
          </li>
        </ul>
      </div>
    </header>
  )
}