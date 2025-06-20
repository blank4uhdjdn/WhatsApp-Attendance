import React from 'react';
import jan from "../Images/jan.jpg"
import feb from "../Images/feb.jpg"
import mar from "../Images/mar.jpg"
import apr from "../Images/apr.jpg"
import may from "../Images/may.jpg"
import jun from "../Images/jun.jpg"
import jul from "../Images/jul.jpg"
import aug from "../Images/aug.jpg"
import sep from "../Images/sep.jpg"
import oct from "../Images/oct.jpg"
import nov from "../Images/nov.jpg"
import dec from "../Images/dec.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MyCarousel.css'; // Import the CSS file

const MyCarousel = () => {
  return (
    <div className="carousel-container">
      <div id="customCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={jan} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={feb} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={mar} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={apr} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={may} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={jun} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={jul} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={aug} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={sep} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={oct} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={nov} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={dec} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;