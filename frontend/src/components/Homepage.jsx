import React from "react";
import { Link } from "react-router-dom";
import "../components/Footer.css"
import Carousel from 'react-bootstrap/Carousel';
import car from "../../src/images/car1.jpg";
import car1 from "../../src/images/car2.jpg";
import car2 from "../../src/images/car3.jpg";
import car3 from "../../src/images/car4.jpg";
import car4 from "../../src/images/car5.jpg";

const Homepage = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-sm navbar-light bg-light">
	  <div class="container-fluid ">
		<h1 class="fw-bolder text-info border-dark">CAR RENTAL SYSTEM</h1>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul class="navbar navbar-nav ">
			<li class="nav-item">
			  <button className="btn btn-warning mx-3 ">
              <Link className="text-white " to="/ologin">
                Login
              </Link>
            </button>
			</li>
			<li class="nav-item">
            <button className="btn btn-primary ">
              <Link className="text-white" to="/oreg">
                Sign up
              </Link>
            </button>
			</li>			
		  </ul>		  
		</div>
	  </div>
	</nav>


	<body>
	<Carousel>
        <Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
src={car}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3> Dodge challenger</h3>
            <p>$64,500-$126,150 </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
src={car1}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Dodge challenger II</h3>
            <p>$ 65,600-$127,160</p>
          </Carousel.Caption>
        </Carousel.Item>
		<Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
src={car2}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>jaguar F-Type</h3>
            <p>$ 50,700-$289,290</p>
          </Carousel.Caption>
        </Carousel.Item>
		<Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
src={car3}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Mazda MX-5</h3>
            <p>$ 60,400-$268,478</p>
          </Carousel.Caption>
        </Carousel.Item>
		<Carousel.Item interval={5500}>
          <img
            className="d-block w-100"
src={car4}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>porsche 911</h3>
            <p>$ 89,488-$278,478</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
	</body>
	<div class="footer-dark">
	<footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2023</p>
            </div>
        </footer>
          </div>
	
  </div>

  );
};

export default Homepage;
