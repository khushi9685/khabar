import React from 'react'

function Navbar() {
  return (
    <header id="navbar " className="sticky-top " >
    <div className="container  ">
        <div className="row">
            <div className="col-md-8 col-4 d-flex">
                <div className="header-nav">
                    <a href="#"><i className="fas fa-bars"></i></a>
                </div>
                <div className="menu hide-tab hide-mobile">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Covid-19</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Health</a></li>
                      
                      
                    </ul>
                </div>
            </div>
            <div className="col-md-4 col-8 d-flex justify-content-end">
                <div className="search-box d-flex align-items-center justify-content-center">
                    <a href="#"><i className="fas fa-search"></i></a>
                    <span className="search-tooltip">Search</span>
                </div>
                <div className="time d-flex align-items-center justify-content-center">
                    <a href="#"><i className="far fa-clock"></i></a>
                    <span className="time-tooltip">Current Update</span>
                </div>
                <div className="trending d-flex align-items-center justify-content-center">
                    <i className="fas fa-chart-line"></i>
                    <a href="#" className="hide-mobile-l">Trending</a>
                    <span className="trending-tooltip">News</span>
                </div>
                <div className="english d-flex align-items-center">
                    <a href="#">English</a>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Navbar