import React from 'react'
import hand from '../img/hand.jpg'
import rocks from '../img/rocks.jpg'
import sky from '../img/sky.jpg'

export const Gallery = () => {
  return (

    <div class='container mt-3'>
    <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="">
          <img src={hand} class="img-fluid"/>
          <div class="caption">
            <p>Magnifier</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="">
        <img src={sky} class="img-fluid"/>
          <div class="caption">
            <p>Night Sky</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="">
        <img src={rocks} class="img-fluid"/>
          <div class="caption">
            <p>Shore and bridge</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  </div>  kjhkj
  )
}
