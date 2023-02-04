import React from 'react'

function HealthNews() {
  return (
    <div class="health">
    <div class="container">
        <div class="news-title d-flex align-items-center justify-content-between">
            <div class="health-title">
                <h2>Health</h2>
            </div>
            <div class="hide-mobile">
                <div class="news-option-grid d-flex">
                    
                    <a href="#">
                        <p class="news-option d-flex justify-content-center align-items-center">Fresh</p>
                    </a>
                    <a href="#">
                        <p class="news-option d-flex justify-content-center align-items-center">Bollywood / Hollywood</p>
                    </a>
                    <a href="#">
                        <p class="news-option d-flex justify-content-center align-items-center">Video</p>
                    </a>
                    <a href="#">
                        <p class="news-option d-flex justify-content-center align-items-center">Gallery</p>
                    </a>
                    <a href="#">
                        <p id="last" class="news-option d-flex justify-content-center align-items-center">All<i
                                class="fas fa-ellipsis-v"></i></p>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 headline">
                <a href="#"><img src="img/AdobeStock_166977200-2500x1406-1-768x432.jpeg" class="img-fluid"
                        alt=""/></a>
                <a href="#">
                    <h2>News Content</h2>
                </a>
            </div>
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row health-grid">
                            <div class="col-md-5 col-5">
                                <a href="#"><img src="img/1140579-300x178.jpg" class="img-fluid" alt=""/></a>
                            </div>
                            <div class="col-md-7 col-7">
                                <a href="#">
                                    <h4>News Content</h4>
                                </a>
                            </div>
                        </div>
                        
                       
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HealthNews
