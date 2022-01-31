import React from 'react'
import './carouselComp.css'
import bons1 from '../../static/img/bons2.jpg'
import bons2 from '../../static/img/bons1.jpg'
import bons3 from '../../static/img/bons3.jpg'
import greenheart from '../../static/img/heart.png'
import {Link} from 'react-router-dom'

const CarouselComp =()=>{
    return(
    <div id="carouselExampleDark" className="carousel carousel-white slide " data-bs-ride="carousel">
      <div className="carousel-indicators d-xs-none mx-auto">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active " data-bs-interval="10000">
          <img src={bons1} className="carouselImg" alt="..."/>
          <div className="carousel-caption ">
            <h5>Discover what we do!</h5>
            <p>NFT Bonsai...</p>
            <p>Unique works...</p>
            <p>We <img width={70} alt='...' src={greenheart}></img><br></br> cryptos!</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={bons2} className="carouselImg " alt="..."/>
          <div className="carousel-caption ">
            <h5>Oh my cat!</h5>
            <p>Take a look to...<br></br><Link style={{fontSize:'1.2rem'}} className='btn btncustom text-white px-2   ' to="/catalogue"> <i className="fa fa-camera-retro" aria-hidden="true"></i> Our Catalogue</Link></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={bons3} className="carouselImg" alt="..."/>
          <div className="carousel-caption  ">
            <h5>Real Care</h5>
            <p>Ask a question.<br></br> We'll answer<br></br>ASAP!</p>
          </div>
        </div>
      </div>
      {/*<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>*/}
    </div>
    )
}
export default CarouselComp



