import React from "react";
import Carousel from 'react-bootstrap/Carousel'


import AboutImage from "../../assets/imgs/page/about-1.png";
import AboutImage1 from "../../assets/imgs/page/about-2.png";
import AboutImage2 from "../../assets/imgs/page/about-3.png";
import AboutImage3 from "../../assets/imgs/page/about-4.png";


const WelcomeHeader = () => (
  <section className="row align-items-center mb-50">
    <div className="col-lg-6">
      <img
        src={AboutImage}
        alt=""
        className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
      />
    </div>
    <div className="col-lg-6">
      <div className="pl-25">
        <h2 className="mb-30">Welcome to Nest</h2>
        <p className="mb-25">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum.
        </p>
        <p className="mb-50">
          Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et
          Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio
          aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
          Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate id est laborum.
        </p>
        <Carousel>
          <Carousel.Item>
            <img src={AboutImage1} alt="" className="d-block w-25" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={AboutImage2} alt="" className="d-block w-25" />
          </Carousel.Item>
          <Carousel.Item>
          <img src={AboutImage3} alt="" className="d-block w-25"/>
          </Carousel.Item>
          <Carousel.Item>
          <img src={AboutImage2} alt="" className="d-block w-25"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  </section>
);

export default WelcomeHeader;
