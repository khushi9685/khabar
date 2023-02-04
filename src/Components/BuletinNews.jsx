import React from "react";

function BuletinNews() {
  return (
    <div class="bulletin">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="row bulletin-news-gap">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-4 col-5">
                    <a href="#">
                      <img
                        src="img/nac-nepal-airlines-bayusewa-nigam-2-300x179.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="col-md-8 col-7">
                    <a href="#">
                      <h4>News Content</h4>
                    </a>
                    <div class="bulletin-timeline">
                      <i class="far fa-clock"></i>
                      <span>20 Minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuletinNews;
