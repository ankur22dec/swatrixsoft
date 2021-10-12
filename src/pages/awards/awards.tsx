import React from "react";
import "./awards.scss";
import { Helmet } from "react-helmet";
import ImageView from "../../components/ImageView";
import waves from "../../assets/images/inner-top/waves.svg";
import ContactForm from "../../components/ContactForm/contactForm";
import iso1 from "../../assets/images/global-delivery/iso1.svg";
import iso2 from "../../assets/images/global-delivery/iso2.svg";
import arrowprev from "../../assets/images/arrow-prev.svg";
import arrownext from "../../assets/images/arrow-next.svg";
import trophy from "../../assets/images/awards/trophy.svg";
import itfirms from "../../assets/images/awards/itfirms-logo.svg";
import goodfirms from "../../assets/images/footer-logo-good-firms.svg";
import appstory from "../../assets/images/awards/app-story.png";
import clutch from "../../assets/images/footer-logo-clutch.png";
import manifest from "../../assets/images/awards/menifest.svg";
import techviewer from "../../assets/images/awards/techviewer.png";
import topdevelopers from "../../assets/images/footer-logo-td.png";
import topfirms from "../../assets/images/awards/top-firms.png";
import designRush from "../../assets/images/awards/badge-website-development.svg";
import gesia from "../../assets/images/awards/gesia.png";
import nasscom from "../../assets/images/awards/nasscom.png"; 
import shopifypartner from "../../assets/images/awards/shopify-partner.png"; 
import amazon from "../../assets/images/awards/aws.png"; 
import { Swiper, SwiperSlide } from "swiper/react";

class Awards extends React.Component {
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
          <div className="cmr-portfolio awards-page">
            <div className="inner-top-header banner-without-image">
              <div className="max-animation-lg">
                <div className="top-right">
                  <ImageView src={waves} alt="waves" className="destructive" />
                </div>
              </div>
              <div className="container">
                <div className="cmr-reflectors">AWARDS</div>
                <div className="row align-items-stretch">
                  <div className="col-md-12">
                    <div className="inner-left">
                      <div
                        className="inner-head-title sr-from-bottom text-center"
                        data-splitting
                      >
                        <div className="banner-pattern centered_lines">
                          <div className="pattern_inner">
                            <span></span>
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                            <div className="line line3"></div>
                          </div>
                        </div>
                        <h1>
                          <span>Creating Culture</span> of Best Practices,
                          <br />
                          Innovation and Sharing
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="excellent-results sr-from-bottom-1 left-sq">
            <div className="container mini-container pt-60 pb-100">
              <div className="sec-tag-lines">
                <h2 className="sr-from-bottom-2 font-weight-bold visitors-to-customers">
                  We believe great work is always recognized, and certificates are part of these recognitions. 
                </h2>
              </div>
            </div>
          </div>

          <div className="awards">
            <div className="container">
              <div className="mini-container">
                <div className="award_title">
                  <div className="award_title_inner sr-from-bottom-1">
                    <div className="award_section_icon">
                      <div className="cmr-tech-part">
                        <div className="cmr-tech-xicon blue2-bg">
                          <div className="spriteOne spt-mobile-tech certificate-icon different-certificate"></div>
                        </div>
                      </div>
                    </div>
                    <h3>
                      <span>Certificates</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="award_list">
                <ul>
                  <li>
                    <div className="award_item sr-from-bottom-1">
                      <div className="award_name">
                        <ImageView src={iso1} alt="Certificate" />
                      </div>
                      <div className="award_detail plain-blue-bg">
                        <h4>ISO 9001:2015</h4>
                        <p>
                          SWATRIXSOFT is an ISO 9001:2015 certified company aiming to
                          highest quality standards in our services and solution
                          delivery.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="award_item sr-from-bottom-1">
                      <div className="award_name">
                        <ImageView src={iso2} alt="Certificate" />
                      </div>
                      <div className="award_detail plain-green-bg">
                        <h4>ISO 27001</h4>
                        <p>
                          SWATRIXSOFT received accreditation of ISO 27001:2013
                          certification, which is global best practice
                          specification of Information Security Management
                          Systems (ISMS). We are committed to using
                          international best practices of information security
                          and its continuous enhancement of systems and
                          processes.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="awards">
            <div className="container">
              <div className="mini-container">
                <div className="award_title text-right">
                  <div className="award_title_inner rtldirection sr-from-bottom-1">
                    <div className="award_section_icon">
                      <div className="cmr-tech-part">
                        <div className="cmr-tech-xicon blue1-bg">
                          <div className="spriteOne spt-mobile-tech different-certificate award-icon"></div>
                        </div>
                      </div>
                    </div>
                    <h3>
                      <span>Awards</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="award_list">
                <ul>
                  <li>
                    <div className="award_item sr-from-bottom-1">
                      <div className="award_name">
                        <ImageView src={iso1} alt="Certificate" />
                      </div>
                      <div className="award_detail plain-darkblue-bg">
                        <h4>CIO Review</h4>
                        <p>
                          SWATRIXSOFT has been Ranked among Most promising Top 20
                          Software providers of India into diverse business
                          domains like eCommerce, Banking, Insurance, Healthcare
                          and Education.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="awards">
            <div className="container">
              <div className="mini-container">
                <div className="award_title">
                  <div className="award_title_inner sr-from-bottom-1">
                    <div className="award_section_icon">
                      <div className="cmr-tech-part">
                        <div className="cmr-tech-xicon red-bg">
                          <div className="spriteOne spt-mobile-tech different-certificate alliance-icon"></div>
                        </div>
                      </div>
                    </div>
                    <h3>
                      <span>Alliances</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="award_list">
                <ul>
                  <li>
                    <div className="award_item sr-from-bottom-1">
                      <div className="award_name">
                        <ImageView src={gesia} alt="Certificate" />
                      </div>
                      <div className="award_detail plain-blue-bg ">
                        <h4>GESIA</h4>
                        <p>
                        SWATRIXSOFT is an ISO 9001:2015 certified company aiming to
                          highest quality standards in our services and solution
                          delivery.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="award_item sr-from-bottom-1">
                      <div className="award_name">
                        <ImageView src={nasscom} alt="Certificate" />
                      </div>
                      <div className="award_detail plain-green-bg">
                        <h4>NASSCOM</h4>
                        <p>
                        SWATRIXSOFT received accreditation of ISO 27001:2013
                          certification, which is global best practice
                          specification of Information Security Management
                          Systems (ISMS). We are committed to using
                          international best practices of information security
                          and its continuous enhancement of systems and
                          processes.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="award_item sr-from-bottom-1">
                      <div className="award_name">
                        <ImageView src={shopifypartner} alt="Certificate" />
                      </div>
                      <div className="award_detail plain-red-bg">
                        <h4>Shopify Partners</h4>
                        <p>
                        SWATRIXSOFT is an ISO 9001:2015 certified company aiming to
                          highest quality standards in our services and solution
                          delivery.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="award_item sr-from-bottom-1">
                      <div className="award_name">
                        <ImageView src={amazon} alt="Certificate" />
                      </div>
                      <div className="award_detail plain-darkblue-bg">
                        <h4>Amazon Web Services</h4>
                        <p>
                        SWATRIXSOFT received accreditation of ISO 27001:2013
                          certification, which is global best practice
                          specification of Information Security Management
                          Systems (ISMS). We are committed to using
                          international best practices of information security
                          and its continuous enhancement of systems and
                          processes.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="awards award-swiper-main">
            <div className="container">
              <div className="award_title text-center">
                <div className="award_title_inner centerdir sr-from-bottom-1">
                  <div className="award_section_icon">
                    <div className="cmr-tech-part">
                      <div className="cmr-tech-xicon green-bg ml-auto mr-auto">
                        <div className="spriteOne spt-mobile-tech different-certificate ranked-icon"></div>
                      </div>
                    </div>
                  </div>
                  <h3>
                    <span>Ranked as</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="award_swiper sr-from-bottom-1">
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1100: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next-unique",
                  prevEl: ".swiper-button-prev-unique",
                }}
              >

              <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2018
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topdevelopers} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.topdevelopers.co/directory/mobile-app-developers/android/country/india">
                        Top Developers <span>-</span> Leading Android Development Company 
                        </a>
                      </h3>
                      <p>
                      Top Developers awarded SWATRIXSOFT as top Android app Development Company for their wide range of knowledge in building successful app. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2018
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={goodfirms} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.goodfirms.co/directory/city/mobile-app-design-companies/ahmedabad">
                        Goodfirms <span>-</span> Leading Mobile App Design Company
                        </a>
                      </h3>
                      <p>
                      Goodfirms awarded SWATRIXSOFT as top best mobile app Design Company for their extravagant knowledge in UX/UI processes and design creativity. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2018  
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={clutch} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://clutch.co/profile/cmarix">
                        Clutch.co  <span>-</span> Top Web Development Company
                        </a>
                      </h3>
                      <p>
                      Clutch awarded SWATRIXSOFT as top best web development Company for their immense knowledge and emphasizing client appreciation.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                      2019
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={itfirms} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.itfirms.co/top-web-development-companies">IT Firms <span> - </span> Top Web Development Copmany  </a>
                      </h3>
                      <p>
                        IT firms awarded SWATRIXSOFT as leading Web Development Company for their continuous effort and quality results of web development services. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                      2019
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={itfirms} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.itfirms.co/top-mobile-app-development-companies">
                            IT Firms <span>-</span> Top Mobile App Development Copmany
                        </a>
                      </h3>
                      <p>
                      IT firms awarded SWATRIXSOFT as leading Mobile App Development Company for their robust approach and quality results of mobile app development services.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2019
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={goodfirms} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.goodfirms.co/directory/state/top-software-development-companies/new-york">
                        Goodfirms <span>-</span> Leading Software Development Company
                        </a>
                      </h3>
                      <p>
                      Goodfirms awarded SWATRIXSOFT as top Software Development Company for out-breaking skills in software development platforms. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>        
                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2019 
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={appstory} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.appstory.org/top-best-companies/top-x-flutter-app-development-companies-2020">
                        App Story  <span>-</span> Leading Flutter App Development Company 
                        </a>
                      </h3>
                      <p>
                      App Story awarded SWATRIXSOFT as leading Flutter App Development Company for their proven approaches in cross-platform app development services. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>        
                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2019  
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={manifest} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://themanifest.com/in/software-development/companies">
                          Manifest  <span>-</span> Top Software Development Company
                        </a>
                      </h3>
                      <p>
                      Manifest awarded SWATRIXSOFT as top Software Development Company for their outstanding efforts and knowledge in software development services.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2019  
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={manifest} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://themanifest.com/web-development/companies?page=1">
                          Manifest  <span>-</span> Top Web Development Company
                        </a>
                      </h3>
                      <p>
                      Manifest awarded SWATRIXSOFT as top Web Development Company for their extravagant knowledge in web platforms and its standards. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2019  
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={designRush} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.designrush.com/agency/drupal-web-design?page=5">
                        DesignRush  <span>-</span> Top Drupal Development Company 
                        </a>
                      </h3>
                      <p>
                      DesignRush awarded SWATRIXSOFT as top Drupal development company for their immense knowledge in PHP development frameworks.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2019  
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={techviewer} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://techreviewer.co/top-software-development-companies?page=3">
                        TechReviewer   <span>-</span> Top Software development Company 
                        </a>
                      </h3>
                      <p>
                      TechReviewer awarded SWATRIXSOFT as top software development company for their guaranteed results and success of clients around the globe.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2020
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topdevelopers} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://topdevelopers.biz/topdeveloper/top-ecommerce-development-companies-and-developers-2020">
                            Top Developers <span>-</span> Leading eCommerce Development Company 
                        </a>
                      </h3>
                      <p>
                      Top Developers awarded SWATRIXSOFT as top eCommerce Development Company for their result-oriented selling techniques and wide technical knowledge.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                

               

                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2020
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topfirms} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://topfirms.co/companies/mobile-app-development/india">
                          Top Firms <span>-</span> Leading Mobile App Development Company
                        </a>
                      </h3>
                      <p>
                      Top firms awarded SWATRIXSOFT as leading Mobile App Development Company for their result-oriented approach and guaranteed results of mobile app development services.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>


                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2020
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={appstory} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.appstory.org/top-best-companies/top-internet-of-things-iot-app-development-companies-2020">
                        App Story  <span>-</span> Leading IoT App Development Company
                        </a>
                      </h3>
                      <p>
                      App Story awarded SWATRIXSOFT as leading IoT App Development Company for their extraordinary skills in bringing automation through all latest technology. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="award-swiper-item">
                    <div className="title-with-trophy">
                      <ImageView src={trophy} alt="Trophy" />
                      Award
                    </div>
                    <div className="award-year">
                    2020  
                      <span className="dot-pattern">
                        <span></span>
                      </span>
                    </div>
                    <div className="swiper-award-list">
                      <ul>
                        <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={appstory} alt="Award" />
                          </div>
                        </li>
                        {/* <li className="cmr-tw-adv">
                          <div className="slide-plate">
                            <ImageView src={topagency} alt="Award" />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="swiper-award-detail">
                      <h3>
                        <a href="https://www.appstory.org/top-best-companies/top-mobile-app-design-companies-of-2020">
                        App Story  <span>-</span> Top Mobile App Design Company
                        </a>
                      </h3>
                      <p>
                      App Story awarded SWATRIXSOFT as top best mobile app Design Company for their extravagant knowledge in UX/UI processes and design creativity. 
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

               
                

              </Swiper>
              <div className="award_swiper_navigator sr-from-bottom-1">
                <div className="swiper-button-prev-unique">
                  <ImageView src={arrowprev} alt="arrow-prev" width="17" height="14"></ImageView>
                </div>
                <div className="swiper-button-next-unique">
                  <ImageView src={arrownext} alt="arrow-next" width="17" height="14"></ImageView>
                </div>
              </div>
            </div>
          </div>

          <div className="cmarix_motto pt-60 pb-60">
            <div className="container mini-container">
              <div className="better_outcome">
                <div className="sec-tag-lines sr-from-bottom-1">
                  <h3>
                  Working with SWATRIXSOFT means your recognition is not far away with great software for great business.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix">
            <ContactForm />
          </div>
        </div>
      </>
    );
  }
}

export default Awards;
