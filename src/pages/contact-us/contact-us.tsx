import React from "react";
import "./contact-us.scss";
import { Helmet } from "react-helmet";
import ContactForm from "../../components/ContactForm/contactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageView from "../../components/ImageView";
import location from "../../assets/images/infrastructure-1.jpg";
import skypeicon from "../../assets/images/header/skype-grey.svg";
import gmailicon from "../../assets/images/header/gmail-grey.svg";
import indiaicon from "../../assets/images/header/whatsapp.svg";
import usaicon from "../../assets/images/header/telephone.svg";

class ContactUs extends React.Component {
  // componentWillMount() {
  // }
  componentDidMount() { }

  render() {
    return (
      <>
        <Helmet>
          <script>helloTest();</script>
        </Helmet>
        <div>
          <div className="inner-top-header banner-without-image contactus-page">
            <div className="container">
              <div className="row align-items-stretch">
                <div className="col-md-12">
                  <div className="inner-left">
                    <div
                      className="inner-head-title sr-from-bottom text-center"
                      data-splitting
                    >
                      <div className="contactus_banner_details">
                        <div className="banner-pattern">
                          <div className="pattern_inner">
                            <span></span>
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                            <div className="line line3"></div>
                          </div>
                        </div>
                        <h1>
                          We are ready to Lead You into the future of Technology
                        </h1>
                        <h4>
                          Let's start the{" "}
                          <span className="label-angular">discussion</span>
                          <i className="icon-arrow-down"></i>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix main-cta-form">
            <ContactForm />
          </div>

          <div className="cmarix_locations">
            <div className="container">
              <div className="cmr-reflectors">LOCATIONS</div>
              <div className="row mb-3 align-items-center">
                <div className="col-md-12">
                  <div className="sec-title">
                    <p className="sr-from-bottom-1">
                      <span>Take a look at</span>
                    </p>
                    <h3 className="sr-from-bottom-3">
                    SWATRIXSOFT <span>Locations</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row customer_review_swiper sr-from-bottom-1 location_swiper">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  fadeEffect={{
                    crossFade: true,
                  }}
                  speed={1200}
                  effect="fade"
                  navigation={{
                    nextEl: ".swiper-button-next-unique",
                    prevEl: ".swiper-button-prev-unique",
                  }}
                >
                  <SwiperSlide>
                    <div className="col-12">
                      <div className="row clutch_review align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="locations_left">
                            <ImageView src={location} alt="Location" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="locations_right">
                            <div className="location">
                              <h3>
                                <span>India</span> (HQ)
                              </h3>
                              <p>
                              443,Thegri Nagar, Near IIHT Campus
                        Jodhpur - 342001, Rajasthan, India
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="insideedge global-presence">
          <div className="cmr-reflectors">SWATRIXSOFT</div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="sec-title">
                      <h3 className="sr-from-bottom-2"> Global <span>Presence</span></h3>
                    </div>
                </div>
              </div>
              <div className="col-12 cmarix-locations bbnone">
                <div className="row footer_location_list">
                  <div className="col usa-loc sr-from-bottom-1">
                    <span className="map-icon"></span>
                    <h5>USA</h5>
                    <p>32572 Miller Ct. Temecula, CA 92592</p>
                  </div>
                  <div className="col germany-loc sr-from-bottom-2">
                    <span className="map-icon"></span>
                    <h5>Germany</h5>
                    <p>Essener Strasse 5, 46047 Oberhausen, Germany</p>
                  </div>
                  <div className="col italy-loc sr-from-bottom-3">
                    <span className="map-icon"></span>
                    <h5>Italy</h5>
                    <p>Via Sant’Agostino, 8 10122 Torino Italy</p>
                  </div>
                  <div className="col bahrain-loc sr-from-bottom-4">
                    <span className="map-icon"></span>
                    <h5>Bahrain</h5>
                    <p>Villa 1275 Street 848, Block 408 Town Seef, Bahrain</p>
                  </div>
                  <div className="col nigeria-loc sr-from-bottom-5">
                    <span className="map-icon"></span>
                    <h5>Nigeria</h5>
                    <p>
                      287A, Corporation Drive, Dolphin Estate, Ikoyi, Lagos,
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="start_project contact_us_contacts">
            <div className="container">
              <div className="hire_developer_orange sr-from-bottom-1">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12 col-sm-12 col-12 sr-from-bottom-2">
                    <div className="hire_left sr-from-bottom-2">
                      <h4>Quick Contact</h4>
                      <h3>24*7 Availability</h3>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12 col-12 sr-from-bottom-3">
                    <div className="hire_right">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="getin_touch_block sr-from-bottom-2">
                            <div className="icon">
                              <ImageView src={skypeicon} alt="skype"  width="48" height="48"/>
                            </div>
                            <div className="detail">
                              <h4>Skype ID</h4>
                              <h3>
                                <strong><a href="skype:biz.cmarix? call">biz.SWATRIXSOFT</a></strong>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="getin_touch_block sr-from-bottom-2">
                            <div className="icon">
                              <ImageView src={gmailicon} alt="skype"  width="48" height="48"/>
                            </div>
                            <div className="detail">
                              <h4>Email us</h4>
                              <h3>
                                <strong><a href="mailto:swatrixsoft@gmail.com">swatrixsoft@gmail.com</a></strong>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="getin_touch_block sr-from-bottom-2">
                            <div className="icon">
                              <ImageView src={indiaicon} alt="skype"  width="48" height="48"/>
                            </div>
                            <div className="detail">
                              <h4>India</h4>
                              <h3>
                                <strong><a href="tel:+91 7073875630">+91 7073875630</a></strong>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="getin_touch_block sr-from-bottom-2">
                            <div className="icon">
                              <ImageView src={usaicon} alt="skype"  width="48" height="48"/>
                            </div>
                            <div className="detail">
                              <h4>United States</h4>
                              <h3>
                                <strong><a href="tel:8118849825">8118849825</a></strong>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Start project section */}
          
        </div>
      </>
    );
  }
}

export default ContactUs;
