import React from "react";
// import Swiper core and required components
import SwiperCore, {
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import waves from '../../../assets/images/inner-top/waves.svg';
import banner from "../../../assets/images/home/banner.png";
import banner2 from "../../../assets/images/home/banner-2.png";
import banner3 from "../../../assets/images/home/banner-3.svg";
import banner4 from "../../../assets/images/home/digital.png";
import banner5 from "../../../assets/images/home/banner-5.png";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import ImageView from "../../../components/ImageView";
import { Link } from "react-router-dom";

SwiperCore.use([EffectFade]);

function TopSlider() {
  return (
    <div className="banner-swiper">
      {/* <div className="max-animation-lg">
        <div className="top-right">
          <img src={heroTopRight} className="destructive" />
        </div>
      </div> */}
      <Swiper
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{
          clickable: true,
          el: ".home-banner-pagination",
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"><svg><circle r="18" cx="20" cy="20"></circle></svg>' +
              (index + 1) +
              "</span>"
            );
          },
        }}
       
      >
         <SwiperSlide>
          <div className="banner-slide q-green-bg">
            <div className="max-animation-lg">
              <div className="top-right">
                <ImageView src={waves} alt="waves" className="destructive" width="724" height="583"/>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-left">
                    <h3 data-splitting="chars">Mobile Application <strong>Designs</strong></h3>
                    <p>
                      We Create Market Leading
                      <strong>Digital Products, Platforms & Experiences</strong>
                      that Transform Businesses
                    </p>
                    <Link to="/mobile-app-development.html">
                      <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                        View Service
                        <i className="icon-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-right">
                    <div className="banner-image">
                      <ImageView src={banner2} alt="Mobile application design" width="711" height="605" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide orange-bg">
          <div className="max-animation-lg">
              <div className="top-right">
                <ImageView src={waves} alt="waves" className="destructive" width="724" height="583"/>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-left">
                    <h3><strong>Enterprise</strong> Apps <br />Developement</h3>
                    <p>
                      We Create Market Leading
                      <strong>Digital Products, Platforms & Experiences</strong>
                      that Transform Businesses
                    </p>
                    <Link to="/software-development.html">
                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                      View Service
                      <i className="icon-arrow-right"></i>
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-right">
                    <div className="banner-image">
                      <ImageView src={banner} alt="enterprise app development services"  width="692" height="585" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide q-orange-bg">
            <div className="max-animation-lg">
              <div className="top-right">
                <ImageView src={waves} alt="waves" className="destructive"  width="724" height="583"/>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-left">
                    <h3>Hire <strong>Dedicated <br />Developers</strong></h3>
                    <p>
                      We Create Market Leading
                      <strong>Digital Products, Platforms & Experiences</strong>
                      that Transform Businesses
                    </p>
                    <Link to="/hire-dedicated-developers.html">
                      <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                        View Service
                        <i className="icon-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-right">
                    <div className="banner-image">
                      <ImageView src={banner3} alt="hire dedicated developers" width="835" height="665"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="banner-slide q-purp-bg">
            <div className="max-animation-lg">
              <div className="top-right">
                <ImageView src={waves} alt="waves" className="destructive" width="724" height="583"/>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-left">
                    <h3>Digital Application <strong>Transformation</strong></h3>
                    <p>
                      We Create Market Leading
                      <strong>Digital Products, Platforms & Experiences</strong>
                      that Transform Businesses
                    </p>
                    <Link to="/search-engine-optimization.html">
                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                      View Service
                      <i className="icon-arrow-right"></i>
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-right">
                    <div className="banner-image">
                      <ImageView src={banner4} alt="search engine optimization service provider company"  width="935" height="661" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide q-blue-bg">
            <div className="max-animation-lg">
              <div className="top-right">
                <ImageView src={waves} alt="waves" className="destructive" width="724" height="583"/>
              </div>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-left">
                    <h3>Web Application <strong>Services</strong></h3>
                    <p>
                      We Create Market Leading
                      <strong>Digital Products, Platforms & Experiences</strong>
                      that Transform Businesses
                    </p>
                    <Link to="/web-development.html">
                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                      View Service
                      <i className="icon-arrow-right"></i>
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="banner-right">
                    <div className="banner-image">
                      <ImageView src={banner5} alt="web development company"  width="835" height="665" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <div className="home-banner-pagination"></div>
    </div>
  );
}

export default TopSlider;
