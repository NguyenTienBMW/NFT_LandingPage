import React from 'react'
import './index.scss'
export const Banner = () => {
  return (
    <section class="banner">
      <div class="container-banner">
        <div class="banner-left">
          <div class="banner-title">
            Explore, Buy and <br />Sell the <span>Best <br /> NFTs!</span>
          </div>
          <div class="banner-actions">
            <button class="btn btn-primary">Explore</button>
            <button class="btn btn-outline ml-15">Create</button>
          </div>
          <ul class="banner-list">
            <li class="banner-item">32k+
              <p>Artworks</p>
            </li>
            <li class="banner-item">20k+
              <p>Auctions</p>
            </li>
            <li class="banner-item">
              12k+
              <p>Creators</p>
            </li>
          </ul>
        </div>
        <div class="banner-right">
          <div class="banner-right-img">
            <div class="banner-top">
              <div class="banner-current">
                <p>Current Bid</p>
                <h5>0.99 ETH</h5>
              </div>
              <div class="banner-time">
                <p>Ends in</p>
                <h5>25 hrs</h5>
              </div>
            </div>
            <div class="banner-bottom">
              <div class="banner-bottom-left">
                <h5>Artist</h5>
                <p>@wzard</p>
              </div>
              <div class="banner-bottom-right">
                <a href="#" class="btn">Start Bid</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="btn-scoll-wrap">
        <button class="btn-scroll">
          <i class="fa-solid fa-arrow-down"></i>
        </button>
      </div>

    </section>
  )
}