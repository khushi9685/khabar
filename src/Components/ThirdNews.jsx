import React from 'react'

function ThirdNews() {
  return (
    <div class="feature">
    <div class="container">
        <div class="news-title d-flex align-items-center justify-content-between">
            <h2>Features</h2>
            <div class="d-flex">
                <div class="left-right-icon d-flex align-items-center justify-content-end">
                    <a href="#"><i class="fas fa-chevron-left"></i></a>
                    <a href="#"><i class="fas fa-chevron-right"></i></a>
                </div>
                <a href="#">
                    <p class="news-option d-flex justify-content-center align-items-center">All<i class="fas fa-ellipsis-v"></i></p>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 feature-grid">
                <a href="#"><img src="img/dr-khimlal-devkota-1.jpg" class="img-fluid" alt=""/></a>
                <a href="#">
                    <h4>News Content</h4>
                </a>
            </div>
            
           
           
        </div>
    </div>
</div>
  )
}

export default ThirdNews