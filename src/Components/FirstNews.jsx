import React from 'react'

function FirstNews() {
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-6 col-12">
            <div class="bulletin-news d-flex flex-column align-items-center justify-content-center">
                <a href="#"><img src="img/samsad.jpg" class="img-fluid" alt=""/></a>
                <a href="#">
                    <h2>News Title</h2>
                </a>
                <div class="bulletin-timeline d-flex justify-content-center align-items-center">
                    <i class="far fa-calendar-alt"></i><span>20 Minutes</span>
                    <i class="far fa-comment-alt"></i><span>0</span>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="bulletin-grid">
                <div class="row no-gutters">
                    <div class="col-md-6 col-6">
                        <a href="#"><img src="img/Nepali-Congress-Flag-300x169.jpg" class="img-fluid" alt=""/></a>
                    </div>
                    <div class="col-md-6 col-6">
                        <a href="#">
                            <h4>News Content</h4>
                        </a>
                        <div class="bulletin-timeline">
                            <i class="far fa-clock"></i><span>20 Minutes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bulletin-grid">
                <div class="row no-gutters">
                    <div class="col-md-6 col-6">
                        <a href="#"><img src="img/sauraha-photo7-300x182.jpg" alt=""/></a>
                    </div>
                    <div class="col-md-6 col-6">
                        <a href="#">
                            <h4>News Content</h4>
                        </a>
                        <div class="bulletin-timeline">
                            <i class="far fa-clock"></i><span>20 Minutes</span>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
       
    </div>
</div>
  )
}

export default FirstNews