import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, {
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import csAnyvision from "../../../assets/images/home/cs-anyvision.png";
import csGlitty from "../../../assets/images/home/cs-glitty.png";
import csRogi from "../../../assets/images/home/rogi.png";
import csIceland from "../../../assets/images/home/i.png";
import csCrawdFor from "../../../assets/images/home/c.png";
import csNutra from "../../../assets/images/home/N.png";

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

function Product(){
    return (
        <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                delay: 7000,
                }}
                pagination={{
                clickable: true,
                el: ".case-study-slider-pagination",
                renderBullet: function (index: any, className: any) {
                    return `<span class='${className}'></span>`
                    // return '<span class="' + className + '">' + "</span>";
                },
                }}
                navigation={{
                nextEl: ".swiper-button-next-unique",
                prevEl: ".swiper-button-prev-unique",
                }}
              
            >
                <SwiperSlide>
                <div className="case-study-slider-wrapper">
                    <div className="background-label">ANYVISION</div>
                    <div className="circle-element"></div>
                    <div className="container">
                    <div className="row project-title">
                        <div className="col">
                        <img src={csAnyvision} alt="AnyVision Face recognition technology company" width="517" height="700" />
                        <p className="project-title-inner">ANYVISION</p>
                        </div>
                    </div>
                    <div className="row align-items-end project-desc">
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <p>
                            Transforming any <br />
                            camera into a smart device
                        </p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <ul className="row project-details">
                            <li className="col">
                            <div className="label">Industry</div>
                            <div className="label-text">
                                Security
                            </div>
                            </li>
                            <li className="col">
                            <div className="label">Platform</div>
                            <div className="label-text">Web &amp; Mobile</div>
                            </li>
                            <li className="col">
                                <Link to='anyvision-web-application.html' >
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                        View Casestudy
                                        <i className="icon-arrow-right"></i>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </SwiperSlide>


                <SwiperSlide>
                <div className="case-study-slider-wrapper">
                    <div className="background-label">ROGI</div>
                    <div className="circle-element"></div>
                    <div className="container">
                    <div className="row project-title">
                        <div className="col">
                        <img src={csRogi} alt="ROGI Task Management Solution" width="512" height="700"  />
                        <p className="project-title-inner">ROGI</p>
                        </div>
                    </div>
                    <div className="row align-items-end project-desc">
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <p>
                            Task management product <br />
                            Empowers Company 
                        </p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <ul className="row project-details">
                            <li className="col">
                            <div className="label">Industry</div>
                            <div className="label-text">
                                IT & Software
                            </div>
                            </li>
                            <li className="col">
                            <div className="label">Platform</div>
                            <div className="label-text">Web, Mobile & Tablets</div>
                            </li>
                            <li className="col">
                                <Link to='rogi-web-mobile-application.html' >
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                        View Casestudy
                                        <i className="icon-arrow-right"></i>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="case-study-slider-wrapper">
                    <div className="background-label">CRAWFORDWISE</div>
                    <div className="circle-element"></div>
                    <div className="container">
                    <div className="row project-title">
                        <div className="col">
                        <img src={csCrawdFor} alt="Crawfordwise Cyber Security"  width="512" height="700" />
                        <p className="project-title-inner">CRAWFORDWISE</p>
                        </div>
                    </div>
                    <div className="row align-items-end project-desc">
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <p>
                            Solutions for any <br />
                            Small to large businesses
                        </p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <ul className="row project-details">
                            <li className="col">
                            <div className="label">Industry</div>
                            <div className="label-text">
                            Consultancy
                            </div>
                            </li>
                            <li className="col">
                            <div className="label">Platform</div>
                            <div className="label-text">Web &amp; Mobile</div>
                            </li>
                            <li className="col">
                                <Link to='crawfordwise-web-mobile-application.html' >
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                        View Casestudy
                                        <i className="icon-arrow-right"></i>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="case-study-slider-wrapper">
                    <div className="background-label">ICELAND</div>
                    <div className="circle-element"></div>
                    <div className="container">
                    <div className="row project-title">
                        <div className="col">
                        <img src={csIceland} alt="Iceland health manufacturer of The Fish Oil products"  width="512" height="700"/>
                        <p className="project-title-inner">ICELAND</p>
                        </div>
                    </div>
                    <div className="row align-items-end project-desc">
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <p>
                            Transforming any <br />
                            camera into a smart device
                        </p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <ul className="row project-details">
                            <li className="col">
                            <div className="label">Industry</div>
                            <div className="label-text">
                                HealthCare
                            </div>
                            </li>
                            <li className="col">
                            <div className="label">Platform</div>
                            <div className="label-text">Web &amp; Mobile</div>
                            </li>
                            <li className="col">
                                <Link to='iceland-health-web-mobile-application.html' >
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                        View Casestudy
                                        <i className="icon-arrow-right"></i>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="case-study-slider-wrapper">
                    <div className="background-label">GLITTY</div>
                    <div className="circle-element"></div>
                    <div className="container">
                    <div className="row project-title">
                        <div className="col">
                        <img 
                            src={csGlitty} 
                            alt="Glitty App Editing Glitter iPhone App"  
                            width="650" 
                            height="700"
                        />
                        <p className="project-title-inner">GlittyApp</p>
                        </div>
                    </div>
                    <div className="row align-items-end project-desc">
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <p>
                        Add a glitter to<br />
                        Various mate based surfaces
                        </p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                        <ul className="row project-details">
                            <li className="col">
                            <div className="label">Industry</div>
                            <div className="label-text">
                                Fashion & Fabrics
                            </div>
                            </li>
                            <li className="col">
                            <div className="label">Platform</div>
                            <div className="label-text">Web &amp; Mobile</div>
                            </li>
                            <li className="col">
                                <Link to="glitty-app.html">
                                <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                    View Casestudy
                                    <i className="icon-arrow-right"></i>
                                </button>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="case-study-slider-wrapper">
                        <div className="background-label">NUTRANXET</div>
                        <div className="circle-element"></div>
                        <div className="container">
                        <div className="row project-title">
                            <div className="col">
                            <img src={csNutra} alt="NutraNext eCommerce Business Website"  width="512" height="700"/>
                            <p className="project-title-inner">NUTRANXET</p>
                            </div>
                        </div>
                        <div className="row align-items-end project-desc">
                            <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                            <p>
                            Nutritional products for <br />
                            Different stages and lifestyles
                            </p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 co-12">
                            <ul className="row project-details">
                                <li className="col">
                                <div className="label">Industry</div>
                                <div className="label-text">
                                 Healthcare
                                </div>
                                </li>
                                <li className="col">
                                <div className="label">Platform</div>
                                <div className="label-text">Web</div>
                                </li>
                                <li className="col">
                                    <Link to="nutranext-web-application.html">
                                    <button className="cmr-outline-btn hvr-shutter-out-horizontal">
                                        View Casestudy
                                        <i className="icon-arrow-right"></i>
                                    </button>
                                    </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
    )
}

export default Product;
