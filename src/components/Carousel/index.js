import React from 'react'
import './index.scss'
import Image from './../../assets/images/image 9.png'
import ImageAvatar from './../../assets/images/Profile image1.png'
export const Carousel = () => {
  return (
    <section class="section-carousel">
      <div class="carousel-container">
        <div class="carousel-heading-wrap">
          <div class="carousel-heading">
            <span>Live Auctions</span>
          </div>
        </div>
        <div class="carousel-wrap">
          <div class="carousel-actions">
            <div class="btn-carousel-action"><i class="fa-solid fa-arrow-left"></i></div>
            <div class="btn-carousel-action active"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
          <ul class="carousel-list">
            <li class="carousel-item"><a href="" class="carousel-link">
              <div class="carousel-item-img">
                <img src={Image} alt="" width="250px" height="170px" />
                <span>03:18:24</span>
              </div>
              <div class="carousel-item-info">
                <div class="carousel-info-name">
                  <div class="carousel-info-avatar">
                    <img src={ImageAvatar} alt="" class="carousel-info-img" />
                  </div>
                  <div class="carousel-name">
                    <h6>Virtual Art</h6>
                    <p>by @wzard</p>
                  </div>
                </div>
                <div class="carousel-heart">
                  <i class="fa-regular fa-heart carousel-heart-icon"></i>
                  92
                </div>
              </div>
              <div class="carousel-currency">
                <p>Current Bid</p>
                <p>4.89 ETH</p>
              </div>
              <button class="btn btn-outline">Place a bid</button>
            </a></li>
            <li class="carousel-item"><a href="" class="carousel-link">
              <div class="carousel-item-img">
                <img src={Image} alt="" width="250px" height="170px" />
                <span>03:18:24</span>
              </div>
              <div class="carousel-item-info">
                <div class="carousel-info-name">
                  <div class="carousel-info-avatar">
                    <img src={ImageAvatar} alt="" class="carousel-info-img" />
                  </div>
                  <div class="carousel-name">
                    <h6>Virtual Art</h6>
                    <p>by @wzard</p>
                  </div>
                </div>
                <div class="carousel-heart">
                  <i class="fa-regular fa-heart carousel-heart-icon"></i>
                  92
                </div>
              </div>
              <div class="carousel-currency">
                <p>Current Bid</p>
                <p>4.89 ETH</p>
              </div>
              <button class="btn btn-outline">Place a bid</button>
            </a></li>
            <li class="carousel-item"><a href="" class="carousel-link">
              <div class="carousel-item-img">
                <img src={Image} alt="" width="250px" height="170px" />
                <span>03:18:24</span>
              </div>
              <div class="carousel-item-info">
                <div class="carousel-info-name">
                  <div class="carousel-info-avatar">
                    <img src={ImageAvatar} alt="" class="carousel-info-img" />
                  </div>
                  <div class="carousel-name">
                    <h6>Virtual Art</h6>
                    <p>by @wzard</p>
                  </div>
                </div>
                <div class="carousel-heart">
                  <i class="fa-regular fa-heart carousel-heart-icon"></i>
                  92
                </div>
              </div>
              <div class="carousel-currency">
                <p>Current Bid</p>
                <p>4.89 ETH</p>
              </div>
              <button class="btn btn-outline">Place a bid</button>
            </a></li>
          </ul>
        </div>
        <div class="carousel-bottom">
          <button class="btn btn-outline">View all</button>
        </div>
      </div>
    </section>
  )
}