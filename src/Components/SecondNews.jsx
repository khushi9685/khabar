import React from 'react'

function SecondNews() {
  return (
    <div class="news">
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="news-title d-flex align-items-center justify-content-between">
                    <h2>News</h2>
                    </div>
                <div class="news-main">
                    <a href="#">
                        <h2>News Content</h2>
                    </a>
                </div>
                <div class="row news-headline">
                    <div class="col-md-7 news-img">
                        <a href="#"><img src="img/rainy-season-9-768x512.jpg" class="img-fluid" alt=""/></a>
                    </div>
                    <div class="col-md-5">
                        <div class="bulletin-timeline">
                           <span>20 Minutes</span>
                        </div>
                        <div class="news-detail">
                            <p>News Content
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row news-grid">
                    <div class="col-md-4 col-6">
                        <a href="#"><img src="img/Parbat-Pahiro-300x225.jpg" class="img-fluid" alt=""/></a>
                        <a href="#">
                            <h4>News Content</h4>
                        </a>
                        <div class="bulletin-timeline">
                           <span>20 Minutes</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div class="col-md-3">
                <div class="thoughts d-flex align-items-center justify-content-between">
                    <h2>News Content</h2>
                    <a href="#">
                        <p class="news-option d-flex justify-content-center align-items-center">All
                        </p>
                    </a>
                </div>
               
                
                
                
                <div class="blog d-flex align-items-center justify-content-between">
                    <h2>News Content</h2>
                   
                </div>
               
                
            </div>
        </div>
    </div>
</div>
  )
}

export default SecondNews