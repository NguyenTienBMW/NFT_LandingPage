import React from 'react'
import './index.scss'
import Vector from './../../assets/images/Vector 1.png'
export const FlowWork = () => {
return (
<section className='section-work-flow'>
  <div class="work-flow-container">
    <div class="work-flow-heading">
      <p>How it works</p>
    </div>
    <ul class="work-flow-list">
      <li class="work-flow-item">
        <div class="work-flow-arrow">
          <div class="work-flow-icon">
            <i class="fa-solid fa-wallet"></i>
          </div>
          <div class="work-flow-img">
            <img src={Vector} alt="" />
          </div>
        </div>
        <p class="work-flow-text">Set up your wallet</p>

      </li>
      <li class="work-flow-item">
        <div class="work-flow-arrow">
          <div class="work-flow-icon">
            <i class="fa-solid fa-wallet"></i>
          </div>
          <div class="work-flow-img">
            <img src={Vector} alt="" />
          </div>
        </div>
        <p class="work-flow-text">Create your collection</p>
      </li>
      <li class="work-flow-item">
        <div class="work-flow-arrow">
          <div class="work-flow-icon">
            <i class="fa-solid fa-wallet"></i>
          </div>
          <div class="work-flow-img">
            <img src={Vector} alt="" />
          </div>
        </div>
        <p class="work-flow-text">Add your NFTs</p>
      </li>
      <li class="work-flow-item">
        <div class="work-flow-arrow">
          <div class="work-flow-icon">
            <i class="fa-solid fa-file"></i>
          </div>
        </div>
        <p class="work-flow-text">List them for sale</p>
      </li>
    </ul>
  </div>
</section>
)
}