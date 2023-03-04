import React from 'react'
import './index.scss'
import Image from './../../assets/images/image 9.png'
import ImageAvatar from './../../assets/images/Profile image1.png'
export const TopCreators = () => {
  return (
    <section class="section-categories">
      <div class="top-creator-container">
        <div class="carousel-heading-wrap">
          <div class="carousel-heading">
            <span>Top Creators</span>
          </div>
        </div>
        <div class="carousel-wrap">
          <ul class="carousel-list">
            <li class="carousel-item"><a href="" class="carousel-link">
              <div class="carousel-item-info">
                <div class="carousel-info-name">
                  <div class="carousel-info-avatar">
                    <img src={ImageAvatar} alt="" class="carousel-info-img" />
                  </div>
                  <div class="carousel-name">
                    <h6>Virtual Art</h6>
                    <p>4.89 ETH</p>
                  </div>
                </div>
                <div class="carousel-info-qlt">
                  <p class="carousel-qlt-number">33</p>
                  <p class="carousel-qlt-unit">Items</p>
                </div>
              </div>
            </a></li>
            <li class="carousel-item"><a href="" class="carousel-link">
              <div class="carousel-item-info">
                <div class="carousel-info-name">
                  <div class="carousel-info-avatar">
                    <img src={ImageAvatar} alt="" class="carousel-info-img" />
                  </div>
                  <div class="carousel-name">
                    <h6>Virtual Art</h6>
                    <p>4.89 ETH</p>
                  </div>
                </div>
                <div class="carousel-info-qlt">
                  <p class="carousel-qlt-number">33</p>
                  <p class="carousel-qlt-unit">Items</p>
                </div>
              </div>
            </a></li>
            <li class="carousel-item"><a href="" class="carousel-link">
              <div class="carousel-item-info">
                <div class="carousel-info-name">
                  <div class="carousel-info-avatar">
                    <img src={ImageAvatar} alt="" class="carousel-info-img" />
                  </div>
                  <div class="carousel-name">
                    <h6>Virtual Art</h6>
                    <p>4.89 ETH</p>
                  </div>
                </div>
                <div class="carousel-info-qlt">
                  <p class="carousel-qlt-number">33</p>
                  <p class="carousel-qlt-unit">Items</p>
                </div>
              </div>
            </a></li>
            <li class="carousel-item"><a href="" class="carousel-link">
              <div class="carousel-item-info">
                <div class="carousel-info-name">
                  <div class="carousel-info-avatar">
                    <img src={ImageAvatar} alt="" class="carousel-info-img" />
                  </div>
                  <div class="carousel-name">
                    <h6>Virtual Art</h6>
                    <p>4.89 ETH</p>
                  </div>
                </div>
                <div class="carousel-info-qlt">
                  <p class="carousel-qlt-number">33</p>
                  <p class="carousel-qlt-unit">Items</p>
                </div>
              </div>
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